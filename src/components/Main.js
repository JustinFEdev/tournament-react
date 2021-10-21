import React, {
  useState,
  useEffect,
  useCallback,
} from "react";
import ContinueSlide from "./slides/ContinueSlide";
import LiveSlide from "./slides/LiveSlide";
import MissionSlide from "./slides/MissionSlide";
import GameItem from "./slides/GameItem";
import NaviBar from "./navigation/NaviBar";
import "./layout.scss";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import moment from "moment";
import SignPopup from "./modal/SignPopup";

// live banner img
import live_banner_1 from "../resource/image/banner_646x328 (1).jpg";
import live_banner_2 from "../resource/image/banner_646x328 (2).jpg";
import live_banner_3 from "../resource/image/banner_646x328.jpg";
// continue banner img
import continue_img_1 from "../resource/image/banner_300x370 (1).jpg";
import continue_img_2 from "../resource/image/banner_300x370 (2).jpg";
import continue_img_3 from "../resource/image/banner_300x370.jpg";
import Man_img from "../resource/image/man-small@2x.png";
import Notice from "../resource/image/icon-arrow-i@2x.png";
import Point_logo from "../resource/image/icon-pp@2x.png";
import time_layout from "../resource/image/rectangle@2x.png";

// import AllGames from "./details/AllGames";
import styled, { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
} from "../themes";
// import ToggleComponent from "./util/ToggleComponent";

export function AddComma(num) {
  var regexp = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(regexp, ",");
}

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

// const SideOpac = styled.div`
//   position: absolute;
//   height: 68%;
//   width: 15px;
//   right: 0;
//   bottom: 0;
//   opacity: 0.4;
//   -webkit-filter: blur(5px);
//   -moz-filter: blur(5px);
//   -o-filter: blur(5px);
//   -ms-filter: blur(5px);
//   filter: blur(6px);
//   background-color: #fff;
//   z-index: 10;
// `;
//Live mission
const liveInfo = [
  {
    id: 1,
    status: "live",
    title:
      "Bit Miner Bit 22 Miner Game Bit Miner Bit 22 Miner Game ",
    // time: nowTime,
    point: 2000,
    number: 35,
    img: live_banner_1,
  },
  {
    id: 2,
    status: "live",
    title: "Spooky Bumb Game",
    time: 6,
    point: 12000,
    number: 22,
    img: live_banner_2,
  },
  {
    id: 3,
    status: "live",
    title: "Bit Miner Bit 22 Miner Game",
    time: 65,
    point: 266,
    number: 878,
    img: live_banner_3,
  },
  {
    id: 4,
    status: "live",
    title: "dd",
    time: "24:00:00",
    point: 2000,
    number: 45,
    img: live_banner_2,
  },
];
//weekly mission datas
const datas = [
  {
    id: 1,
    title: "spooky",
    time: 4,
    point: 4320,
    img: continue_img_1,
  },
  {
    id: 2,
    title: "bit miner",
    time: 5,
    point: 1560,
    img: continue_img_2,
  },
  {
    id: 3,
    title: "minnimoe",
    time: 2,
    point: 7050,
    img: continue_img_3,
  },
  {
    id: 4,
    title: "spooky",
    time: "2:11",
    point: 1230,
    img: continue_img_1,
  },
];

//continue mission data
const contiInfo = [
  {
    id: 1,
    title: "spooky",
    time: 4,
    point: 2000,
    img: continue_img_1,
  },
  {
    id: 2,
    title: "bit miner",
    time: 5,
    point: 1000,
    img: continue_img_2,
  },
  {
    id: 3,
    title: "minnimoe",
    time: 2,
    point: 5000,
    img: continue_img_3,
  },
  {
    id: 4,
    title: "spooky",
    time: "2:11",
    point: 1000,
    img: continue_img_1,
  },
  {
    id: 3,
    title: "bit miner",
    time: 2,
    point: 6000,
    img: continue_img_2,
  },
  {
    id: 4,
    title: "minnimoe",
    time: "2:11",
    point: 8000,
    img: continue_img_3,
  },
  {
    id: 4,
    title: "spooky",
    time: "2:11",
    point: 1000,
    img: continue_img_1,
  },
  {
    id: 3,
    title: "bit miner",
    time: 2,
    point: 6000,
    img: continue_img_3,
  },
  {
    id: 4,
    title: "minnimoe",
    time: "2:11",
    point: 8000,
    img: continue_img_2,
  },
];

