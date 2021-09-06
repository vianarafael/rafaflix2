import PageDefault from "../src/components/commons/pageDefault";
import Carousel from "../src/components/commons/Carousel";

import useTranslation from "../intl/useTranslation";

export default function Home({ movieData }) {
  const { t } = useTranslation();
  console.log("----here---", movieData);
  return (
    <PageDefault>
      {/* <div style={{ background: "red" }}> */}
      <Carousel
        color={"#00c86f"}
        // title={t("popular")}
        films={movieData.popular}
        // genre_ids={popular.genre_ids}
      />
      <Carousel
        color={"#9cd33b"}
        title={t("topRated")}
        films={movieData.topRated}
        // genre_ids={topRated.genre_ids}
      />

      <Carousel
        color={"orange"}
        title={t("nowPlaying")}
        films={movieData.nowPlaying}
        // genre_ids={nowPlaying.genre_ids}
      />

      <Carousel
        color={"red"}
        title={t("upcoming")}
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
