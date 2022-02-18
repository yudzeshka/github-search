import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({ avatar, userName, language }) {
  console.log(userName);
  return (
    <div>
      <div>
        <Link to={"/userpage"}>
          <img src={avatar}></img>
        </Link>
      </div>
      <div>name: {userName}</div>
      <div>language: {language}</div>
    </div>
  );
}
