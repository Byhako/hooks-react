import React from 'react';

const Search = ({ darkMode, search, searchInput, handleSearch }) => {

  const styleInput = {
    borderBottomColor: darkMode ? '#f5deb3' : '#222',
    color: darkMode ? '#f5f5f5' : '#222',
    backgroundColor: darkMode ? '#222' : '#f5f5f5'
  };

  return (
    <div className='search'>
      <input
        type='text'
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        style={styleInput}
        placeholder='Buscar' />
    </div>
  )
}

export default Search;
