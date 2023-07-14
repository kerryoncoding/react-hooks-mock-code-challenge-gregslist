import React from "react";
import Search from "./Search";

function Header({refineSearch}) {

  function handleSearchInput(input){
    refineSearch(input)
  }



  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearchInput={handleSearchInput} />
    </header>
  );
}

export default Header;
