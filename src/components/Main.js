import React, { useState, useEffect } from "react";
import ContinueSlide from "./box/ContinueSlide";
import LiveSlide from "./box/LiveSlide";
import MissionSlide from "./box/MissionSlide";
import GameItem from "./box/GameItem";
import NaviBar from "./navigation/NaviBar";
import "./layout.scss";

const Progress = ({ done }) => {
  return (
    <>
      <div className="progress">
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
  const [gameData, setGameData] = useState([]);
  const [weekly, setWeekly] = useState();
  const [conti, setConti] = useState();
  const [live, setLive] = useState();

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
    for (var i = 0; i < 9; i++) {
      const count = Math.floor(Math.random() * 10000);
      const num = AddComma(
        Math.floor(Math.random() * 10000000)
      );
      const people = AddComma(
        Math.floor(Math.random() * 100000)
      );
      const menuDatas = {
        img: count,
        point: num,
        user: people,
      };
      aa.push(menuDatas);
    }
    setGameData(aa);

    //weekly mission
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

    //continue mission
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
    setWeekly(datas);
    setConti(contiInfo);
    setLive(liveInfo);
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          <header>
            <NaviBar />
          </header>
          <Progress done="70" />

          {/* LiveSlide */}
          <div className="main-live-wrapper">
            <LiveSlide live={live} />
          </div>

          {/* Weekly Mission & Continue Playing */}
          {typeData.map((info, index) => (
            <div className="slide-contianer" key={index}>
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
                        <h className="weekly-towin">
                          You Won
                        </h>
                        <span className="weekly-ppimg-layout">
                          <p className="weekly-ppimg-text">
                            PP
                          </p>
                        </span>
                        <div className="weekly-game-status">
                          0/20
                        </div>
                      </div>
                      <div className="weekly-progress-layout" />
                    </>
                  )}
                </div>
                <div className="slide-area">
                  {info.slide}
                </div>
                {/* {info.id === 2 && (
                  <h2 className="weekly-daycount">
                    {info.length !== undefined && (
                      <>
                        {weekly.length} days left to complet
                      </>
                    )}
                  </h2>
                )} */}
              </div>
            </div>
          ))}
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
                <img className="featured-img" alt="" />
                <div className="featured-infoarea">
                  <span>PP</span>
                  <div>
                    <span>num</span>
                    <span>notice</span>
                  </div>
                </div>
                {/* small img area */}
                <div className="featured-smallarea">
                  <div className="featured-samll-wrapper">
                    <div
                      className="featured-samll-img"
                      alt="1"
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <span>PP</span>
                      </div>
                      <div>
                        <span>num</span>
                        <span>notice</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide menu */}
          <div className="menu-container">
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
              padding: "0 30px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <GameItem menuData={gameData} />
            </div>
          </div>
          {gameData.length < 15 && (
            <>
              <div
                style={{
                  fontFamily: "AppleSDGothicNeo",
                  color: "#598b9b",
                  padding: "70px 0",
                  fontSize: 38,
                  fontWeight: 500,
                  cursor: "pointer",
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
