import React from "react";

const MyTeam = (props) => {
  const teamCost = props.team;
  const totalSalary = teamCost.reduce(
    (total, player) => total + player.salary,
    0
  );
  const totalTranfarFee = teamCost.reduce(
    (total, player) => total + player.transfer_fee,
    0
  );

  const infoStyle = {
    border: "1px solid #90e0ef",
    margin: "10px 30%",
    padding: "10px",
    backgroundColor: "#90e0ef",
    color: "#090909",
    borderRadius: "10px",
  };
  return (
    <div
      style={{
        width: "100%",
        border: "1px solid #ededed",
        borderRadius: "10px",
        marginBottom: "30px",
      }}
    >
      <p style={infoStyle}>Total players: {teamCost.length}</p>
      <p style={infoStyle}>Total players transfer fee: ${totalTranfarFee}</p>
      <p style={infoStyle}>Total players salary: ${totalSalary}</p>
      <div>
        {props.team.map((pl) => (
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#f1faee",
              margin: "10px",
            }}
            key={pl.id}
          >
            <img
              style={{
                width: "150px",
                display: "block",
                backgroundColor: "#bee1e6",
              }}
              src={pl.img}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeam;
