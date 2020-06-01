import React from 'react';
import './styles.css';

const Search = ({ fetchWeather }) => {
  return (
    <div className="container">
      <form onSubmit={ fetchWeather }>
        <input type="text" name="city" placeholder="Cidade"/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;