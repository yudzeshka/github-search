import axios from "axios";
import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
function App() {
  const [users, setUsers] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    axios
      .get(`https://api.github.com/search/repositories?q=${searchValue}`)
      .then(({ data }) => {
        setUsers(data.items);
      });
  }, [searchValue]);

  const eventHandler = (event) => setSearchValue(event.target.value);
  console.log(users);

  return (
    <>
      <input placeholder="search" onChange={eventHandler}></input>
      <div className="grid grid-cols-4 md:grid-cols-8 grid-flow-row gap-4">
        {users &&
          users.map((user) => (
            <UserCard
              key={user.id}
              avatar={user.owner.avatar_url}
              userName={user.name}
              language={user.language}
            />
          ))}
      </div>
    </>
  );
}

export default App;
