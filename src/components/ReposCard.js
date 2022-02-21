import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ReposCard({ reposName, language, reposOwner, id }) {
  return (
    <div className="border rounded-md p-2 mx-4 text-ellipsis">
      <Link to={`/${id}`}>
        <div className="hover:bg-violet-100">Name: {reposName}</div>
      </Link>
      <div>Owner name: {reposOwner}</div>
      <div>language: {language}</div>
    </div>
  );
}

ReposCard.propTypes = {
  reposName: PropTypes.string.isRequired,
  language: PropTypes.string,
  reposOwner: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
