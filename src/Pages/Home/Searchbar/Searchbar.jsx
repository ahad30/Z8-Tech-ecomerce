import React from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const SearchBar = () => {
  return (
    <div className="relative flex">
      <div className="w-full">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>
        <form className="" action="">
          <input
            type="text"
            id="Search"
            name="search"
            placeholder="Search for Scan code..."
            className="w-full rounded-lg py-4 border-gray-200 pe-10 shadow-sm sm:text-sm"
          />
        </form>

        <div className="absolute right-2 top-0 bottom-0 flex justify-center items-center gap-x-3">
          <RxCross2
            className={`cursor-pointer duration-700 `}
            onClick={() => {}}
            size={25}
          ></RxCross2>
          <CiSearch
            className="hover cursor-pointer hover:text-red-500"
            size={40}
          ></CiSearch>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SearchBar;
