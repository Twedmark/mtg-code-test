import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { addCards } from "../../cardSlice/cardSlice";
import routes from "../../services/service";
import SearchFrom from "./../../components/form/SearchFrom";
import styled from "styled-components";

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function Search() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function fetchTest() {
    const cardQuery = "c=green+pow=3+type=creature+r>=rare";
    const cards = await routes.search(cardQuery);
    dispatch(addCards(cards));
    navigate("/result");
  }

  return (
    <div className="App">
      <SearchFrom />

      <Button onClick={fetchTest}>fetch test</Button>
    </div>
  );
}

export default Search;
