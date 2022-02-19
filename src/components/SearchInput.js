import React from 'react';

const SearchInput = ({ searchInput, setSearchInput }) => {
  return (
    <div>
      <input
        className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none'
        type='text'
        placeholder='Search by name, email or role'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
