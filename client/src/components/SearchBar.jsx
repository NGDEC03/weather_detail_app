import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" style={{padding:'10px', fontSize:'20px', margin:'10px'}} />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default SearchBar;
