import axios from "axios";

const api = axios.create({
  baseURL: "https://api.disneyapi.dev",
});

const MAX_PAGE = 149;
const MAX_ITEMS_PER_PAGE = 50;

function randomPage(maxPage) {
  return Math.floor(Math.random() * maxPage + 1);
}

function createCardObject(character) {
  if (!character) throw new Error("Character is undefined");

  const end = character.imageUrl.indexOf("/revision");

  return {
    id: character._id,
    name: character.name,
    image: end > -1 ? character.imageUrl.slice(0, end) : character.imageUrl,
  };
}

async function getCards(amount) {
  try {
    if (!amount || amount <= MAX_ITEMS_PER_PAGE) {
      const res = await api.get(`/characters?page=${randomPage(MAX_PAGE)}`);

      return res.data.data
        .map((char) => createCardObject(char))
        .slice(0, amount);
    } else {
      const pageQueries = [];

      // call multiple pages if the card amount is bigger than MAX_ITEMS_PER_PAGE
      for (let i = 0; i < Math.ceil(amount / MAX_ITEMS_PER_PAGE); i++) {
        pageQueries.push(api.get(`/characters?page=${randomPage(MAX_PAGE)}`));
      }

      const cardPages = await Promise.all(pageQueries);

      let cards = [];

      cardPages.forEach((page) => {
        cards = [
          ...cards,
          ...page.data.data.map((char) => createCardObject(char)),
        ];
      });

      return cards.slice(0, amount);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export { getCards };
