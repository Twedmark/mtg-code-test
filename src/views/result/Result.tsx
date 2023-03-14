import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../../logo.svg";
import "./../../App.css";

function App(props: any) {
  const navigate = useNavigate();
  const { card } = props;

  function home() {
    console.log("home");
    navigate("/");
  }

  return (
    <div className="App">
      Result
      <img src={logo} className="App-logo" alt="logo" onClick={home} />
      <>
        <img src={card?.image_uris.border_crop} alt={card?.name}></img>
      </>
    </div>
  );
}

export default App;
