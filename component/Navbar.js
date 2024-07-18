import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-md navbar bg-base-100">
      <div>
        <Link href={"/"} className="text-xl btn btn-ghost">
          {" "}
          Next Events
        </Link>
      </div>
      <div className="navbar-center">Search Bar here</div>
      <div className="navbar-end">
        <div className="flex-none">
          <ul>
            <li>
              <Link href="/login"> Login</Link>
            </li>
            <li>
              <Link href="/signup"> Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
