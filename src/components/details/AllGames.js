import React, { useState, useEffect } from "react";
import "../layout.scss";
// import GameItem from "../slides/GameItem";
import NaviBar from "../navigation/NaviBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AllGames = () => {
  const [gameData, setGameData] = useState([]);
  const [gameType, setGameType] = useState({});
  console.log("gameType");
  console.log(gameType);

  const [allItem, setAllItem] = useState(false);

  const titleSettings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    // slidesToScroll: 1,
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

  // console.log("pickMenu");
  // console.log(pickMenu.map((info) => info.type));

  // const ClickAllItem = () => {
  //   console.log("click all items");
  //   setGameData(gameData);
  // };

  function AddComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ",");
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
    for (var i = 0; i < 100; i++) {
      const count = Math.floor(Math.random() * 10000);
      const num = Math.floor(Math.random() * 10000000);
      const people = AddComma(
        Math.floor(Math.random() * 100000)
      );

      const choose =
        status[
          Math.floor(Math.random() * 100000) % status.length
        ];

      const menuDatas = {
        img: AddComma(Number(count)),
        point: AddComma(Number(num)),
        user: people,
        status: choose,
        allItems: false,
      };
      aa.push(menuDatas);
    }
    // console.log("sort");
    const array = [];
    aa.map((info) => array.push(info));
    // array.sort();
    //
    setGameData(array);
    console.log("gameData");
    console.log(gameData);
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          <div
            style={{ height: "100%", minHeight: "100vh" }}
          >
            <NaviBar />
            <div
              className="menu-container"
              style={{
                marginTop: 100,
                // border: "1px solid",
                padding: 0,
              }}
            >
              <div style={{ width: "100%" }}>
                <Slider {...titleSettings}>
                  <div>
                    <button
                      onClick={() => setAllItem(!allItem)}
                      className="menu-selector"
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
                          marginLeft: 25,
                        }}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setGameType(info.type)
                          }
                          className="menu-selector-sub"
                          style={{
                            border:
                              gameType === info.type
                                ? "solid 2.5px black"
                                : "solid 2.5px #77b5c9",
                            color:
                              gameType === info.type
                                ? "black"
                                : "#77b5c9",
                            padding: "0px ​10px",
                            textTransform: "capitalize",
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
                // display: "flex",
                // justifyContent: "center",
                // flexWrap: "wrap",
                padding: "0 31px",
                width: "100%",
                minHeight: "100vh",
                height: "100%",
              }}
            >
              {/* {
                !allItem && (
                  <> */}
              {gameData.map((info, index) => (
                <>
                  <div
                    style={{
                      float: "left",
                      height: "100%",
                    }}
                  >
                    {info.status === gameType && (
                      <>
                        <div
                          className="gameItem-container"
                          key={index}
                        >
                          <div
                            className="gameItem-img"
                            alt=""
                          >
                            img
                          </div>
                          <div className="gameItem-wrapper">
                            <span className="gameItem-pointarea">
                              <div className="gameItem-icon">
                                PP
                              </div>
                              <div className="gameItem-point">
                                {info.point}
                              </div>
                            </span>
                            <span className="gameItem-userarea">
                              <div className="gameItem-usericon">
                                II
                              </div>
                              <span className="gameItem-number">
                                {info.user}
                              </span>
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                    {/* {info.allItems === true && (
                      <>
                        <GameItem menuData={gameData} />
                      </>
                    )} */}
                  </div>
                </>
              ))}
              {/* </>
                )
                //  : (
                // ) */}
              {/* } */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllGames;
