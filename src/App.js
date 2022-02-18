import axios from "axios";
import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import useDebounce from "./services/use-debounce";
function App() {
  const [users, setUsers] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const debouncedSearchValue = useDebounce(searchValue, 600);

  React.useEffect(() => {
    if (debouncedSearchValue) {
      setIsSearching(true);
      axios
        .get(
          `https://api.github.com/search/repositories?q=${debouncedSearchValue}`
        )
        .then(({ data }) => {
          setIsSearching(false);
          setUsers(data.items);
        });
    }
    return setUsers([]);
  }, [debouncedSearchValue]);

  const eventHandler = (event) => setSearchValue(event.target.value);
  console.log(users);

  return (
    <>
      <input placeholder="search" onChange={eventHandler}></input>
      {isSearching && <div>searching....</div>}
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
