import React, { useEffect, useState } from "react";
import { RootState, useAppSelector } from "../../app/store";
import { ColorContainer, ColorCircle } from "./styles";

interface CountByColor {
  [color: string]: Count;
}

interface Count {
  count: number;
  multicolor: Multicolor;
}

interface ColorCount {
  color: string;
  count: Count;
  backgroundColor: string;
}

interface Multicolor {
  [color: string]: number;
}

function ColorRepresentation() {
  const cards = useAppSelector((state: RootState) => state.cardStore.cards);

  const [countAndColor, setCountAndColor] = useState<ColorCount[]>([]);

  useEffect(() => {
    const colors = ["White", "Blue", "Black", "Red", "Green"];
    const newCount: CountByColor = {};
    for (const color of colors) {
      const multicolor: Multicolor = {};
      for (const otherColor of colors.filter((c) => c !== color)) {
        multicolor[otherColor] = 0;
      }
      newCount[color] = { count: 0, multicolor };
    }

    cards.forEach((card) => {
      card.color_identity?.forEach((color: string) => {
        if (color === "W") {
          newCount.White.count += 1;
          card.color_identity.forEach((color: string) => {
            if (color === "U") newCount.White.multicolor.Blue += 1;
            if (color === "B") newCount.White.multicolor.Black += 1;
            if (color === "R") newCount.White.multicolor.Red += 1;
            if (color === "G") newCount.White.multicolor.Green += 1;
          });
        }
        if (color === "U") {
          newCount.Blue.count += 1;
          card.color_identity.forEach((color: string) => {
            if (color === "W") newCount.Blue.multicolor.White += 1;
            if (color === "B") newCount.Blue.multicolor.Black += 1;
            if (color === "R") newCount.Blue.multicolor.Red += 1;
            if (color === "G") newCount.Blue.multicolor.Green += 1;
          });
        }
        if (color === "B") {
          newCount.Black.count += 1;
          card.color_identity.forEach((color: string) => {
            if (color === "W") newCount.Black.multicolor.White += 1;
            if (color === "U") newCount.Black.multicolor.Blue += 1;
            if (color === "R") newCount.Black.multicolor.Red += 1;
            if (color === "G") newCount.Black.multicolor.Green += 1;
          });
        }
        if (color === "R") {
          newCount.Red.count += 1;
          card.color_identity.forEach((color: string) => {
            if (color === "W") newCount.Red.multicolor.White += 1;
            if (color === "U") newCount.Red.multicolor.Blue += 1;
            if (color === "B") newCount.Red.multicolor.Black += 1;
            if (color === "G") newCount.Red.multicolor.Green += 1;
          });
        }
        if (color === "G") {
          newCount.Green.count += 1;
          card.color_identity.forEach((color: string) => {
            if (color === "W") newCount.Green.multicolor.White += 1;
            if (color === "U") newCount.Green.multicolor.Blue += 1;
            if (color === "B") newCount.Green.multicolor.Black += 1;
            if (color === "R") newCount.Green.multicolor.Red += 1;
          });
        }
      });
    });

    setCountAndColor([
      {
        color: "White",
        count: newCount.White,
        backgroundColor: "rgb(255, 255, 255)",
      },
      {
        color: "Blue",
        count: newCount.Blue,
        backgroundColor: "rgb(69, 151, 247)",
      },
      {
        color: "Black",
        count: newCount.Black,
        backgroundColor: "rgb(30, 30, 30)",
      },
      {
        color: "Red",
        count: newCount.Red,
        backgroundColor: "rgb(223, 86, 52)",
      },
      {
        color: "Green",
        count: newCount.Green,
        backgroundColor: "rgb(80, 171, 100)",
      },
    ]);
  }, [cards]);

  return (
    <section>
      <ColorContainer>
        {countAndColor.map((colorCount) => (
          <ColorCircle key={colorCount.color} prop={colorCount}>
            {Math.round((colorCount.count.count / cards.length) * 100)}%
          </ColorCircle>
        ))}
      </ColorContainer>
    </section>
  );
}

export default ColorRepresentation;
