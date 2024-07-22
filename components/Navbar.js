import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="text-gray-800 navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <p> Search bar here </p>
          </ul>
        </div>
        <Link href={"/"} className="text-xl btn btn-ghost">
          {" "}
          EVENT -Management
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <p> Search bar here </p>
        </ul>
      </div>
      <div className="gap-4 navbar-end">
        <Link href={"/login"} className="btn">
          Login
        </Link>
        <Link href="/signup" className="btn">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
