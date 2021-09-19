import React from "react";
import PageDefault from "../src/components/commons/pageDefault";
import { auth } from "../firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";

// 1. Display
// show in here the movies that were added by the user (saved on firebase)

// 2. Delete
// Allow the user to delete movies

// 3. Chat Room
// The user can enter a chat room and connect with other users

export default function Dashboard({ films }) {
  const [user, setUser] = React.useState("");

  auth.onAuthStateChanged((user) => {
    setUser(user);
  });
  console.log(films);

  return (
    <PageDefault>
      <h3>{`${user.displayName}'s Movies`}</h3>
      <ul>
        {films.map((film) => {
          return (
            <>
              <h4>{film.title}</h4>
              <img
                src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
              />
            </>
          );
        })}
      </ul>
    </PageDefault>
  );
}

export async function getStaticProps({ params }) {
  let id;
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "movies"));
  console.log(querySnapshot);
  querySnapshot.forEach(async (doc) => {
    // doc.data() is never undefined for query doc snapshots
    id = doc.data().id;
  });
  const films = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.filmAppKey}&append_to_response=videos,credits`
  ).then((res) => res.json());

  console.log(films);
  // just a single movie -this needs to be several movies

  return {
    props: { films: [films] },
  };
}
