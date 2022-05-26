import React, { useEffect, useState } from "react";
import { CardHeaders } from "../../components";
import MovieList from "../../components/MovieList/MovieList";
import SearchBox from "../../components/SearchBox/SearchBox";

import "./Movies.scss";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  
  const getMovieRequest = async() => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f0248cf5`

    const response = await fetch(url)
    const responseJson = await response.json()
    
    if(responseJson.Search){
      setMovies(responseJson.Search)
    }
  }

  useEffect(()=>{
    getMovieRequest(searchValue)
  }, [searchValue])

  return (
    <div className="app__movies">
      <div className="wrapper container-fluid h-100 pt-4 pb-4">
        <CardHeaders title="Movies" />
        <div className="d-flex row w-25 ms-auto mt-2 mb-2">
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className="container-fluid movie-app">
          <div className="row">          
          <MovieList movies={movies} />
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Movies;
