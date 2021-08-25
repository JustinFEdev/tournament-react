import React, { useState, useEffect } from "react";
import ContinueSlide from "./box/ContinueSlide";
import LiveSlide from "./box/LiveSlide";
import MissionSlide from "./box/MissionSlide";
import GameItem from "./box/GameItem";
import NaviBar from "./navigation/NaviBar";
import "./layout.css";

const Main = () => {
  const [gameData, setGameData] = useState([]);
  const typeData = [
    {
      id: 1,
      title: "Continue Playing",
      route: "option",
      slide: <ContinueSlide />,
    },
    {
      id: 2,
      title: "Weekly Mission",
      route: "See All",
      slide: <MissionSlide />,
    },
  ];

  function AddComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ",");
  }

  // const renNumber = AddComma(Math.floor(Math.random() * 100000));
  // const renPoint = AddComma(Math.floor(Math.random() * 10000000));
  // console.log(renNumber);
  // console.log(gameData);

  useEffect(() => {
    for (var i = 0; i < 5; i++) {
      const count = Math.floor(Math.random() * 10000);
      const num = AddComma(Math.floor(Math.random() * 10000000));
      const people = AddComma(Math.floor(Math.random() * 100000));
      const menuDatas = {
        img: count,
        point: num,
        user: people,
      };

      setGameData(menuDatas);
      console.log(menuDatas);
      // gameData.forEach((info) => console.log(info));
    }
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
            <LiveSlide />
          </div>
          {/* Continue Playing */}
          {/* Weekly Mission */}
          {typeData.map((info) => (
            <>
              <div className="slide-contianer">
                <div className="slide-wrapper">
                  <div className="slide-space">
                    <div className="slide-title-wrapper">
                      {/* Continue Playing */}
                      <span className="slide-title">{info.title}</span>
                      {/* option */}
                      <span className="slide-route">{info.route}</span>
                    </div>
                  </div>
                  <div className="slide-area">{info.slide}</div>
                  {info.id === 2 && (
                    <h2 className="weekly-daycount">6 days left to complet</h2>
                  )}
                </div>
              </div>
            </>
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
                <p className="featured-title">Featured Tournaments</p>
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
                    <div className="featured-samll-img" alt="1" />
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
              style={{ backgroundColor: "#9bd0e1", color: "#fff" }}
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
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              {/* <GameItem menuData={gameData} /> */}
            </div>
          </div>
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
            View All Games
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
