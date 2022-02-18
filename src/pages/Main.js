import React from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import useDebounce from "../services/use-debounce";

export default function Main() {
  const [users, setUsers] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [languageName, setLanguageName] = React.useState(null);
  const debouncedSearchValue = useDebounce(searchValue, 600);

  function filterBy(data, field, value) {
    return data.filter((item) => (value ? item[field] === value : item));
  }
  const filterByLanguage = filterBy(users, "language", languageName);
  const eventHandler = (event) => setSearchValue(event.target.value);

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

  console.log(users);

  return (
    <>
      <input
        className="border"
        placeholder="search"
        onChange={eventHandler}
      ></input>
      {isSearching && <div>searching....</div>}
      <div className="flex justify-around">
        <button className="border" onClick={() => setLanguageName(null)}>
          Show All
        </button>
        <button
          className="border"
          onClick={() => setLanguageName("JavaScript")}
        >
          JavaScript
        </button>
        <button className="border" onClick={() => setLanguageName("Java")}>
          Java
        </button>
        <button className="border" onClick={() => setLanguageName("Python")}>
          Python
        </button>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-8 grid-flow-row gap-4">
        {filterByLanguage.map((user) => (
          <UserCard
            key={user.id}
            avatar={user.owner.avatar_url}
            userName={user.name}
            language={user.language}
            following={user.owner.following_url}
            followers={user.owner.followers_url}
            repos={user.owner.repos_url}
          />
        ))}
      </div>
    </>
  );
}
