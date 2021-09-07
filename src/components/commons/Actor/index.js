import React from "react";

import { VideoCardContainer } from "../Carousel/components/VideoCard/styles";

import "./styles.css";

function Actor({ actor }) {
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.filmAppKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => setActor(res));
  });
  const image = `https://image.tmdb.org/t/p/w200/${actor.profile_path}`;
  return (
    <>
      <div className="actor-container">
        <h1>{actor.name}</h1>
        <VideoCardContainer className="actor-img" url={image} />
        <p>{actor.biography}</p>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const actor = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.filmAppKey}&language=en-US`
  )
    .then((res) => res.json())
    .then((res) => res);
  return {
    props: { actor }, // will be passed to the page component as props
  };
}
