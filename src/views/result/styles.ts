import styled from "styled-components";

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0.5rem;
  align-self: center;
  font-size: 2rem;
  margin: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  align-content: center;
  grid-gap: 1rem;
  grid-template:
    ". . a . ."
    "b b . c c"
    "d d d d d" auto / 1fr 1fr 1fr 1fr 1fr;

  & > section {
    display: flex;
    flex-direction: column;
  }
  & > section:nth-child(1) {
    grid-area: a;
  }
  & > section:nth-child(2) {
    grid-area: b;
  }
  & > section:nth-child(3) {
    grid-area: c;
  }
  & > section:nth-child(4) {
    grid-area: d;
  }
  & > section > input,
  select {
    height: 1.5rem;
    font-size: 15px;
    &:focus {
      outline: transparent;
      border: 2px solid #000;
    }
  }
  /* mediaquery at below 600px */
  @media (max-width: 600px) {
    grid-template:
      ". a a ."
      "b b c c"
      "d d d d" auto / 1fr 1fr 1fr 1fr;
  }
`;

export const Button = styled.button`
  width: 6rem;
  height: 2rem;
  border: none;
  border-radius: 0.5rem;
  margin-top: 1rem;
  background-color: rgb(255, 255, 255);
  color: rgb(42, 37, 57);
  align-self: start;
  &:focus {
    outline: transparent;
  }
  &:active {
    transform: scale(0.95);
  }
`;
