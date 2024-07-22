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
