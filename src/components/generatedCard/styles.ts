import styled from "styled-components";

const backgroundColor = "rgb(179, 179, 179)";

const baseText = styled.h1`
  margin: 0;
  font-size: 0.9rem;
`;

const baseDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  margin-bottom: 0.1rem;
  border-radius: 0.3rem;
  background-color: ${backgroundColor};
`;

export const Title = styled.h4`
  align-self: center;
  margin: 0;
  margin-bottom: 0.5rem;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 0.3rem;
  background-color: rgb(42, 37, 57);
  padding: 1.4rem 1.7rem;
  color: black;
`;

export const NameAndManaCost = styled(baseDiv)`
  justify-content: space-between;
`;

export const Name = styled(baseText)`
  margin-left: 1rem;
`;

export const ManaCost = styled(baseText)`
  margin-right: 1rem;
`;

export const TypeAndSet = styled(baseDiv)`
  justify-content: space-between;
  margin-top: 0.1rem;
`;

export const Type = styled(baseText)`
  margin-left: 1rem;
`;

export const Set = styled(baseText)`
  margin-right: 1rem;
`;

export const DescriptionAndStats = styled(baseDiv)`
  height: 30%;
  display: grid;
  grid: auto-flow / 1fr;
  justify-items: center;
`;

export const Description = styled(baseText)`
  align-self: flex-end;
`;

export const Stats = styled(baseDiv)`
  align-self: flex-end;
  justify-self: flex-end;
  height: 40%;
  width: 25%;
  background-color: rgb(117, 117, 117);
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
`;

export const Power = styled.p`
  margin: 3%;
  font-size: 1rem;
  &:after {
    content: " / ";
  }
`;

export const Toughness = styled.p`
  margin: 3%;
  font-size: 1rem;
`;
