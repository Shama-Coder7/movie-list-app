import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import notfound from '../Images/notfound.gif';

let API_key = '&api_key=1a0c67e8cb815a3ea943f819a8ebcdba';
let base_url = 'https://api.themoviedb.org/3';
let url = base_url + '/discover/movie?sort_by=popularity.desc' + API_key;
let arr = [];

const MoviePage = () => {
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [search, setSearch] = useState();

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [url_set]);

  const getData = () => {
    setUrl(url);
  };

  const searchMovie = (evt) => {
    if (evt.key == 'Enter') {
      url =
        base_url +
        '/search/movie?api_key=1a0c67e8cb815a3ea943f819a8ebcdba&query=' +
        search;
      setUrl(url);
      setSearch(' ');
    }
  };
  return (
    <>
      <div className="header">
        <nav>
          <ul>
            {arr.map((value, pos) => {
              return (
                <li>
                  <a
                    href="#"
                    key={pos}
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <form>
          <div className="search-btn">
            <input
              type="text"
              placeholder="Enter Movie Name"
              className="inputText"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              onKeyPress={searchMovie}
            ></input>
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        {movieData.length == 0 ? (
          <img src={notfound} />
        ) : (
          movieData.map((res, pos) => {
            return <MovieCard info={res} key={pos} />;
          })
        )}
      </div>
    </>
  );
};
export default MoviePage;



