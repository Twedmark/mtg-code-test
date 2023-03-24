import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import { useAppSelector } from "../../app/hooks";
import "./../../App.css";

function App() {
  const cardRef = useRef(null);
  const navigate = useNavigate();
  const [card, setCard] = React.useState<any>(null),
    [cardImgSrc, setCardImgSrc] = React.useState<string>("");
  const cards = useAppSelector((state: RootState) => state.cardStore.cards);

  useEffect(() => {
    console.log();
    if (cards.length > 1) randomCard();
    else if (cards.length === 1) {
      setCard(cards[0]);
      imgSrc(cards[0]);
    }
  }, [cards]);

  function home() {
    console.log("home");
    navigate("/");
  }

  function randomCard() {
    const random = Math.floor(Math.random() * cards.length);
    setCard(cards[random]);
    imgSrc(cards[random]);
  }

  function imgSrc(card: any) {
    if (card.layout === "transform" || card.layout === "modal_dfc") {
      setCardImgSrc(card.card_faces[0].image_uris.border_crop);
    } else {
      setCardImgSrc(card.image_uris.border_crop);
    }
  }

  function changeCardEvent() {
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

  return (
    <div className="App">
      <button onClick={home}>Home</button>
      Result
      <button onClick={randomCard}>random</button>
      <>
        <h1>{card?.name}</h1>
        <img
          ref={cardRef}
          src={cardImgSrc}
          alt={card?.name}
          onClick={changeCardEvent}
        ></img>
      </>
    </div>
  );
}

export default App;
