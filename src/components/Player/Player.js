import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Player = (props) => {
  const { id, name, salary, country, img, transfer_fee } = props.player;
  const style = {
    width: "250px",
    textAlign: "center",
    padding: "30px",
    boxSizing: "border-box",
    backgroundColor: "#90e0ef",
    justifySelf: "center",
    borderRadius: "5px",
  };

  const hidePlayer = (id) => {
    document.getElementById(id).style.display = "none";
  };

  const handleBtn = (id) => {
    props.handleBtn(props.player);
    hidePlayer(id);
  };

  return (
    <div style={style} id={id}>
      <img
        style={{ borderRadius: "50%", backgroundColor: "#dfe7fd" }}
        src={img}
        alt=""
      />
      <h3>{name}</h3>
      <img src={country} alt="" />
      <p>transfer fee: ${transfer_fee}</p>
      <p>salary: ${salary}</p>
      <button
        style={{
          outline: "none",
          border: "none",
          padding: "10px 20px",
          backgroundColor: "#1d3557",
          color: "#ffffff",
        }}
        onClick={() => handleBtn(id)}
      >
        <FontAwesomeIcon style={{ marginRight: "8px" }} icon={faUserPlus} />
        select player
      </button>
    </div>
  );
};

export default Player;
