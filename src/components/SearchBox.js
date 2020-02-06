import React from 'react';

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pa2">
      <input
        onChange={e => onSearchChange(e.target.value)}
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        placeholder="Search Robots"
      />
    </div>
  );
};

export default SearchBox;
