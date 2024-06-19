// src/components/Matches.jsx
import React from "react";

const Matches = ({ keyword, matches }) => {
  const highlightText = (text, keyword) => {
    const parts = text.split(new RegExp(`(${keyword})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <span
          key={index}
          className="highlight"
          style={{ backgroundColor: "yellow" }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="matches">
      <h2>Matches for "{keyword}":</h2>
      {matches.map((match, index) => (
        <p key={index}>{highlightText(match, keyword)}</p>
      ))}
    </div>
  );
};

export default Matches;
