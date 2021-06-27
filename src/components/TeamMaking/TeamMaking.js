import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import MyTeam from "../MyTeam/MyTeam";
import data from "../../data/data.json";

const TeamMaking = () => {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    setPlayer(data);
  }, []);

  const [teamCost, setTeamCost] = useState([]);

  const handlePlayerSelection = (player) => {
    const newCost = [...teamCost, player];
    setTeamCost(newCost);
  };
  return (
    <div style={{ maxWidth: "90%", margin: "0 auto" }}>
      <div style={{ minHeight: "200px", textAlign: "center" }}>
        <MyTeam team={teamCost}></MyTeam>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          width: "100%",
          gap: "20px 10px",
        }}
      >
        {player.map((player) => (
          <Player
            key={player.id}
            player={player}
            handleBtn={handlePlayerSelection}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default TeamMaking;
