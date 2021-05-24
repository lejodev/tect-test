import React from "react";
import "./_player.scss";
import playerImage from "../../../images/player.png";

const Player = (props) => {
  const { name, position } = props.player;
  return (
    <div className="player">
      <div
        className="image"
        style={{ backgroundImage: `url(${playerImage})` }}
      ></div>
      <div className="name">{name}</div>
      <div className="position">{position}</div>
    </div>
  );
};

export default Player;
