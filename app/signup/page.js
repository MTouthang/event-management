"use client";

import React, { useState } from "react";
import { createUser } from "../lib/actions/user.action";
import SignUpForm from "../../components/SignUpForm";

const Signup = () => {
  return (
    <>
      <div className="mt-12 mx-auto w-full max-w-[500px] p-4 bg-slate-100 text-gray-900">
        <div className="mb-6 space-y-2 text-center">
          <h1 className="text-3xl font-bold"> Sign up</h1>
          <p> Enter Your information to create an Account</p>
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default Signup;
