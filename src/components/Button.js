import React from "react";
import PropTypes from "prop-types";

export default function Button({ buttonName, onClickBtn }) {
  return (
    <button
      className="border rounded-md  mx-1 mb-2 md:mx-5 py-1 px-2 font-bold hover:bg-violet-100"
      onClick={onClickBtn}
    >
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClickBtn: PropTypes.func.isRequired,
};
