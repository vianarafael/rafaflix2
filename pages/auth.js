import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase";

// Configure FirebaseUI
// const uiConfig = {
//   // Redirect to / after sign in is successfull.
//   signInSuccessUrl: "/",
//   // Display Google as authe provider
//   sigInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
// };

export default function SignInScreen() {
  return (
    <div
      style={{
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Rafaflix Login</h1>
      <p>Please sing-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