// feature;
const featureInfo = [
  {
    id: 1,
    time: 4,
    point: 2,
    user: 305,
    img: live_banner_1,
    type: 1,
  },
  {
    id: 2,
    time: 6,
    point: 1020,
    user: 22,
    img: live_banner_1,
    type: 1,
  },
  {
    id: 3,
    time: 65,
    point: 2066,
    user: 878,
    img: continue_img_3,
    type: 2,
  },
  {
    id: 2,
    time: 6,
    point: 1020,
    user: 22,
    img: continue_img_2,
    type: 2,
  },
  {
    id: 3,
    time: 65,
    point: 2066,
    user: 878,
    img: continue_img_1,
    type: 2,
  },
  {
    id: 3,
    time: 65,
    point: 2066,
    user: 878,
    img: continue_img_3,
    type: 2,
  },
];
// footer;
const footerInfo = [
  {
    id: 1,
    point: 2000,
    user: "jackson",
  },
  {
    id: 2,
    point: 4000,
    user: "melody",
  },
  {
    id: 3,
    point: 6000,
    user: "sam",
  },
  {
    id: 4,
    point: 2500,
    user: "paul",
  },
  {
    id: 3,
    point: 1000,
    user: "anderson",
  },
];

//하단 게임메뉴 data
const pickMenu = [
  "all games",
  "new arivel",
  "shooting",
  "sports",
  "arcade",
  "rpg",
  "adventure",
  "puzzle",
  "rhythm",
];

// weekly progress bar
const Progress = ({ done }) => {
  return (
    <>
      <div
        className="progress-done"
        style={{
          width: `${done}%`,
          borderRadius: 2.5,
        }}
      />
    </>
  );
};

