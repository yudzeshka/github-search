import React from "react";
import axios from "axios";
import ReposCard from "../components/ReposCard";
import useDebounce from "../services/use-debounce";
import Button from "../components/Button";

export default function Main() {
  const [repos, setRepos] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [languageName, setLanguageName] = React.useState(null);
  const debouncedSearchValue = useDebounce(searchValue, 600);
  const [currentPage, setCurrentPage] = React.useState(1);
  const USER_PER_PAGE = 40;

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
          `https://api.github.com/search/repositories?q=${debouncedSearchValue}&per_page=${USER_PER_PAGE}&page=${currentPage}`
        )
        .then(({ data }) => {
          setIsSearching(false);
          setRepos(data.items);
          setTotalCount(data.total_count);
        });
    }
    return setRepos([]);
  }, [debouncedSearchValue, currentPage]);

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
      {totalCount && <p>Total repositories = {totalCount}</p>}

      {repos.length > 0 && (
        <>
          <p className="text-center mb-2">Select language</p>
          <div className="flex justify-center mb-5">
            <Button
              onClickBtn={() => setLanguageName(null)}
              buttonName={"Show All"}
            />
            <Button
              onClickBtn={() => setLanguageName("JavaScript")}
              buttonName={"JavaScript"}
            />
            <Button
              onClickBtn={() => setLanguageName("Java")}
              buttonName={"Java"}
            />
            <Button
              onClickBtn={() => setLanguageName("Python")}
              buttonName={"Python"}
            />
          </div>
        </>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 grid-flow-row gap-4 mb-5">
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
      {currentPage > 1 && (
        <Button
          onClickBtn={() => setCurrentPage(currentPage - 1)}
          buttonName={"Previous page"}
        />
      )}
      {totalCount > USER_PER_PAGE &&
        totalCount / USER_PER_PAGE >= currentPage && (
          <Button
            onClickBtn={() => setCurrentPage(currentPage + 1)}
            buttonName={"Next page"}
          />
        )}
    </>
  );
}
