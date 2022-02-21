import React from "react";
import { Link } from "react-router-dom";

export default function ReposCard({ reposName, language, reposOwner, id }) {
  console.log(reposName);

  return (
    <div className="border rounded-md p-2 mx-4 text-ellipsis">
      <Link
        // onClick={() => console.log(user)}
        to={`/${id}`}
      >
        <div className="hover:bg-violet-100">Name: {reposName}</div>
      </Link>
      <div>Owner name: {reposOwner}</div>
      <div>language: {language}</div>
    </div>
  );
}
