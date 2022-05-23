import React from 'react'

import './MovieList.scss'
const MovieList = (props) => {
  return (
    <>
        {props.movies.map((movie, index)=>
            <div className="d-flex justify-content-start w-25 m-2">
                <img src={movie.Poster} alt="movie" />
            </div>
        )}
     </>
  )
}

export default MovieList