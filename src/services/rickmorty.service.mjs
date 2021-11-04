import axios from "axios";
import {
  randomNumberInLimit,
  getApiItemsFromMultiplePages,
} from "../helper/utils.helper.mjs";
import { createCardObject } from "../services/game.service.mjs";

const BASE_URL = "https://rickandmortyapi.com/graphql";

const api = axios.create({
  baseURL: BASE_URL,
});

const MAX_PAGE = Math.ceil(671 / 20);
const MAX_ITEMS_PER_PAGE = 20;

function buildQuery() {
  const query = `
  query {
    characters(page: ${randomNumberInLimit(MAX_PAGE)}) {
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

async function getCards(amount = 20) {
  try {
    if (amount <= MAX_ITEMS_PER_PAGE) {
      const query = buildQuery();
      const res = await api.post("/", { query });

      return res.data.data.characters.results
        .map((char, index) => createCardObject(char, index))
        .slice(0, amount);
    } else {
      const cardPages = await getApiItemsFromMultiplePages({
        url: BASE_URL,
        method: "post",
        body: buildQuery(),
      });

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
