import axios from "axios";
import { randomNumberInLimit } from "../helper/utils.helper.mjs";
import { createCardObject } from "../services/game.service.mjs";

const api = axios.create({
  baseURL: "https://www.amiiboapi.com/api",
});

const MAX_CHARS = 778;

async function getCards(amount = 20) {
  try {
    const res = await api.get("/amiibo/");

    const amiibos = res.data.amiibo.map((char, index) =>
      createCardObject(char, index)
    );

    const cards = [];
    for (let i = 0; i < amount; i++) {
      cards.push(amiibos[randomNumberInLimit(MAX_CHARS)]);
    }

    return cards;
  } catch (error) {
    throw new Error(error.message);
  }
}

export { getCards };
