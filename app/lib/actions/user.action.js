"use server";

import { dbConnect } from "../dbConnect";
import bcrypt from "bcrypt";
import User from "../models/user.model";

export const createUser = async (user) => {
  await dbConnect();

  const passwordHash = await bcrypt.hash(user.password, 10);
  const newUser = await User.create({
    ...user,
    password: passwordHash,
  });
  console.log(user);
  return JSON.parse(JSON.stringify(newUser));
};

// get user by mail
export const getUserByEmail = async (userEmail) => {
  await dbConnect();

  const user = await User.findOne({ email: userEmail });

  if (!user) throw new Error("user not found");
  return JSON.parse(JSON.stringify(user));
};
