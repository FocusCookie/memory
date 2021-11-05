import axios from "axios";
import {
  randomNumberInLimit,
  getApiItemsFromMultiplePages,
} from "../helper/utils.helper.mjs";
import { createCardObject } from "../services/game.service.mjs";

const BASE_URL = "https://api.disneyapi.dev";
const api = axios.create({
  baseURL: "https://api.disneyapi.dev",
});

const MAX_PAGE = 148;
const MAX_ITEMS_PER_PAGE = 50;

//TODO: Limit the characters from the disney api because some of the chars doesn't have an imageUrl
async function getCards(amount = 20) {
  try {
    if (amount <= MAX_ITEMS_PER_PAGE) {
      const res = await api.get(
        `/characters?page=${randomNumberInLimit(MAX_PAGE)}`
      );

      return res.data.data
        .map((char, index) => createCardObject(char, index, "disney"))
        .slice(0, amount);
    } else {
      const cardPages = await getApiItemsFromMultiplePages({
        url: BASE_URL,
        method: "get",
      });

      let cards = [];
      cardPages.forEach((page) => {
        cards = [
          ...cards,
          ...page.data.data.map((char, index) =>
            createCardObject(char, index, "disney")
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
