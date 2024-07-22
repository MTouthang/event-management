"use client";
import React, { useState } from "react";
import { createUser } from "../app/lib/actions/user.action";
import toast from "react-hot-toast";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await createUser({
        email: email,
        name: name,
        password: password,
      });
      console.log(user);

      if (user) {
        toast.success("Sign Up Successful");
        setEmail("");
        setName("");
        setPassword(" ");
      }
    } catch (error) {
      toast.error("Sign Up Failed: This email is already registered");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 ">
        <div className="space-y-2">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="w-full input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="James Weasley"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="w-full input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="w-full input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            required
            minLength={6}
          />
        </div>
        <button className="mt-4 btn btn-primary btn-block">Sign Up</button>
      </form>
    </>
  );
};

export default SignUpForm;
