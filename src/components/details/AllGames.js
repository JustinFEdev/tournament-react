import React, { useState, useEffect } from "react";
import "../layout.scss";
import NaviBar from "../navigation/NaviBar";
import GameItem from "../box/GameItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AllGames = () => {
  const [gameData, setGameData] = useState([]);

  const titleSettings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    useCss: true,
  };
  const pickMenu = [
    { type: "newarivel" },
    { type: "shooting" },
    { type: "sports" },
    { type: "arcade" },
    { type: "rpg" },
    { type: "adventure" },
    { type: "puzzle" },
    { type: "rhythm" },
  ];
  console.log("pickMenu");
  console.log(pickMenu.map((info) => info.type));

  const ClickTypeHandle = () => {
    console.log("click");
  };

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
              <div style={{ width: "100%" }}>
                <Slider {...titleSettings}>
                  <div>
                    <button
                      className="menu-selector"
                      style={{
                        width: 185,
                        backgroundColor: "#9bd0e1",
                        color: "#fff",
                      }}
                    >
                      All Games
                    </button>
                  </div>
                  {pickMenu.map((info) => (
                    <>
                      <div
                        style={{
                          display: "inline-flex",
                          width: "100%",
                        }}
                      >
                        <button
                          type="button"
                          onClick={ClickTypeHandle}
                          className="menu-selector"
                          style={{
                            width: 160,
                            backgroundColor: "#fff",
                            border: "solid 2.5px #77b5c9",
                            color: "#77b5c9",
                            padding: "0px ​10px",
                          }}
                        >
                          {info.type}
                        </button>
                      </div>
                    </>
                  ))}
                </Slider>
              </div>
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
