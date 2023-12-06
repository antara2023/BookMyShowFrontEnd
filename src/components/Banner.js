import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  const [allMovies, setMovies] = useState([]);
  const fetchAllMovies = () => {
    fetch(`http://localhost:5050/api/movie/list?page=2`)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  };
  useEffect(() => {
    fetchAllMovies();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {allMovies?.results?.map((movie) => {
          return (
            <SwiperSlide>
              <div style={{ fontWeight: "bold", textAlign: "center", fontSize: "10px", backgroundImage: `url(${movie.thumbnail})`, height: `300px`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
