import axios from "axios";

const api = axios.create({
  baseURL: "https://www.amiiboapi.com/api",
});

const MAX_CHARS = 778;

function randomChar(maxChar) {
  return Math.floor(Math.random() * maxChar + 1);
}

function createCardObject(character, index) {
  if (!character) throw new Error("Character is undefined");
  return {
    id: index + 1,
    name: character.name,
    image: character.image,
  };
}

async function getCards(amount) {
  try {
    const max = amount || 20;
    const res = await api.get("/amiibo/");

    const amiibos = res.data.amiibo.map((char, index) =>
      createCardObject(char, index)
    );

    const cards = [];
    for (let i = 0; i < max; i++) {
      cards.push(amiibos[randomChar(778)]);
    }

    return cards;
  } catch (error) {
    throw new Error(error.message);
  }
}

export { getCards };
