import React, { useEffect, useRef } from "react";
import { RootState, useAppSelector } from "../../redux/store";
import { changeCardEvent } from "../../utils/utils";
import { ButtonsContainer, Image, Title } from "./styles";

const CardCarousel = () => {
  const cardRef = useRef<HTMLImageElement | null>(null),
    cards = useAppSelector((state: RootState) => state.cardStore.cards);
  const [card, setCard] = React.useState<any>(null),
    [cardImgSrc, setCardImgSrc] = React.useState<string>("");

  useEffect(() => {
    if (cards.length > 0) {
      setCard(cards[0]);
      imgSrc(cards[0]);
    }
  }, [cards]);

  function imgSrc(card: any) {
    if (card.layout === "transform" || card.layout === "modal_dfc") {
      setCardImgSrc(card.card_faces[0].image_uris.border_crop);
    } else {
      setCardImgSrc(card.image_uris.border_crop);
    }
  }

  function nextImage() {
    if (cardRef.current?.style.transform) cardRef.current.style.transform = "";
    const index = cards.indexOf(card);
    if (index === cards.length - 1) {
      setCard(cards[0]);
      imgSrc(cards[0]);
    } else {
      setCard(cards[index + 1]);
      imgSrc(cards[index + 1]);
    }
  }

  function prevImage() {
    if (cardRef.current?.style.transform) cardRef.current.style.transform = "";
    const index = cards.indexOf(card);
    if (index === 0) {
      setCard(cards[cards.length - 1]);
      imgSrc(cards[cards.length - 1]);
    } else {
      setCard(cards[index - 1]);
      imgSrc(cards[index - 1]);
    }
  }

  return (
    <section>
      <Title>Similar Card</Title>

      <Image
        ref={cardRef}
        src={cardImgSrc}
        alt={card?.name}
        onClick={() =>
          changeCardEvent(card, setCardImgSrc, cardImgSrc, cardRef)
        }
      ></Image>
      <ButtonsContainer>
        <button onClick={prevImage}>{"<"}</button>
        <p>
          {cards.indexOf(card) + 1} / {cards.length}
        </p>
        <button onClick={nextImage}>{">"}</button>
      </ButtonsContainer>
    </section>
  );
};

export default CardCarousel;
