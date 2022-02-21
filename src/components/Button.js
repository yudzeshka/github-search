import React from "react";

export default function Button({ buttonName, onClickBtn }) {
  return (
    <button
      className="border rounded-md mx-5 py-1 px-2 font-bold hover:bg-violet-100"
      onClick={onClickBtn}
    >
      {buttonName}
    </button>
  );
}
