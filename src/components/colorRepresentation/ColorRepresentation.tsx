import React, { useEffect, useState } from "react";
import { RootState, useAppSelector } from "../../redux/store";
import { ColorContainer, ColorCircle, ColorCircleHover } from "./styles";

interface Count {
  mono: number;
  multicolor: {
    [color: string]: number;
  };
}

interface CountByColor {
  [color: string]: Count;
}

interface ColorCount {
  color: string;
  count: Count;
  backgroundColor: string | undefined;
}

function ColorRepresentation(): JSX.Element {
  const cards = useAppSelector((state: RootState) => state.cardStore.cards);
  const [countAndColor, setCountAndColor] = useState<ColorCount[]>([]);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const colors = ["W", "U", "B", "R", "G"];
    const newCount: CountByColor = {};

    for (const color of colors) {
      newCount[color] = { mono: 0, multicolor: {} };
      for (const otherColor of colors.filter((c) => c !== color)) {
        newCount[color].multicolor[otherColor] = 0;
      }
    }

    cards.forEach((card) => {
      card.color_identity?.forEach((color: string) => {
        const count = newCount[color];
        const multicolor = count.multicolor;
        count.mono += 1;
        card.color_identity.forEach((c: string) => {
          if (c !== color) multicolor[c] += 1;
        });
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

  function multiColor(count: Count) {
    if (!count.multicolor) {
      return null;
    }
    return Object.keys(count.multicolor).map((color, index) => {
      const countForColor = count.multicolor[color];
      return (
        <ColorCircleHover key={index} className="color">
          {color} + {countForColor}
        </ColorCircleHover>
      );
    });
  }
  return (
    <section>
      <ColorContainer>
        {countAndColor.map((colorCount) => (
          <ColorCircle
            key={colorCount.color}
            prop={colorCount}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {!hover
              ? Math.round((colorCount.count.mono / cards.length) * 100) + "%"
              : multiColor(colorCount.count)}
          </ColorCircle>
        ))}
      </ColorContainer>
    </section>
  );
}

export default ColorRepresentation;
