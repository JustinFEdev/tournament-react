import React, { useState, useEffect } from "react";
import "../layout.scss";
import NaviBar from "../navigation/NaviBar";
import GameItem from "../box/GameItem";

const AllGames = () => {
  const [gameData, setGameData] = useState([]);
  const [pickone, setPickone] = useState({});
  function AddComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ",");
  }

  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(
        Math.random() * currentIndex
      );
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  useEffect(() => {
    const aa = [];
    const status = [
      "newarivel",
      "shooting",
      "sports",
      "arcade",
      "rpg",
      "adventure",
      "puzzle",
      "rhythm",
    ];
    for (var i = 0; i < 30; i++) {
      const count = Math.floor(Math.random() * 10000);
      const num = Math.floor(Math.random() * 10000000);
      const people = AddComma(
        Math.floor(Math.random() * 100000)
      );

      // const dek = shuffle(status);
      const choose =
        status[
          Math.floor(Math.random() * 100000) % status.length
        ];
      const menuDatas = {
        img: AddComma(Number(count)),
        point: AddComma(Number(num)),
        user: people,
        status: choose,
      };
      aa.push(menuDatas);
    }
    // console.log("sort");
    const array = [];
    aa.map((info) => array.push(info.point));
    array.sort();
    console.log("array");
    console.log(aa);
    setGameData(aa);
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          <div style={{ height: "100%" }}>
            <NaviBar />
            <div
              className="menu-container"
              style={{
                marginTop: 100,
                border: "1px solid",
                padding: 0,
              }}
            >
              <span
                className="menu-selector"
                style={{
                  backgroundColor: "#9bd0e1",
                  color: "#fff",
                }}
              >
                All Games
              </span>
              <span
                className="menu-selector"
                style={{
                  backgroundColor: "#fff",
                  border: "solid 2.5px #77b5c9",
                  color: "#77b5c9",
                }}
              >
                New Arrival
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <GameItem menuData={gameData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllGames;
