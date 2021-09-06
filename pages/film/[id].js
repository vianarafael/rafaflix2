import React, { useState } from "react";
import Slider from "react-slick";
import BannerMain from "../../src/components/commons/BannerMain";
import { SliderItem } from "../../src/components/commons/Carousel/components/Slider";
import PageDefault from "../../src/components/commons/pageDefault";

export default function Film(details) {
  return (
    <PageDefault>
      <BannerMain
        videoTitle={details.title}
        url={details.videos.results[0]["key"]}
        videoDescription={details.overview}
      />
      <div
        style={{
          textAlign: "center",
          fontSize: "3rem",
          cursor: "pointer",
        }}
      >
        {/* <Button>Add Movie to Watch List</Button> */}
        {/* <h6 className="msg">{message || <span>&nbsp;&nbsp;</span>}</h6> */}
      </div>
      <h1 style={{ textAlign: "center" }}>Cast</h1>
      <Slider>
        {details.credits.cast.map((actor) => {
          return (
            <SliderItem key={actor.cast_id}>
              {/* <CastCard
                        id={actor.id}
                        name={actor.name}
                        character={actor.character}
                        img={actor.profile_path}
                      /> */}
            </SliderItem>
          );
        })}
      </Slider>
    </PageDefault>
  );
}

export async function getStaticProps({ params }) {
  const details = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.filmAppKey}&append_to_response=videos,credits`
  ).then((res) => res.json());

  return {
    props: details,
  };
}

export async function getStaticPaths(context) {
  let upcoming = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.filmAppKey}&language=${context.locale}&page=1`
  )
    .then((res) => res.json())
    .then((data) =>
      data.results.map((film) => {
        return {
          params: {
            id: String(film.id),
          },
        };
      })
    );

  const topRated = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.filmAppKey}&language=${context.locale}&page=1`
  )
    .then((res) => res.json())
    .then((data) =>
      data.results.map((film) => {
        return {
          params: {
            id: String(film.id),
          },
        };
      })
    );

  const popular = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.filmAppKey}&language=${context.locale}&page=1`
  )
    .then((res) => res.json())
    .then((data) =>
      data.results.map((film) => {
        return {
          params: {
            id: String(film.id),
          },
        };
      })
    );

  const nowPlaying = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.filmAppKey}&language=${context.locale}&page=1`
  )
    .then((res) => res.json())
    .then((data) =>
      data.results.map((film) => {
        return {
          params: {
            id: String(film.id),
          },
        };
      })
    );

  const paths = [...upcoming, ...topRated, ...popular, ...nowPlaying];
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
