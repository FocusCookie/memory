import axios from "axios";

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

export { randomNumberInLimit, getApiItemsFromMultiplePages };
