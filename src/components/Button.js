import React from "react";

export default function Button({ buttonName, onFilter }) {
  return (
    <button
      className="border rounded-md mx-5 p-1 font-bold hover:bg-violet-100"
      onClick={onFilter}
    >
      {buttonName}
    </button>
  );
}
