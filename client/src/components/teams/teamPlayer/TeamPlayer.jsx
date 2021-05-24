import React from "react";
import "./_TeamPlayer.scss";
// const playerImage = require("../player.png");
import playerImage from"../../../images/player.png"
const TeamPlayer = (props) => {
  const { name, position, nation } = props.teamPlayer;
  return (
    <div className="team-player-container">
      <div className="teamPlayer">
        <div
          className="image"
          style={{
            backgroundImage: `url(${playerImage})`
          }}
        ></div>
        <span className="name text">
          <span className="title">Name:</span> {name}
        </span>
        <span className="position text">
          <span className="title">Position:</span> {position}
        </span>
        <span className="nation text">
          <span className="title">Nation:</span> {nation}
        </span>
      </div>
    </div>
  );
};

export default TeamPlayer;
