import React from 'react';
// import './Coin.css';
// import { Link } from 'react-router-dom';
import list from '../ListData';

const Movielist = (item) => {
  // const { backdrop_path, original_language, original_title, overview } = item;
  return (
    <div className="coin-container">
      <div className="coin-row">
        <h2>{original_title}</h2>
        <div className="coin">
          <img src={backdrop_path} alt="moviepath" />
          <p className="coin-symbol">{original_language}</p>

          <p className="coin-price">{overview}</p>

          {/* <p className="coin-marketcap">${marketcap.toLocaleString()}</p> */}
        </div>
      </div>{' '}
      {/* <div>
        {' '}
        <Link to="/view">
          {' '}
          <button id="view-btn">View</button>
        </Link>
        <Link to="/save">
          <button id="save-btn">Save</button>
        </Link>
      </div> */}
    </div>
  );
};

export default Movielist;