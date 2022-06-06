import React from 'react'

import './MovieList.scss'
const MovieList = (props) => {
  return (
    <>
        {props.movies.map((movie, index)=>
            <div className="container d-inline-flex align-items-start">
                <img className='fluid' src={movie.Poster} alt="movie" />
            </div>
        )}
     </>
  )
}

export default MovieList