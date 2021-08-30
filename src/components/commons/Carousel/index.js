import React, { useState, useEffect } from "react";
import { VideoCardGroupContainer, Title } from "./styles.js";
import VideoCard from "./components/VideoCard";

import Slider, { SliderItem } from "../Carousel/components/Slider";
function Carousel({ color, title, films }) {
  const categoryTitle = title;
  const categoryColor = color;
  //   const [genres, setGenres] = useState([]);

  //   useEffect(() => {
  //     fetch(
  //       `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_KEY}&language=en-US`
  //     )
  //       .then((res) => res.json())
  //       .then((res) => setGenres(res.genres));
  //   }, [setGenres]);

  //   const genreConverter = {};
  //   if (genres) {
  //     genres.forEach((genre) => {
  //       genreConverter[genre.id] = genre.name;
  //     });
  //   }

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        // <>
        <Title style={{ backgroundColor: categoryColor || "red" }}>
          {categoryTitle}
        </Title>
      )}
      <Slider>
        {films
          ? films.map((film) => (
              <SliderItem key={film.original_title}>
                <VideoCard
                  id={film.id}
                  videoTitle={film.original_title}
                  //   genres={film.genre_ids.map(
                  //     (genre_id) => genreConverter[genre_id]
                  //   )}
                  poster={film.poster_path}
                  categoryColor={categoryColor}
                />
              </SliderItem>
            ))
          : ""}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
