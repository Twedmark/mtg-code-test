import styled from "styled-components";

const CardBorder = styled.div`
  position: relative;
  box-sizing: border-box;
  border-radius: 2%;
  width: 100%;
  aspect-ratio: 4/3;
  background-color: white;
`;

const MountainBase = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 2.5rem;
  background-color: rgb(238, 238, 238);
  width: calc(100% - 5rem);
  height: 20%;
`;

const tops = styled.div`
  &:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    margin-left: -500px;
    border-left: 500px solid transparent;
    border-right: 500px solid transparent;
    border-bottom: 500px solid rgb(238, 238, 238);
  }
`;

const TopLeft = styled(tops)`
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 50%;
  height: 0;
  padding-left: 22%;
  padding-bottom: 25%;
  overflow: hidden;
`;

const TopRight = styled(tops)`
  position: absolute;
  right: 0;
  bottom: 100%;
  width: 35%;
  height: 0;
  padding-left: 35%;
  padding-bottom: 40%;
  overflow: hidden;
`;

export default function EmptyCard() {
  return (
    <CardBorder>
      <MountainBase>
        <TopLeft></TopLeft>
        <TopRight></TopRight>
      </MountainBase>
    </CardBorder>
  );
}
