import React, { useState, useEffect, useReducer, useMemo } from 'react'

const initialState = {
  favorites: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case 'REMOVE_OF_FAVORITE':
      const favorites = [...state.favorites];
      const index = favorites.indexOf(action.payload);
      favorites.splice(index, 1);
      return {
        ...state,
        favorites
      };
    default:
      return state;
  }
}

const Characters = ({ darkMode }) => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState('');

  const styleInput = {
    borderBottomColor: darkMode ? '#f5deb3' : '#222',
    color: darkMode ? '#f5f5f5' : '#222',
    backgroundColor: darkMode ? '#222' : '#f5f5f5'
  };

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  const handleClic = (favorite) => {
    if (favorites.favorites.includes(favorite)) {
      dispatch({ type: 'REMOVE_OF_FAVORITE', payload: favorite })
    } else {
      dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value); 
  };

  const filteredUsers = useMemo(() => (
    characters.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
  ), [characters, search]);

  return (
    <div className="characters">
      <div className='search'>
        <input
          type='text'
          value={search}
          onChange={handleSearch}
          style={styleInput}
          placeholder='Buscar' />
      </div>

      {filteredUsers.map((item, idx) => (
        <div className='card' key={idx}>
          <img src={item.image} alt={item.name} />
          <h4>{item.name}</h4>
          <button 
            type='button'
            onClick={() => handleClic(item.name)}
            style={{ backgroundColor: favorites.favorites.includes(item.name) ? '#6ed862' : '#f5deb3'}}
          >
            Favorito
          </button>
        </div>
      ))}
    </div>
  );
}

export default Characters;
