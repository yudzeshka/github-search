import React from "react";
import { Link } from "react-router-dom";

export default function UserCard(user) {
  console.log(user.userName);
  return (
    <div>
      <div>
        <img src={user.avatar}></img>
      </div>
      <Link
        // onClick={() => console.log(user)}
        to={"/userpage"}
      >
        <div>name: {user.userName}</div>
      </Link>
      <div>language: {user.language}</div>
    </div>
  );
}
