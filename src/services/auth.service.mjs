import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setPlayerOnline, removePlayerOnline } from "./player.service.mjs";
import { getAuth } from "firebase/auth";

export const register = async (user) => {
  const auth = getAuth();
  const registerResponse = await createUserWithEmailAndPassword(
    auth,
    user.email,
    user.password
  );

  updateProfile(registerResponse.user, {
    displayName: user.email.slice(0, user.email.indexOf("@")),
  })
    .then(() => {
      console.log("displayName successfully set");
    })
    .catch((error) => {
      console.log("Error: could not set displayName");
      console.log(error);
    });

  await setPlayerOnline(registerResponse.user);
};

export const login = async (user) => {
  const auth = getAuth();
  const loginResponse = await signInWithEmailAndPassword(
    auth,
    user.email,
    user.password
  );

  await setPlayerOnline(loginResponse.user);
};

export const logout = async () => {
  const auth = getAuth();
  auth.signOut();
  await removePlayerOnline(auth.currentUser);
};
