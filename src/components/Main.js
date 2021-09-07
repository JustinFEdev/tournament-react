import React, { useState, useEffect } from "react";
import ContinueSlide from "./slides/ContinueSlide";
import LiveSlide from "./slides/LiveSlide";
import MissionSlide from "./slides/MissionSlide";
import GameItem from "./slides/GameItem";
import NaviBar from "./navigation/NaviBar";
import "./layout.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import AllGames from "./details/AllGames";

export function AddComma(num) {
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ",");
}

// weekly progress bar
const Progress = ({ done }) => {
  return (
    <>
      <div
        className="progress"
        style={{
          position: "absolute",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div
          className="progress-done"
          style={{
            opacity: 1,
            width: `${done}%`,
          }}
        >
          {done}%
        </div>
      </div>
    </>
  );
};

const Main = () => {
  //liveslide state
  const [live, setLive] = useState();
  // continue state
  const [conti, setConti] = useState();
  // weekly mession state
  const [weekly, setWeekly] = useState();
  // weekly mession state
  const [feature, setFeature] = useState();
  // game menu data
  const [gameData, setGameData] = useState([]);

  //하단 게임메뉴 state
  const [allItem, setAllItem] = useState(true);
  const [gameType, setGameType] = useState({});
  // const [max, setMax] = useState();

  //하단 게임메뉴 slide
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
  //하단 게임메뉴 data
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

  // ContinueSlide && MissionSlide
  const typeData = [
    {
      id: 1,
      title: "Continue Playing",
      route: "Completed >",
      direction: "/completed",
      slide: <ContinueSlide conti={conti} />,
    },
    {
      id: 2,
      title: "Weekly Mission",
      route: "See All >",
      direction: "/allrank",
      slide: <MissionSlide weekly={weekly} />,
      complete: 5,
    },
  ];

  //comma function
  function AddComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ",");
  }

  // bottom menu slide demo data & (ContinueSlide && MissionSlide) data
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
      const num = AddComma(
        Math.floor(Math.random() * 10000000)
      );
      const choose =
        status[
          Math.floor(Math.random() * 100000) % status.length
        ];
      const people = AddComma(
        Math.floor(Math.random() * 100000)
      );

      const menuDatas = {
        img: count,
        point: num,
        user: people,
        status: choose,
      };

      aa.push(menuDatas);
    }
    setGameData(aa);

    //weekly mission datas
    const datas = [
      {
        id: 1,
        title: "aa",
        target: 4,
        point: 2,
        img: "1111",
      },
      {
        id: 2,
        title: "bb",
        target: 5,
        point: 10,
        img: "2222",
      },
      {
        id: 3,
        title: "cc",
        target: 2,
        point: 5,
        img: "3333",
      },
      {
        id: 4,
        title: "dd",
        target: 3,
        point: 1,
        img: "4444",
      },
      {
        id: 5,
        title: "ff",
        target: 5,
        point: 6,
        img: "555",
      },
    ];

    //continue mission data
    const contiInfo = [
      {
        id: 1,
        title: "aa",
        time: 4,
        point: 2,
        img: "1111",
      },
      {
        id: 2,
        title: "bb",
        time: 5,
        point: 10,
        img: "2222",
      },
      {
        id: 3,
        title: "cc",
        time: 2,
        point: 5,
        img: "3333",
      },
      {
        id: 4,
        title: "dd",
        time: "2:11",
        point: 10,
        img: "444",
      },
    ];
    //Live mission
    const liveInfo = [
      {
        id: 1,
        status: "live",
        title: "aa",
        time: 4,
        point: 2,
        number: 35,
        img: "1111",
      },
      {
        id: 2,
        status: "live",
        title: "bb",
        time: 6,
        point: 12,
        number: 22,
        img: "2222",
      },
      {
        id: 3,
        status: "live",
        title: "cc",
        time: 65,
        point: 266,
        number: 878,
        img: "3333",
      },
      {
        id: 4,
        status: "live",
        title: "dd",
        time: 1,
        point: 21,
        number: 45,
        img: "4444",
      },
    ];
    //feature
    const featureInfo = [
      {
        id: 1,
        time: 4,
        point: 2,
        user: 35,
        img: "1111",
      },
      {
        id: 2,
        time: 6,
        point: 12,
        user: 22,
        img: "2222",
      },
      {
        id: 3,
        time: 65,
        point: 266,
        user: 878,
        img: "3333",
      },
    ];
    // featureInfo[0] = "main";
    // featureInfo[(1, 2)] = "sub";
    // console.log();
    setWeekly(datas);
    setConti(contiInfo);
    setLive(liveInfo);
    setFeature(featureInfo);
    // const maxNum = Math.max(...max);
    // console.log("maxNum");
    // console.log(maxNum);
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          <header>
            <NaviBar />
          </header>

          {/* LiveSlide */}
          <div className="main-live-wrapper">
            <LiveSlide live={live} />
          </div>

          {/* Weekly Mission & Continue Playing */}
          {typeData !== undefined && (
            <>
              {typeData.map((info, index) => (
                <div
                  className="slide-contianer"
                  key={index}
                >
                  <div className="slide-wrapper">
                    <div className="slide-space">
                      <div className="slide-title-wrapper">
                        {/* Continue Playing */}
                        <span className="slide-title">
                          {info.title}
                        </span>
                        {/* option */}
                        <a href={info.direction}>
                          <span className="slide-route">
                            {info.route}
                          </span>
                        </a>
                      </div>
                      {info.id === 2 && (
                        <>
                          <div className="weekly-textwrapper">
                            <h4 className="weekly-towin">
                              You Won
                            </h4>
                            <span className="weekly-ppimg-layout">
                              <p className="weekly-ppimg-text">
                                PP
                              </p>
                            </span>
                            <div className="weekly-game-status">
                              0/20
                            </div>
                          </div>

                          <div className="weekly-progress-layout">
                            <Progress done="70" />
                          </div>
                        </>
                      )}
                    </div>
                    <div className="slide-area">
                      {info.slide}
                    </div>
                    {info.id === 2 && (
                      <h2 className="weekly-daycount">
                        {info.complete} days left to complet
                      </h2>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}
          {/* Featured Tournament */}
          <div className="featured-container">
            <div
              style={{
                width: "100%",
              }}
            >
              <div
                style={{
                  padding: "0 30px",
                }}
              >
                <p className="featured-title">
                  Featured Tournaments
                </p>
                {/* big img area */}
                {feature !== undefined && (
                  <>
                    {feature.map((data) => (
                      <>
                        {data.id === 1 && (
                          <>
                            <div
                              className="featured-img"
                              alt={data.img}
                            />
                            <div className="featured-infoarea">
                              <span className="gameItem-pointarea">
                                <div className="gameItem-icon">
                                  <p
                                    style={{
                                      paddingTop: 2.5,
                                    }}
                                  >
                                    PP
                                  </p>
                                </div>
                                <div className="gameItem-point">
                                  {data.point}
                                </div>
                              </span>
                              <span className="gameItem-userarea">
                                <div className="gameItem-usericon">
                                  Icon
                                </div>
                                <span className="gameItem-number">
                                  {data.user}
                                </span>
                                <div>Info icon</div>
                              </span>
                            </div>
                          </>
                        )}
                      </>
                    ))}
                    <div className="featured-smallarea">
                      {feature.map((data) => (
                        <>
                          {data.id === 2 && (
                            <>
                              <div className="featured-samll-wrapper">
                                <div
                                  className="featured-samll-img"
                                  alt="1"
                                />
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent:
                                      "space-between",
                                  }}
                                >
                                  <span className="gameItem-pointarea">
                                    <div className="gameItem-icon">
                                      <p
                                        style={{
                                          paddingTop: 2.5,
                                        }}
                                      >
                                        PP
                                      </p>
                                    </div>
                                    <div className="gameItem-point">
                                      {data.point}
                                    </div>
                                  </span>
                                  <span className="gameItem-userarea">
                                    <div className="gameItem-usericon">
                                      Icon
                                    </div>
                                    <span className="gameItem-number">
                                      {data.user}
                                    </span>
                                    <div>Info icon</div>
                                  </span>
                                </div>
                              </div>
                            </>
                          )}
                          {data.id === 3 && (
                            <>
                              <div className="featured-samll-wrapper">
                                <div
                                  className="featured-samll-img"
                                  alt="1"
                                />
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent:
                                      "space-between",
                                  }}
                                >
                                  <span className="gameItem-pointarea">
                                    <div className="gameItem-icon">
                                      <p
                                        style={{
                                          paddingTop: 2.5,
                                        }}
                                      >
                                        PP
                                      </p>
                                    </div>
                                    <div className="gameItem-point">
                                      {data.point}
                                    </div>
                                  </span>
                                  <span className="gameItem-userarea">
                                    <div className="gameItem-usericon">
                                      Icon
                                    </div>
                                    <span className="gameItem-number">
                                      {data.user}
                                    </span>
                                    <div>Info icon</div>
                                  </span>
                                </div>
                              </div>
                            </>
                          )}
                          {/* -- */}
                        </>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* Slide menu */}
          <div className="menu-container">
            {/* <span
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
            </span> */}
            <div style={{ width: "100%" }}>
              <Slider {...titleSettings}>
                <div>
                  <button
                    onClick={() => setAllItem(allItem)}
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
              padding: "0 30px",
              textAlign: "center",
              minHeight: "450px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <GameItem
                menuData={gameData}
                gameType={gameType}
                limitNum={true}
              />
            </div>
          </div>
          {gameData.length > 15 && (
            <>
              <div
                style={{
                  position: "relative",
                  fontFamily: "AppleSDGothicNeo",
                  color: "#598b9b",
                  padding: "70px 0",
                  fontSize: 38,
                  fontWeight: 500,
                  cursor: "pointer",
                  zIndex: 100,
                }}
              >
                <a href="/allgames">View All Games</a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
