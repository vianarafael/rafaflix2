import PageDefault from "../src/components/commons/pageDefault";
import Text from "../src/foundation/Text";

export default function Home({ movieData }) {
  console.log("movie ddata ", movieData.results);
  return (
    <PageDefault>
      <Text
        tag="h1"
        textAlign="center"
        // just a test
        color={{ xs: "blue", md: "purple" }}
      >
        My page
      </Text>
    </PageDefault>
  );
}

export async function getStaticProps() {
  // const movieData = await axios.get(
  //   `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.filmAppKey}&language=en-US&page=1`
  // );
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.filmAppKey}&language=en-US&page=1`
  );
  const movieData = await res.json();

  return {
    props: { movieData }, // will be passed to the page component as props
  };
}
