import React, { useState } from "react";

import contentIndex from "./data/contentIndex";
import Matches from "./Matches";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showMatches, setShowMatches] = useState(false);
  const [matches, setMatches] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredResults = contentIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.content.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (route, title, content) => {
    setShowMatches(true);
    setMatches([title, content]);
  };

  //   const handleCloseMatches = () => {
  //     setShowMatches(false);
  //     setMatches([]);
  //   };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        className="search-input"
      />
      {results.length > 0 && !showMatches && (
        <ul className="search-results">
          {results.map((result, index) => (
            <li
              key={index}
              onClick={() =>
                handleResultClick(result.route, result.title, result.content)
              }
            >
              <strong>
                {/* Highlight title matching query */}
                <span
                  dangerouslySetInnerHTML={{
                    __html: result.title.replace(
                      new RegExp(query, "gi"),
                      (match) =>
                        `<span style="background-color: yellow;">${match}</span>`
                    ),
                  }}
                />
              </strong>
              : {/* Highlight content matching query */}
              <span
                dangerouslySetInnerHTML={{
                  __html: result.content.replace(
                    new RegExp(query, "gi"),
                    (match) =>
                      `<span style="background-color: yellow;">${match}</span>`
                  ),
                }}
              />
            </li>
          ))}
        </ul>
      )}
      {showMatches && <Matches keyword={query} matches={matches} />}
    </div>
  );
};

export default SearchBar;
