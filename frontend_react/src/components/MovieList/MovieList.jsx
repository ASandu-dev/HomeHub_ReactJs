import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./MovieList.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MovieList = (props) => {
  return (
    
    <>    
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="container movie">
              <img className="fluid" src={movie.Poster} alt="movie" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MovieList;
