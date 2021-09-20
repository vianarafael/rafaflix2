import React from "react";
import PageDefault from "../src/components/commons/pageDefault";
import { auth } from "../firebase";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  updateDoc,
  deleteField,
  deleteDoc,
} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../src/components/commons/Button/button.component";

const db = getFirestore();
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

  return (
    <PageDefault>
      <h3>{`${user.displayName}'s Movies`}</h3>
      <ul>
        {films.map((film) => {
          return (
            <li key={film.id}>
              <h4>{film.title}</h4>
              <img
                src={`https://image.tmdb.org/t/p/w500/${film.backdrop_path}`}
              />

              <Button
                onClick={async () => {
                  await deleteDoc(doc(db, "movies", "5rmIZId0CxAUqd2K81oQ"));
                }}
              >
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              </Button>
            </li>
          );
        })}
      </ul>
    </PageDefault>
  );
}

export async function getStaticProps({ params }) {
  const ids = [];

  const querySnapshot = await getDocs(collection(db, "movies"));
  querySnapshot.forEach(async (doc) => {
    // doc.data() is never undefined for query doc snapshots
    ids.push(doc.data().id);
  });

  const films = await Promise.all(
    ids.map((id) => {
      return fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.filmAppKey}&append_to_response=videos,credits`
      ).then((res) => res.json());
    })
  );

  console.log(films);
  // just a single movie -this needs to be several movies

  return {
    props: { films },
  };
}
