"use client";
import { getUser } from "@/app/lib/actions";
import { useState } from "react";

export default function Button() {
  // create a state
  const [users, setUsers] = useState([]);

  async function fetchUser() {
    const users = await getUser();
    setUsers(users);
  }

  return (
    <>
      <button className="btn btn-primary" onClick={fetchUser}>
        Get Users
      </button>
      <ul>
        {users.map((user) => {
          return <li key={user.id}> {user.name}</li>;
        })}
      </ul>
    </>
  );
}
