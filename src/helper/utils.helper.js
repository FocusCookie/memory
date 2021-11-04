import axios from "axios";

function isValidEmail(email) {
  const validMailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi;

  const valid = email.match(validMailRegex);

  return valid ? true : false;
}

function randomNumberInLimit(limit) {
  return Math.floor(Math.random() * limit + 1);
}

async function getApiItemsFromMultiplePages(api, itemcount, maxItemsPerPage) {
  if (!api) throw new Error("Api is undefined");
  if (!api.url || api.url === "") throw new Error("Api Url is undefined");
  if (!api.method && (api.method !== "get" || api.method !== "post"))
    throw new Error("Api Method is invalid or undefined");
  if (!api.body && api.method === "post")
    throw new Error("Api Post Body is undefined");

  const apiQueries = [];

  for (let i = 0; i < Math.ceil(itemcount / maxItemsPerPage); i++) {
    if (api.method === "get") {
      apiQueries.push(axios.get(api.url));
    }
    if (api.method === "post") {
      apiQueries.push(axios.post(api.url, api.body));
    }
  }

  const responses = await Promise.all(apiQueries);

  return responses;
}

export { randomNumberInLimit, getApiItemsFromMultiplePages, isValidEmail };
