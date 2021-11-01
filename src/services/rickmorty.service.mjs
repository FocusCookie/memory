import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/graphql",
});

const MAX_PAGE = Math.ceil(671 / 20);
const MAX_ITEMS_PER_PAGE = 20;

function randomPage(maxPage) {
  return Math.floor(Math.random() * maxPage + 1);
}

function buildQuery() {
  const query = `
  query {
    characters(page: ${randomPage(MAX_PAGE)}) {
      info {
        count
      }
      results {
        name,
        image
      }
    }
  }`;
  return query;
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
    if (!amount || amount <= MAX_ITEMS_PER_PAGE) {
      const query = buildQuery();
      const res = await api.post("/", { query });
      return res.data.data.characters.results
        .map((char, index) => createCardObject(char, index))
        .slice(0, amount);
    } else {
      const pageQueries = [];

      // call multiple pages if the card amount is bigger than MAX_ITEMS_PER_PAGE
      for (let i = 0; i < Math.ceil(amount / MAX_ITEMS_PER_PAGE); i++) {
        const query = buildQuery();
        pageQueries.push(api.post("/", { query }));
      }

      const cardPages = await Promise.all(pageQueries);

      let cards = [];

      cardPages.forEach((page) => {
        cards = [
          ...cards,
          ...page.data.data.characters.results.map((char, index) =>
            createCardObject(char, index)
          ),
        ];
      });

      return cards.slice(0, amount);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export { getCards };
