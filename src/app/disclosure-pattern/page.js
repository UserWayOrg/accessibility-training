"use client";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function Button() {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonRef = useRef(null);

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl	font-bold mb-5">Disclosure Pattern Example</h1>
      <button onClick={() => setIsExpanded(!isExpanded)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring ring-blue-600 ring-offset-2 outline-none inline-block" aria-haspopup="true" aria-expanded={isExpanded} aria-controls="menu" ref={buttonRef}>
        Solutions
        <FontAwesomeIcon icon={isExpanded ? faCaretUp : faCaretDown} className="ml-2" />
      </button>
      {isExpanded && (
        <div className="my-1 p-2 bg-slate-50 border-2 border-slate-300 shadow-md w-96" id="menu">
          <ul
            onKeyUp={(e) => {
              if (e.code === "Escape") {
                setIsExpanded(false);
                buttonRef.current.focus();
              }
            }}
          >
            <li className="p-1">
              <a href="https://userway.org/widget/" className="hover:underline focus:ring ring-blue-500 ring-offset-2 outline-none inline-block">
                Accessibility Widget
              </a>
            </li>
            <li className="p-1">
              <a href="https://userway.org/scanner/" className="hover:underline focus:ring ring-blue-500 ring-offset-2 outline-none inline-block">
                Accessibility Scanner
              </a>
            </li>
            <li className="p-1">
              <a href="https://userway.org/audit/" className="hover:underline focus:ring ring-blue-500 ring-offset-2 outline-none inline-block">
                Accessibility Audits
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
