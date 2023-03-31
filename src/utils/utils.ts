import { getIn } from "formik";

export function queryBuilder(values: any) {
  let searchQuery = "";
  if (values.type !== "Any") searchQuery += `type=${values.type}`;
  if (values.cost) searchQuery += `+cmc=${values.cost.replace(" ", "")}`;

  // if (values.desc) searchQuery += `+oracle=${values.desc.split(" ", "-")}`;

  if (values.desc) {
    const descWords = values.desc.split(" ");
    descWords.forEach((word: string) => {
      searchQuery += `+oracle=${word}`;
    });
  }

  if (values.power && ["Creature", "Any"].includes(values.type))
    searchQuery += `+pow=${values.power}`;
  if (values.toughness && ["Creature", "Any"].includes(values.type))
    searchQuery += `+tou=${values.toughness}`;
  return searchQuery;
}

export function errorStyle(errors: any, fieldName: any) {
  if (getIn(errors, fieldName)) {
    return {
      border: "1px solid red",
    };
  }
}

export async function changeCardEvent(
  card: any,
  setCardImgSrc: any,
  cardImgSrc: string,
  cardRef: any
) {
  if (card?.layout === "transform" || card?.layout === "modal_dfc") {
    if (cardImgSrc === card.card_faces[0].image_uris.border_crop) {
      setCardImgSrc(card.card_faces[1].image_uris.border_crop);
    } else {
      setCardImgSrc(card.card_faces[0].image_uris.border_crop);
    }
  } else if (card?.layout === "flip" || card?.layout === "split") {
    turnCard(cardRef.current, card.layout);
  }
}

function turnCard(img: any, layout: string) {
  if (layout === "flip") {
    if (img.style.transform) img.style.transform = "";
    else img.style.transform = "rotate(180deg)";
  } else if (layout === "split") {
    if (img.style.transform) img.style.transform = "";
    else img.style.transform = "rotate(90deg)";
  }
}
