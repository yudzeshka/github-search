import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function UserPage() {
  const [userData, setUserData] = React.useState(null);
  const { userId } = useParams();
  console.log(userId);

  React.useEffect(() => {
    axios.get(`https://api.github.com/user/${userId}`).then(({ data }) => {
      console.log(data);
      setUserData(data);
    });
  }, [userId]);

  return (
    <div className=" w-screen h-screen flex  justify-center items-center">
      {userData && (
        <div className="border rounded-md truncate flex flex-col items-start p-10">
          <img className="w-60 h-60" src={userData.avatar_url} alt="user"></img>
          <div>{`Full name : ${userData.name}`}</div>
          <div>{`Created at : ${userData.created_at}`}</div>
          <span>{`Followers : ${userData.followers} `}</span>
          <span>{`Following : ${userData.following}`}</span>
          <div>{`Repositories : ${userData.public_repos}`}</div>
        </div>
      )}
    </div>
  );
}
