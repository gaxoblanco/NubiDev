import React from "react";

export const activeFilter = (text, isActive, handleToggle) => {
  return (
    <div className="flex items-center justify-between w-mx border-solid border-b-2 border-background">
      <p>{text}</p>

      <div className="relative p-4" id="white" onClick={handleToggle}>
        <div
          className={`pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-slate-900/10 ring-slate-900/5 ${
            isActive ? "bg-primary" : "bg-background"
          } ring-black/${isActive ? "20" : "5"}`}
        >
          <div
            className={`h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out ${
              isActive ? "translate-x-4 bg-background" : "bg-primary"
            }`}
          ></div>
        </div>
        <div className="z-0">
          <div className="absolute -top-full bottom-2/3 left-0 w-px"></div>
        </div>
      </div>
    </div>
  );
};
