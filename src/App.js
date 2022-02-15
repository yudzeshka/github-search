import axios from "axios";
import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
function App() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://api.github.com/search/repositories?q=max")
      .then(({ data }) => {
        setUsers(data.items);
      });
  }, []);
  console.log(users);
  return (
    <>
      <input placeholder="search"></input>
      <div className="usersCards">
        {users &&
          users.map((user) => (
            <UserCard
              avatar={user.owner.avatar_url}
              userName={user.name}
              id={user.id}
            />
          ))}
      </div>
    </>
  );
}

export default App;
