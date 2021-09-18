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

export default function Dashboard() {
  const [user, setUser] = React.useState("");
  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  React.useEffect(async () => {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "movies"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }, []);
  return (
    <PageDefault>
      <h3>{`${user.displayName}'s Movies`}</h3>
    </PageDefault>
  );
}
