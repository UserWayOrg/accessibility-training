"use client";
import { useState } from "react";

export default function Button() {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl	font-bold mb-5">Toggle Button Example</h1>
      <button
        onClick={() => setIsPressed(!isPressed)}
        aria-pressed={isPressed}
        className={
          "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring ring-blue-600 ring-offset-2 outline-none inline-block " +
          (isPressed ? "bg-indigo-600 hover:bg-indigo-700 ring-indigo-600": "")
        }
      >
        {isPressed ? "Pause" : "Play"}
      </button>
    </div>
  );
}
