import React, { useState, useEffect } from 'react'

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  console.log(characters)

  return (
    <div className="characters">
      {characters.map(item => (
        <div className='card'>
          <img src={item.image} alt={item.name} />
          <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  );
}

export default Characters;
