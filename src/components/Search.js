import React, {useState} from "react";

function Search({handleSearchInput}) {

  const [searchInput, setSearchInput] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
    handleSearchInput(searchInput)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchInput}
        onChange={(e) => {
          console.log(e.target.value)
          setSearchInput(e.target.value)
        } }
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
