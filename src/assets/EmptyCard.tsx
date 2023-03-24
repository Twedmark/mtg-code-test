import React from "react";
import styled from "styled-components";

const CardBorder = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 100%;
  aspect-ratio: 4/3;
  background-color: white;
  padding: 1.5rem;
`;

const MountainBase = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  background-color: rgb(238, 238, 238);
  width: calc(100% - 3rem);
  height: 35%;
`;

const TopLeft = styled.div`
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 0;
  height: 0;
  border-left: 5rem solid transparent;
  border-right: 5rem solid transparent;
  border-bottom: 5rem solid rgb(238, 238, 238);
`;

const TopRight = styled.div`
  position: absolute;
  right: 0;
  bottom: 100%;
  width: 0;
  height: 0;
  border-left: 8rem solid transparent;
  border-right: 8rem solid transparent;
  border-bottom: 8rem solid rgb(238, 238, 238);
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
