import { auth, provider } from "./firebase";

// Sign In
export const doSignInWithPopup = () => {
  auth.signInWithPopup(provider);
};

// Sign out
export const doSignOut = () => auth.signOut();
