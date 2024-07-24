import React from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
const Search = ({ search, onSearchChange }) => {
  return (
    <div className="search-flex">
      <SearchIcon sx={{ color: "var(--grey)", fontSize: "1.2rem" }} />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange(e)}
      />
    </div>
  );
};

export default Search;
