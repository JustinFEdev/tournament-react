import React, { useState, useEffect } from "react";
import ContinueSlide from "./box/ContinueSlide";
import LiveSlide from "./box/LiveSlide";
import MissionSlide from "./box/MissionSlide";
import GameItem from "./box/GameItem";
import NaviBar from "./navigation/NaviBar";
import "./layout.css";
import Modal from "./modal/Modal";
import bulso from "./resource/video/bulso.mp4";

const Progress = ({ done }) => {
  const [style, setStyle] = useState({});
  const [data, setData] = useState();

  // setTimeout(() => {
  //   const newStyle = {
  //     opacity: 1,
  //     width: `${done}`,
  //   };
  //   setStyle(newStyle);
  // }, 1000);

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
  const [show, setShow] = useState(false);
  const [gameData, setGameData] = useState([]);
  const [weekly, setWeekly] = useState();
  const [conti, setConti] = useState();
  const [live, setLive] = useState();
  // ContinueSlide && MissionSlide
  const typeData = [
    {
      id: 1,
      title: "Continue Playing",
      route: "/option",
      slide: <ContinueSlide conti={conti} />,
    },
    {
      id: 2,
      title: "Weekly Mission",
      route: "/See All",
      slide: <MissionSlide weekly={weekly} />,
    },
  ];

  //comma function
  function AddComma(num) {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ",");
  }

  // modal close function
  const closeHandle = (event) => {
    event.preventDefault();
    setShow(false);
    console.log("close modal");
  };

  // modal open function
  const openHandle = () => {
    setShow(!show);
    console.log("open modal");
  };

  // bottom menu slide demo data & (ContinueSlide && MissionSlide) data
  useEffect(() => {
    const aa = [];
    for (var i = 0; i < 10; i++) {
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

  console.log("weekly");
  console.log(weekly);
  console.log("conti");
  console.log(conti);
  console.log("live");
  console.log(live);
  //weekly mission data
  // useEffect(() => {
  //   console.log("weekly mission data ");
  // }, []);

  // 모달 show 제한시간 3초
  // useEffect(() => {
  //   if (show) {
  //     const notice = setTimeout(() => {
  //       setShow(false);
  //     }, 3000);ㅁ
  //     return () => clearTimeout(notice);
  //   }
  // }, [show]);

  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          <header>
            <NaviBar />
          </header>
          <Progress done="70" />
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "lightgray",
              borderRadius: 20,
              padding: 15,
              border: "none",
              color: "#fff",
              fontSize: 20,
              fontWeight: "border",
              width: "50%",
            }}
            onClick={openHandle}
          >
            test modal
          </div>
          <div
            style={{
              // position: "absolute",
              width: "100%",
              height: 350,
              left: 0,
              zIndex: 0,
              opacity: 0.3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <video
              autoPlay
              loop
              muted
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src={bulso} type="video/mp4" />
            </video> */}
            <div className="scene">
              <div className="cube">
                <div className="cube__face cube__face--front">
                  front
                </div>
                <div className="cube__face cube__face--back">
                  back
                </div>
                <div className="cube__face cube__face--right">
                  right
                </div>
                <div className="cube__face cube__face--left">
                  left
                </div>
                <div className="cube__face cube__face--top">
                  top
                </div>
                <div className="cube__face cube__face--bottom">
                  bottom
                </div>
              </div>
            </div>
          </div>
          {/* LiveSlide */}
          <div className="main-live-wrapper">
            <LiveSlide live={live} />
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
                      <span className="slide-title">
                        {info.title}
                      </span>
                      {/* option */}
                      <span className="slide-route">
                        {info.route}
                      </span>
                    </div>
                    {info.id === 2 && (
                      <>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <h3
                            style={{
                              fontSize: 32,
                              fontWeight: "bold",
                              color: "#09607b",
                              margin: "12px 0",
                            }}
                          >
                            You Won
                          </h3>
                          <span
                            style={{
                              width: 34,
                              height: 34,
                              border: "solid 1.5px #149231",
                              backgroundColor: "#38ae53",
                              margin: " 0 10px",
                              color: "#fff",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 25,
                            }}
                          >
                            <p
                              style={{
                                margin: "auto",
                                fontSize: 22,
                                fontWeight: 800,
                                display: "flex",
                                height: "88%",
                                alignItems: "flex-end",
                              }}
                            >
                              PP
                            </p>
                          </span>
                          <div
                            style={{
                              fontSize: 32,
                              fontWeight: "bold",
                              color: "#09607b",
                            }}
                          >
                            0/20
                          </div>
                        </div>
                        <div
                          style={{
                            height: 12,
                            backgroundColor: "#d8d8d8",
                          }}
                        />
                      </>
                    )}
                  </div>
                  <div className="slide-area">
                    {info.slide}
                  </div>
                  {/* {info.id === 2 && (
                    <h2 className="weekly-daycount">
                      {weekly.length} days left to complet
                    </h2>
                  )} */}
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
                // onClick={}
              >
                View All Games
              </div>
            </>
          )}
        </div>
        {show === true && (
          <>
            <div>
              <Modal show={show} closeModal={closeHandle} />
              {/* <div
                style={{
                  position: "absolute",
                  zIndex: 101,
                  width: 80,
                  height: 50,
                  border: "1px solid",
                  top: 0,
                  right: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={closeHandle}
              >
                close
              </div> */}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Main;
