import React from "react";
import Slider from "react-slick";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import BannerMain from "../../src/components/commons/BannerMain";
import { Button } from "../../src/components/commons/Button/button.component";
import CastCard from "../../src/components/commons/Carousel/components/CastCard";
import { SliderItem } from "../../src/components/commons/Carousel/components/Slider";
import { VideoCardGroupContainer } from "../../src/components/commons/Carousel/styles";
import PageDefault from "../../src/components/commons/pageDefault";

const settings = {
  infinite: true,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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
        {/* only show this if the user is logged in  */}
        <Button
          onClick={async () => {
            const db = getFirestore();
            const docRef = await addDoc(collection(db, "movies"), {
              id: details.id,
            });
          }}
        >
          Add Movie to Watchlist
        </Button>
        {/* if not show a message asking the user to login  */}
      </div>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Cast</h1>
      <VideoCardGroupContainer>
        <Slider {...settings}>
          {details.credits.cast.map((actor) => {
            return (
              <SliderItem key={actor.cast_id}>
                <CastCard
                  id={actor.id}
                  name={actor.name}
                  character={actor.character}
                  img={actor.profile_path}
                />
              </SliderItem>
            );
          })}
        </Slider>
      </VideoCardGroupContainer>
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
  return {
    paths,
    fallback: false,
  };
}
