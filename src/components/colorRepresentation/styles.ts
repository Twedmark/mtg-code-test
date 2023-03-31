import styled from "styled-components";

export const ColorContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  width: 100%;
  max-width: 50rem;
  background-color: rgb(42, 37, 57);
`;

export const ColorCircle = styled.div<{
  prop: any;
}>`
  margin: 4.5%;
  width: 11%;
  aspect-ratio: 1;
  font-size: 1.5rem;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.prop.color === "W" ? "Black" : "White")};
  background-color: ${(prop) => prop.prop.backgroundColor};
`;

export const ColorCircleHover = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
