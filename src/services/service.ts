const BASE_URL = "https://api.scryfall.com/cards";

const routes: {
  [key: string]: any;
} = {};

routes.random = async () => {
  const data = await fetch(BASE_URL + "/random", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await data.json();
  return response;
};

routes.randomImage = async (type: string) => {
  const data = await fetch(BASE_URL + "/random?q=layout:normal+t:" + type, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await data.json();

  return response.image_uris.art_crop;
};

routes.search = async (query: string) => {
  const data = await fetch(BASE_URL + "/search?order=cmc&q=" + query, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await data.json();
  console.log(response);
  if (response.data) {
    return response.data;
  } else {
    console.log("No data found");
    console.log(response);
    return [];
  }
};

export default routes;
