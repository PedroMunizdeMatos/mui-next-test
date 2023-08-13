"use client"
import React from "react";
import SearchBar from "../Components/SearchBar";

const Search = () => {
  const handleSearch = (query: string) => {
    console.log("Buscando por:", query);
  };

  return (
    <div >
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};
export default Search