import React from "react";

export default function UserCard({ avatar, userName, language }) {
  console.log(userName);
  return (
    <div>
      <div>
        <img src={avatar}></img>
      </div>
      <div>name: {userName}</div>
      <div>language: {language}</div>
    </div>
  );
}
