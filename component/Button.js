"use client";
import { useState } from "react";

export default function Button() {
  // create a state
  const [counter, setCounter] = useState(0);

  return (
    <button
      className="btn btn-primary"
      onClick={() => setCounter((preValue) => preValue + 1)}
    >
      Counter : {counter}
    </button>
  );
}
