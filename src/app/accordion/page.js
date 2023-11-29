"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function Button() {
  const [firstTabOpen, setFirstTabOpen] = useState(false);
  const [secondTabOpen, setSecondTabOpen] = useState(false);

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl	font-bold mb-5">Accordion Example</h1>
      <h2>
        <button
          onClick={() => setFirstTabOpen(!firstTabOpen)}
          className="mb-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm focus:ring ring-blue-600 ring-offset-2 outline-none text-left w-full"
          aria-expanded={firstTabOpen}
          aria-controls="second-tab"
          type="button"
          id="second-tab-trigger"
        >
          Accordion Item #1
          <FontAwesomeIcon
            icon={firstTabOpen ? faCaretUp : faCaretDown}
            className="ml-2"
          />
        </button>
      </h2>
      {firstTabOpen && (
        <div
          className="mb-5 p-2 bg-slate-50 border-2 border-slate-300 shadow-sm rounded-sm block"
          id="second-tab"
          role="region"
          aria-labelledby="second-tab-trigger"
        >
          <p className="text-sm p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pulvinar purus tristique risus consectetur varius. Aliquam
            condimentum odio sed ligula laoreet laoreet. Proin tempus nunc vel
            nulla ornare sodales. Fusce accumsan tincidunt purus, ut ullamcorper
            dolor elementum ac. Aliquam dapibus elit ut mauris mattis sagittis.
            Vivamus nec blandit quam. In sodales pellentesque consectetur. Nam
            vitae nibh feugiat, fermentum metus sed, interdum lectus. Vivamus
            laoreet eros vitae scelerisque bibendum. Quisque vel finibus erat,
            et congue tortor. Etiam in tempor eros. Fusce fringilla vehicula
            felis, id faucibus dui iaculis quis. Vivamus congue convallis elit
            non dictum. Etiam imperdiet est ac maximus tristique.
          </p>
        </div>
      )}

      <h2>
        <button
          onClick={() => setSecondTabOpen(!secondTabOpen)}
          className="mb-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm focus:ring ring-blue-600 ring-offset-2 outline-none text-left w-full"
          aria-expanded={secondTabOpen}
          aria-controls="second-tab"
          type="button"
          id="second-tab-trigger"
        >
          Accordion Item #2
          <FontAwesomeIcon
            icon={secondTabOpen ? faCaretUp : faCaretDown}
            className="ml-2"
          />
        </button>
      </h2>
      {secondTabOpen && (
        <div
          className="mb-5 p-2 bg-slate-50 border-2 border-slate-300 shadow-sm rounded-sm block"
          id="second-tab"
          role="region"
          aria-labelledby="second-tab-trigger"
        >
          <p className="text-sm p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pulvinar purus tristique risus consectetur varius. Aliquam
            condimentum odio sed ligula laoreet laoreet. Proin tempus nunc vel
            nulla ornare sodales. Fusce accumsan tincidunt purus, ut ullamcorper
            dolor elementum ac. Aliquam dapibus elit ut mauris mattis sagittis.
            Vivamus nec blandit quam. In sodales pellentesque consectetur. Nam
            vitae nibh feugiat, fermentum metus sed, interdum lectus. Vivamus
            laoreet eros vitae scelerisque bibendum. Quisque vel finibus erat,
            et congue tortor. Etiam in tempor eros. Fusce fringilla vehicula
            felis, id faucibus dui iaculis quis. Vivamus congue convallis elit
            non dictum. Etiam imperdiet est ac maximus tristique.
          </p>
        </div>
      )}
    </div>
  );
}
