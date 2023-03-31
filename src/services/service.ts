import { queryBuilder } from "../utils/utils";
const BASE_URL = "https://api.scryfall.com/cards";

const routes: {
  [key: string]: any;
} = {};

routes.random = async () => {
  try {
    const data = await fetch(BASE_URL + "/random", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

routes.randomImage = async (type: string) => {
  try {
    const string = type === "Any" ? "" : type;

    const data = await fetch(BASE_URL + "/random?q=layout:normal+t:" + string, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await data.json();
    return response.image_uris.art_crop;
  } catch (error) {
    console.log(error);
  }
};

routes.search = async (values: {}) => {
  try {
    const query = queryBuilder(values);
    const data = await fetch(BASE_URL + "/search?order=cmc&q=" + query, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await data.json();

    if (response.data) {
      return response.data;
    } else if (response.object === "card") {
      return [response];
    } else {
      console.log("No data found");
      console.log(response);
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};

export default routes;
