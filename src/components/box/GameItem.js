import React from "react";

const GameItem = () => {
  return (
    <>
      <div
        style={{
          width: 190,
          borderRadius: 12.5,
          boxShadow: "0 13px 13px 0 rgba(77, 93, 107, 0.13)",
          border: "solid 2.5px #86b1be",
          backgroundColor: " #fff",
          margin: "25px 25px 0 0",
        }}
      >
        <div
          style={{
            width: 190,
            height: 191,
            borderRadius: "12.5px 12.5px 0 0 ",
            backgroundColor: "#c9e2ea",
          }}
          alt=""
        >
          img
        </div>
        <div style={{ height: 124 }}>
          <span style={{ display: "flex" }}>
            <p style={{ border: "1px solid" }}>pp</p>
            <p>num</p>
          </span>
          <span>user</span>
        </div>
      </div>
    </>
  );
};

export default GameItem;
