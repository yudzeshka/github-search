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
      <input
        placeholder="search"
        // value={searchValue}
        onChange={eventHandler}
      ></input>
      <div className="usersCards">
        {users &&
          users.map((user) => (
            <UserCard
              key={user.id}
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
