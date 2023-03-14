import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "./../../logo.svg";
import "./../../App.css";

function Search(props: any) {
  const { setCard } = props;
  const navigate = useNavigate();

  async function fetchTest() {
    const data = await fetch("https://api.scryfall.com/cards/random", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await data.json();
    console.log(props);
    setCard(response);
    navigate("/result");
    console.log(response);
  }

  return (
    <div className="App">
      Search
      <img src={logo} className="App-logo" alt="logo" />
      <button onClick={fetchTest}>fetch</button>
    </div>
  );
}

export default Search;