const Main = () => {
  const [widthStatus, setWidthStatus] = useState(
    window.innerWidth
  );
  //liveslide state
  const [live, setLive] = useState();
  // continue state
  const [conti, setConti] = useState();
  // weekly mession state
  const [weekly, setWeekly] = useState();
  // weekly mession state
  // const [feature, setFeature] = useState();
  // game menu data
  const [gameData, setGameData] = useState([]);
  // dark mode
  const [theme, setTheme] = useState("light");
  //현 시간
  // const nowTime = moment().format("HH:mm:ss");

  // tournament 데이터 종합
  const dataBook = {
    allitems: gameData,
    continue: contiInfo,
    weekly: datas,
    live: liveInfo,
    feature: featureInfo,
    type: pickMenu,
    footer: footerInfo,
  };
  console.log("dataBook");
  console.log(dataBook);

  //전체 데이터
  const tournamentData = { ...dataBook };

  //하단 게임메뉴 state
  // const [allItem, setAllItem] = useState(true);
  const [gameType, setGameType] = useState({});

  //하단 게임메뉴 slide
  const titleSettings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: widthStatus < 360 ? 4 : 5,
    // slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    useCss: true,
  };

  // ContinueSlide && MissionSlide
  const typeData = [
    {
      id: 1,
      title: "Continue Playing",
      route: "Completed",
      direction: "/completed",
      // slide: (
      //   <ContinueSlide conti={conti} size={widthStatus} />
      // ),
    },

    // {
    //   id: 2,
    //   title: "Weekly Mission",
    //   route: "See All",
    //   direction: "/allrank",
    //   slide: (
    //     <MissionSlide weekly={weekly} size={widthStatus} />
    //   ),
    //   complete: 5,
    // },
  ];

  // comma function
  function AddComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ",");
  }

  // dark mode trigger
  const themeToggler = () => {
    theme === "light"
      ? setTheme("dark")
      : setTheme("light");
  };

  // auto resize handler
  const handleResize = useCallback((event) => {
    setWidthStatus(window.innerWidth);
    // setHeightStatus(window.innerHeight);
  }, []);

  // resize useEffect
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // useEffect(() => {
  //   const meta = document.createElement("meta");
  //   meta.name = "viewport";
  //   meta.content =
  //     "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover";
  //   document
  //     .getElementsByTagName("head")[0]
  //     .appendChild(meta);
  // }, []);

  // bottom menu slide demo data & (ContinueSlide && MissionSlide) data
  useEffect(() => {
    const aa = [];
    for (var i = 0; i < 100; i++) {
      const count = Math.floor(Math.random() * 10000);
      const num = AddComma(
        Math.floor(Math.random() * 1000)
      );
      const choose =
        dataBook.type[
          Math.floor(Math.random() * 100) %
            dataBook.type.length
        ];

      const people = AddComma(
        Math.floor(Math.random() * 1000)
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
    setWeekly(datas);
    setConti(contiInfo);
    setLive(liveInfo);
    // setFeature(featureInfo);
  }, [dataBook.type]);

  return (
    <>
      <ThemeProvider
        theme={theme === "light" ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        <StyledApp>
          <div className="main-container">
            <div className="main-wrapper">
              <SignPopup />
              <header>
                <NaviBar
                  onClick={() => themeToggler()}
                  theme={theme}
                />
              </header>

              {/* <SideOpac /> */}

              {/* 연습용  ToggleComponent 기능*/}
              {/* <ToggleComponent /> */}
              {/* LiveSlide */}
              <div className="main-live-wrapper">
                <LiveSlide live={live} size={widthStatus} />
              </div>

              {/* Weekly Mission & Continue Playing */}
              {typeData !== undefined && (
                <>
                  {typeData.map((info, index) => (
                    <div
                      className="slide-contianer"
                      style={{
                        backgroundColor:
                          info.id === 2
                            ? "var(--primay-2-01)"
                            : info.id === 1 && "#f1f1f5",
                        padding: "21px 0 21px 0",
                      }}
                      key={index}
                    >
                      <div className="slide-wrapper">
                        <div className="slide-space">
                          <div className="slide-title-wrapper">
                            {/* Continue Playing */}
                            <span
                              className="slide-title"
                              style={{
                                color:
                                  info.id === 2 && "#fff",
                              }}
                            >
                              {info.title}
                            </span>
                            {/* option */}
                            <a href={info.direction}>
                              <span
                                className="slide-route"
                                style={{
                                  color:
                                    info.id === 2 && "#fff",
                                }}
                              >
                                {info.route}
                              </span>
                            </a>
                          </div>
                          {info.id === 2 && (
                            <>
                              <div
                                style={{
                                  backgroundColor: "#fff",
                                  border:
                                    "solid 1px #e6e8ec",
                                  borderRadius: 10,
                                  padding:
                                    "0 15.4px 16px 15.4px",
                                  marginTop: 17,
                                }}
                              >
                                <div className="weekly-textwrapper">
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <p className="weekly-towin">
                                      You Won
                                    </p>
                                    <span className="pp-wrapper">
                                      <p className="pp-text">
                                        PP
                                      </p>
                                    </span>
                                    <div className="weekly-game-status">
                                      2,000
                                    </div>
                                  </div>
                                  <span
                                    style={{
                                      fontSize: 12,
                                      fontWeight: "bold",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent:
                                        "center",
                                      padding: "4px 16px",
                                      borderRadius: 12,
                                      color: "#fff",
                                      backgroundImage:
                                        "linear-gradient(103deg, var(--primay-2-01) -11%, #92b2ff 122%, var(--primay-2-02) 122%)",
                                    }}
                                  >
                                    0/30
                                  </span>
                                </div>
                                <div className="weekly-progress-layout">
                                  <Progress done="70" />
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        {/* 사이드 블러 효과 */}
                        {/* <div
                          style={{
                            position: "absolute",
                            height: "100%",
                            right: -5,
                            zIndex: 10,
                          }}
                        >
                          <div className="main-sideblur" />
                        </div> */}
                        {info.id === 1 && (
                          <>
                            <div
                              style={{
                                width:
                                  widthStatus < 360
                                    ? 410
                                    : 750,
                                overflow: "hidden",
                                paddingLeft: 11,
                              }}
                            >
                              <ContinueSlide
                                conti={conti}
                                size={widthStatus}
                              />
                            </div>
                          </>
                        )}
                        {info.id === 2 && (
                          <>
                            <div
                              style={{
                                width:
                                  widthStatus < 360
                                    ? 500
                                    : 750,
                                overflow: "hidden",
                                paddingLeft: 11,
                              }}
                            >
                              <MissionSlide
                                weekly={weekly}
                                size={widthStatus}
                              />
                            </div>
                            <p className="weekly-daycount">
                              <span
                                style={{
                                  color: "#fff",
                                  fontSize: 16,
                                  fontWeight: 600,
                                }}
                              >
                                {info.complete} days
                              </span>
                              <span
                                style={{
                                  color: "#fff",
                                  opacity: 0.7,
                                  fontSize: 16,
                                }}
                              >
                                left to complet
                              </span>
                            </p>
                          </>
                        )}
                        {/* <div className="slide-area"> */}
                        {/* </div> */}
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
                    // height: 500,
                  }}
                >
                  <div
                    style={{
                      padding: "0 6px 0 16px",
                    }}
                  >
                    <p className="featured-title">
                      Featured Tournaments
                    </p>
                    {tournamentData.feature !==
                      undefined && (
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                          }}
                        >
                          {tournamentData.feature.map(
                            (data) => (
                              <>
                                {data.type === 1 && (
                                  <>
                                    <div
                                      style={{
                                        position:
                                          "relative",
                                        margin:
                                          "11px 10px 0 0 ",
                                        height: "100%",
                                      }}
                                    >
                                      <img
                                        className="featured-img"
                                        src={data.img}
                                        alt={data.img}
                                      />
                                      <div
                                        style={{
                                          position:
                                            "absolute",
                                          display: "block",
                                          zIndex: 2,
                                          top: 0,
                                          right: 0,
                                          width: "97%",
                                          margin:
                                            "14px 0 0 10px ",
                                          color: "#fff",
                                        }}
                                      >
                                        {/* <div
                                          className="content-time-wrapper"
                                          style={{
                                            justifyContent:
                                              "flex-start",
                                          }}
                                        > */}
                                        {/* time  */}
                                        <div className="content-time-text">
                                          <img
                                            src={
                                              time_layout
                                            }
                                            alt=""
                                            style={{
                                              position:
                                                "absolute",
                                              width: 85,
                                              height: 24,
                                              objectFit:
                                                "contain",
                                              borderRadius: 6,
                                              backdropFilter:
                                                "blur(3.2px)",
                                              backgroundColor:
                                                "rgba(255, 255, 255, 0.4)",
                                            }}
                                          />
                                          <span
                                            style={{
                                              zIndex: 1,
                                            }}
                                          >
                                            time info
                                          </span>
                                        </div>
                                        {/* </div> */}
                                      </div>
                                      <div
                                        style={{
                                          position:
                                            "absolute",
                                          zIndex: 2,
                                          width: "89%",
                                          bottom: 0,
                                          textAlign: "left",
                                          // display: "flex",
                                          // alignItems:
                                          //   "center",
                                          // justifyContent:
                                          //   "space-between",
                                          padding:
                                            "33.6px 5.5% 13.4px",
                                          color:
                                            "rgb(255, 255, 255)",
                                          borderRadius:
                                            "0 0 10px 10px",
                                          backgroundImage:
                                            "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) 32%, #000 93%)",
                                        }}
                                      >
                                        <div
                                          style={{
                                            display: "flex",
                                            justifyContent:
                                              "flex-start",
                                          }}
                                        >
                                          <span>Win</span>
                                          <img
                                            src={Point_logo}
                                            alt=""
                                            style={{
                                              width: 19,
                                              height: 19,
                                              objectFit:
                                                "cover",
                                              margin:
                                                "0 2px",
                                            }}
                                          />
                                          <span
                                            style={{
                                              fontSize: 16,
                                              fontWeight: 500,
                                            }}
                                          >
                                            {AddComma(
                                              123456
                                            )}
                                          </span>
                                        </div>
                                        <div
                                          style={{
                                            height: 27,
                                            fontSize: 14,
                                            display: "flex",
                                            alignItems:
                                              "center",
                                            color: "#fff",
                                          }}
                                        >
                                          <img
                                            style={{
                                              width: 19,
                                              height: 19,
                                              objectFit:
                                                "contain",
                                              color: "#fff",
                                            }}
                                            src={Man_img}
                                            alt=""
                                          />
                                          <span
                                            style={{
                                              marginRight: 5,
                                            }}
                                          >
                                            8.1M
                                          </span>
                                          <img
                                            src={Notice}
                                            alt=""
                                            style={{
                                              cursor:
                                                "pointer",
                                              width: 21,
                                              height: 21,
                                              objectFit:
                                                "contain",
                                            }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )}
                              </>
                            )
                          )}
                        </div>
                      </>
                    )}
                  </div>
                  {/* feature 작은항목 */}
                  <div className="featured-samllarea">
                    {tournamentData.feature.map((data) => (
                      <>
                        {data.type === 2 && (
                          <>
                            <div className="featured-samll-wrapper">
                              <img
                                style={{}}
                                className="featured-samll-img"
                                src={data.img}
                                alt={data.img}
                              />
                              <div
                                style={{
                                  position: "absolute",
                                  display: "block",
                                  zIndex: 2,
                                  top: 0,
                                  left: 0,
                                  margin: "14px 0 0 10px ",
                                  color: "#fff",
                                }}
                              >
                                <div className="content-time-text">
                                  <img
                                    src={time_layout}
                                    alt=""
                                    style={{
                                      position: "absolute",
                                      width: 85,
                                      height: 24,
                                      objectFit: "contain",
                                      borderRadius: 6,
                                      backdropFilter:
                                        "blur(3.2px)",
                                      backgroundColor:
                                        "rgba(255, 255, 255, 0.4)",
                                    }}
                                  />
                                  <span
                                    style={{
                                      zIndex: 1,
                                    }}
                                  >
                                    time info
                                  </span>
                                </div>
                              </div>

                              <div
                                style={{
                                  position: "absolute",
                                  fontSize: 14,
                                  textAlign: "left",
                                  color: "#fff",
                                  zIndex: 3,
                                  padding: "0 16px 11.5px",
                                  borderRadius: 10,
                                  width: 125,
                                  backgroundImage:
                                    "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6) 32%, #000 93%)",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent:
                                      "flex-start",
                                  }}
                                >
                                  <span>Win</span>
                                  <img
                                    src={Point_logo}
                                    alt=""
                                    style={{
                                      width: 19,
                                      height: 19,
                                      objectFit: "cover",
                                      margin: "0 2px",
                                    }}
                                  />
                                  <span
                                    style={{
                                      fontSize: 16,
                                      fontWeight: 500,
                                    }}
                                  >
                                    {AddComma(123456)}
                                  </span>
                                </div>
                                <div
                                  style={{
                                    height: 27,
                                    fontSize: 14,
                                    display: "flex",
                                    alignItems: "center",
                                    color: "#fff",
                                  }}
                                >
                                  <img
                                    style={{
                                      width: 19,
                                      height: 19,
                                      objectFit: "contain",
                                      color: "#fff",
                                    }}
                                    src={Man_img}
                                    alt=""
                                  />
                                  <span
                                    style={{
                                      marginRight: 5,
                                    }}
                                  >
                                    8.1M
                                  </span>
                                  <img
                                    src={Notice}
                                    alt=""
                                    style={{
                                      cursor: "pointer",
                                      width: 21,
                                      height: 21,
                                      objectFit: "contain",
                                      color: "#fff",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </>
                    ))}
                    <div className="gameitems-overtext">
                      View All Games
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 219,
                  marginTop: 21,
                  backgroundColor: "#f1f1f5",
                }}
              />
              {/* Slide menu */}
              {/* <div className="menu-container">
                <div
                  style={{
                    width: widthStatus < 360 ? 700 : 800,
                    overflow: "hidden",
                    paddingLeft: 11,
                  }}
                >
                  <Slider {...titleSettings}>
                    {tournamentData.type.map((info) => (
                      <>
                        <div
                          style={{
                            textAlign: "center",
                          }}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setGameType(info)
                            }
                            className="menu-selector"
                            style={{
                              color:
                                gameType === info
                                  ? "var(--primay-2-01)"
                                  : "var(--neutral-3)",
                              padding: "0px ​10px",
                              textTransform: "capitalize",
                            }}
                          >
                            {info}
                          </button>
                          {gameType === info ? (
                            <div
                              style={{
                                position: "relative",
                                width: "100%",
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  width: 5,
                                  height: 5,
                                  borderRadius: 50,
                                  backgroundColor:
                                    "var(--primay-2-01)",
                                  marginTop: 4,
                                }}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </>
                    ))}
                  </Slider>
                </div>
              </div> */}
              {/* <div className="gameitems-container">
                <div className="gameitems-wrapper">
                  <GameItem
                    menuData={gameData}
                    gameType={gameType}
                    limitNum={true}
                  />
                </div>
              </div> */}
              <footer>
                {tournamentData.footer !== undefined && (
                  <>
                    {tournamentData.footer.map((info) => (
                      <>
                        <span className="footer-ppimg-layout">
                          <p className="footer-ppimg-text">
                            PP
                          </p>
                        </span>
                        <div className="footer-game-point">
                          {AddComma(info.point)}
                        </div>
                        <div className="footer-game-name">
                          {info.user}
                        </div>
                      </>
                    ))}
                  </>
                )}
              </footer>
            </div>
          </div>
        </StyledApp>
      </ThemeProvider>
    </>
  );
};

export default Main;
