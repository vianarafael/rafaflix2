import PageDefault from "../src/components/commons/pageDefault";
import Carousel from "../src/components/commons/Carousel";

export default function Home({ movieData }) {
  return (
    <PageDefault>
      {/* <div style={{ background: "red" }}> */}
      <Carousel
        color={"#00c86f"}
        title="Popular"
        films={movieData.popular}
        // genre_ids={popular.genre_ids}
      />
      <Carousel
        color={"#9cd33b"}
        title="Top Rated"
        films={movieData.topRated}
        // genre_ids={topRated.genre_ids}
      />

      <Carousel
        color={"orange"}
        title="Now Playing"
        films={movieData.nowPlaying}
        // genre_ids={nowPlaying.genre_ids}
      />

      <Carousel
        color={"red"}
        title="Upcoming"
        films={movieData.upcoming}
        // genre_ids={upcoming.genre_ids}
      />
      {/* </div> */}
    </PageDefault>
  );
}

export async function getStaticProps(context) {
  const upcoming = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.filmAppKey}&language=${context.locale}&page=1`
  )
    .then((res) => res.json())
    .then((data) => data.results);

  const topRated = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.filmAppKey}&language=${context.locale}&page=1`
  )
    .then((res) => res.json())
    .then((data) => data.results);

  const popular = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.filmAppKey}&language=${context.locale}&page=1`
  )
    .then((res) => res.json())
    .then((data) => data.results);

  const nowPlaying = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.filmAppKey}&language=${context.locale}&page=1`
  )
    .then((res) => res.json())
    .then((data) => data.results);

  return {
    props: { movieData: { upcoming, topRated, popular, nowPlaying } }, // will be passed to the page component as props
  };
}
