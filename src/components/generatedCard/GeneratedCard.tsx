import EmptyCard from "../../assets/EmptyCard";
import { RootState, useAppSelector } from "../../app/store";
import {
  Title,
  Background,
  NameAndManaCost,
  Name,
  ManaCost,
  TypeAndSet,
  Type,
  Set,
  DescriptionAndStats,
  Description,
  Stats,
  Power,
  Toughness,
} from "./styles";

function GeneratedCard() {
  const card = useAppSelector((state: RootState) => state.searchStore);

  return (
    <section>
      <Title>Generated Card</Title>
      <Background>
        <NameAndManaCost>
          <Name>{card.name ? card.name : ""}</Name>
          <ManaCost>{card.cost ? card.cost : "X"}</ManaCost>
        </NameAndManaCost>
        {card.image ? <img src={card.image} alt=" " /> : <EmptyCard />}
        <TypeAndSet>
          <Type>{card.type}</Type>
          <Set>☽</Set>
        </TypeAndSet>
        <DescriptionAndStats>
          <Description>{card.desc ? card.desc : ""}</Description>
          <Stats>
            <Power>{card.power ? card.power : "X"}</Power>
            <Toughness>{card.toughness ? card.toughness : "X"}</Toughness>
          </Stats>
        </DescriptionAndStats>
      </Background>
      <div style={{ width: "100%", height: "14%" }}></div>
    </section>
  );
}

export default GeneratedCard;
