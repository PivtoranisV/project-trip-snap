'use client';
import { useState } from 'react';

const Search = ({ searchText, setSearchText }) => {
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <form className="w-full max-w-xl">
      <input
        type="text"
        placeholder="Search for a Country"
        value={searchText}
        required
        onChange={handleSearchChange}
        className="block w-full rounded-md border border-gray-300 bg-white/80 py-2.5 font-satoshi pl-5 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none"
      />
    </form>
  );
};

export default Search;
