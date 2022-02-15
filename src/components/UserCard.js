import React from "react";

export default function UserCard({ avatar, userName, id }) {
  console.log(userName);
  return (
    <div>
      <div>
        <img src={avatar}></img>
      </div>
      <div>{userName}</div>
      <div>{id}</div>
    </div>
  );
}
