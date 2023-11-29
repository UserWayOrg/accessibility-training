"use client";
import { useState } from "react";

export default function Button() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl	font-bold mb-5">Alert Example</h1>
      <button onClick={() => setShowAlert(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring ring-blue-500 ring-offset-2 outline-none inline-block">
        Checkout
      </button>
      {showAlert && <div role="alert" className="bg-red-700 text-sm text-white my-6 mx-0 p-3 rounded-md border-4 border-red-800">
        Something unexpected happened!
      </div>}
    </div>
  );
}
