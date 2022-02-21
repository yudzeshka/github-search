import React from "react";
import axios from "axios";
import ReposCard from "../components/ReposCard";
import useDebounce from "../services/use-debounce";
import Button from "../components/Button";

export default function Main() {
  const [repos, setRepos] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [languageName, setLanguageName] = React.useState(null);
  const debouncedSearchValue = useDebounce(searchValue, 600);

  function filterBy(data, field, value) {
    return data.filter((item) => (value ? item[field] === value : item));
  }
  const filterByLanguage = filterBy(repos, "language", languageName);
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
          setRepos(data.items);
        });
    }
    return setRepos([]);
  }, [debouncedSearchValue]);

  return (
    <>
      <h1 className="text-center text-xl">Github search</h1>
      <input
        className="border w-1/2 h-10 rounded-md mt-5 mb-2 bg-slate-100"
        placeholder="Enter repository name"
        onChange={eventHandler}
      ></input>
      {isSearching && (
        <div className="w-screen h-screen text-center text-xl ">
          searching....
        </div>
      )}
      <p className="text-center mb-2">Select language</p>
      <div className="flex justify-center mb-5">
        <Button
          onFilter={() => setLanguageName(null)}
          buttonName={"Show All"}
        />
        <Button
          onFilter={() => setLanguageName("JavaScript")}
          buttonName={"JavaScript"}
        />
        <Button onFilter={() => setLanguageName("Java")} buttonName={"Java"} />
        <Button
          onFilter={() => setLanguageName("Python")}
          buttonName={"Python"}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 grid-flow-row gap-4">
        {filterByLanguage.map((repos) => (
          <ReposCard
            key={repos.id}
            reposName={repos.name}
            reposOwner={repos.owner.login}
            language={repos.language}
            id={repos.id}
          />
        ))}
      </div>
    </>
  );
}
