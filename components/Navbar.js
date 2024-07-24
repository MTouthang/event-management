"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const { status, data: session } = useSession();
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
        {status === "authenticated" && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  alt="Profile Picture"
                  src={session.user.image ?? "/default-user.png"}
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <Link href="/events/create">Create Event</Link>
              </li>
              <li>
                <Link href="" onClick={signOut}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        )}
        {status === "unauthenticated" && (
          <div className="flex-none">
            <ul className="px-1 menu menu-horizontal">
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
