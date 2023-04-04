import React, { useEffect, useState } from "react";
import { RootState, useAppSelector } from "../../redux/store";
import { ColorContainer, ColorCircle } from "./styles";

interface ColorCount {
  color: string;
  count: number;
  backgroundColor: string | undefined;
}

function ColorRepresentation(): JSX.Element {
  const cards = useAppSelector((state: RootState) => state.cardStore.cards);
  const [countAndColor, setCountAndColor] = useState<ColorCount[]>([]);

  useEffect(() => {
    const colors = ["W", "U", "B", "R", "G"];

    const newCount = Object.fromEntries(colors.map((color) => [color, 0]));

    cards.forEach((card) => {
      card.color_identity?.forEach((color: string) => {
        newCount[color] += 1;
      });
    });

    setCountAndColor(
      colors.map((color) => ({
        color,
        count: newCount[color],
        backgroundColor:
          {
            W: "rgb(255, 255, 255)",
            U: "rgb(69, 151, 247)",
            B: "rgb(30, 30, 30)",
            R: "rgb(223, 86, 52)",
            G: "rgb(80, 171, 100)",
          }[color] ?? undefined,
      }))
    );
  }, [cards]);

  const ColorCircles = countAndColor.map((colorCount) => {
    return (
      <ColorCircle key={colorCount.color} prop={colorCount}>
        {Math.round((colorCount.count / cards.length) * 100) + "%"}
      </ColorCircle>
    );
  });

  return (
    <section>
      <ColorContainer>{ColorCircles}</ColorContainer>
    </section>
  );
}

export default ColorRepresentation;
