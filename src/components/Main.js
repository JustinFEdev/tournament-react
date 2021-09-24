import React, {
  useState,
  useEffect,
  useCallback,
} from "react";
import ContinueSlide from "./slides/ContinueSlide";
import LiveSlide from "./slides/LiveSlide";
import MissionSlide from "./slides/MissionSlide";
// import GameItem from "./slides/GameItem";
import NaviBar from "./navigation/NaviBar";
import "./layout.scss";
import "../App.css";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import moment from "moment";

// live banner img
import live_banner_1 from "../resource/image/banner_646x328 (1).jpg";
import live_banner_2 from "../resource/image/banner_646x328 (2).jpg";
import live_banner_3 from "../resource/image/banner_646x328.jpg";
// continue banner img
import continue_img_1 from "../resource/image/banner_300x370 (1).jpg";
import continue_img_2 from "../resource/image/banner_300x370 (2).jpg";
import continue_img_3 from "../resource/image/banner_300x370.jpg";
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
//Live mission
const liveInfo = [
  {
    id: 1,
    status: "live",
    title: "Bit Miner Bit 22 Miner Game",
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
// feature;
const featureInfo = [
  {
    id: 1,
    time: 4,
    point: 2,
    user: 305,
    img: "1111",
  },
  {
    id: 2,
    time: 6,
    point: 1020,
    user: 22,
    img: "2222",
  },
  {
    id: 3,
    time: 65,
    point: 2066,
    user: 878,
    img: "3333",
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
  "newarivel",
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
  // console.log(nowTime);

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

  const tournamentData = { ...dataBook };
  console.log("tournamentData");
  console.log(tournamentData);
  //하단 게임메뉴 state
  // const [allItem, setAllItem] = useState(true);
  // const [gameType, setGameType] = useState({});
  // const [max, setMax] = useState();

  //하단 게임메뉴 slide
  // const titleSettings = {
  //   arrows: false,
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   // slidesToScroll: 1,
  //   initialSlide: 0,
  //   centerMode: false,
  //   swipe: true,
  //   swipeToSlide: true,
  //   touchMove: true,
  //   useCss: true,
  // };

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

    {
      id: 2,
      title: "Weekly Mission",
      route: "See All",
      direction: "/allrank",
      // slide: (
      //   <MissionSlide weekly={weekly} size={widthStatus} />
      // ),
      complete: 5,
    },
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
    console.log("theme 모드 설정");
    console.log(theme);
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
    // const status = [
    //   "newarivel",
    //   "shooting",
    //   "sports",
    //   "arcade",
    //   "rpg",
    //   "adventure",
    //   "puzzle",
    //   "rhythm",
    // ];

    for (var i = 0; i < 100; i++) {
      const count = Math.floor(Math.random() * 10000);
      const num = AddComma(
        Math.floor(Math.random() * 10000000)
      );
      const choose =
        dataBook.type[
          Math.floor(Math.random() * 100000) %
            dataBook.type.length
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
                              <div
                                style={{
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
                                    <span className="weekly-ppimg-layout">
                                      <p className="weekly-ppimg-text">
                                        PP
                                      </p>
                                    </span>
                                    <div className="weekly-game-status">
                                      2,000
                                    </div>
                                  </div>
                                  <span
                                    style={{
                                      // width: 61,
                                      // height: 24,
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
                        <div
                          style={{
                            position: "absolute",
                            height: "100%",
                            right: -5,
                            // top: "32%",
                            zIndex: 10,
                          }}
                        >
                          <div className="main-sideblur" />
                        </div>
                        {info.id === 1 && (
                          <>
                            <div
                              style={{
                                width:
                                  widthStatus < 361
                                    ? 410
                                    : 750,
                                overflow: "hidden",
                              }}
                            >
                              {/* {info.slide} */}
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
                                  widthStatus < 361
                                    ? 500
                                    : 750,
                                overflow: "hidden",
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
                                  color:
                                    "var(--primay-2-01)",
                                  fontSize: 16,
                                  fontWeight: 500,
                                }}
                              >
                                {info.complete} days
                              </span>{" "}
                              <span
                                style={{
                                  color: "var(--neutral-2)",
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
              {/* <div className="featured-container">
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
                    {tournamentData.feature !==
                      undefined && (
                      <>
                        {tournamentData.feature.map(
                          (data) => (
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
                          )
                        )}
                        <div className="featured-smallarea">
                          {tournamentData.feature.map(
                            (data) => (
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
                                          <div>
                                            Info icon
                                          </div>
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
                                          <div>
                                            Info icon
                                          </div>
                                        </span>
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
                </div>
              </div> */}
              {/* Slide menu */}
              {/* <div className="menu-container">
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
                </span> */}

              {/* 슬라이더안 div(잠시 주석) */}
              {/* <div>
                  <button
                    onClick={() => setAllItem(allItem)}
                    className="menu-selector"
                  >
                    All Games
                  </button>
                </div>
                <div style={{ width: "100%" }}>
                  <Slider {...titleSettings}>
                    {pickMenu.map((info) => (
                      <>
                        <div
                          style={{
                            display: "inline-flex",
                            width: "100%",
                            marginLeft: 25,
                          }}
                        >
                          {info.type === "all games" ? (
                            <>
                              <button
                                type="button"
                                onClick={() =>
                                  setGameType(info.type)
                                }
                                className="menu-selector"
                                style={{
                                  border:
                                    gameType === info.type
                                      ? "solid 2.5px #77b5c9"
                                      : "solid 2.5px #fff",
                                  color:
                                    gameType ===
                                      info.type && "#fff",
                                }}
                              >
                                {info.type}
                              </button>
                            </>
                          ) : (
                            <>
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
                                  textTransform:
                                    "capitalize",
                                }}
                              >
                                {info.type}
                              </button>
                            </>
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
              {/* {gameData.length > 15 && (
                <>
                  <div className="gameitems-overtext">
                    <a href="/allgames">View All Games</a>
                  </div>
                </>
              )} */}
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
