import React from "react";
import "./_player.scss";

const Player = (props) => {
  const { name, position } = props.player
  return (
    <div className="player">
      <div className="image"></div>
      <div className="name">{name}</div>
      <div className="position">{position}</div>
    </div>
  );
};

export default Player;
