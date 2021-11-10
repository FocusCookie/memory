import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setPlayerOnline, removePlayerOnline } from "./player.service.mjs";

export const register = async (auth, user) => {
  const registerResponse = await createUserWithEmailAndPassword(
    auth,
    user.email,
    user.password
  );

  await setPlayerOnline(registerResponse.user);
};

export const login = async (auth, user) => {
  const loginResponse = await signInWithEmailAndPassword(
    auth,
    user.email,
    user.password
  );

  await setPlayerOnline(loginResponse.user);
};

export const logout = async (auth, user) => {
  auth.signOut();
  await removePlayerOnline(user);
};
