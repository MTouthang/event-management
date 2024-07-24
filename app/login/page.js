import { getServerSession } from "next-auth";
import LoginForm from "@/components/LoginForm";
import React from "react";
import { authConfig } from "../api/auth/[...nextauth]/authConfig";
import { redirect } from "next/dist/server/api-utils";

const Login = async ({ searchParams }) => {
  const data = await getServerSession(authConfig);
  if (data !== null) {
    redirect("/profile");
  }
  return (
    <div className="mt-12 mx-auto  max-w-[500px] p-4 bg-slate-100 text-gray-900">
      <div className="mb-6 space-y-2 text-center">
        <h1 className="text-3xl font-bold"> Login</h1>
        <p> Enter your Login Credentials</p>
      </div>
      <LoginForm callbackUrl={searchParams?.callbackUrl} />
    </div>
  );
};

export default Login;
