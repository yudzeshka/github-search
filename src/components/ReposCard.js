import React from "react";
import { Link } from "react-router-dom";

export default function ReposCard({ reposName, language, reposOwner, id }) {
  console.log(reposName);

  return (
    <div>
      <div></div>
      <Link
        // onClick={() => console.log(user)}
        to={`/${id}`}
      >
        <div>Name: {reposName}</div>
      </Link>
      <div>Owner name: {reposOwner}</div>
      <div>language: {language}</div>
    </div>
  );
}
