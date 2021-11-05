import { ref, update } from "firebase/database";
import { database } from "./firebase.service.mjs";

export const joinGameOnline = ({ userID, gameID }) => {
  const updates = {
    [`games/${gameID}/players/${userID}`]: true,
  };
  return update(ref(database), updates);
};

joinGameOnline({
  userID: 22,
  gameID: 1,
});
