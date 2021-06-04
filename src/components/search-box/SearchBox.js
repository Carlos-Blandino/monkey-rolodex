import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ placeHolder, onChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeHolder}
      name="monkey-search"
      id="monkey-search"
      onChange={(e) => onChange(e)}
    />
  );
};
