import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../layout.scss";
import { AddComma } from "../Main";
// slide icon
// import trophy from "../resource/icon/group@2x.png";
// import { isBrowser, isMobile } from "react-device-detect";

const MissionSlide = ({ weekly, size }) => {
  // console.log("weekly로 넘어온 size");
  // console.log(size);
  const trophy = "../resource/icons/group@2x.png";

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: size < 361 ? 2 : 3,
    // slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    pauseOnHover: true,
    // responsive: [
    //   {
    //     breakpoint: 501, //화면 사이즈 501
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 360, //화면 사이즈 360
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    // ],
  };

  // useEffect(() => {
  // const ban = Math.round(window.innerWidth * 0.0045);
  // console.log("ban");
  // console.log(ban);
  // setFf(ban);
  // }, [ff]);

  return (
    <>
      {weekly !== undefined && (
        <>
          <Slider {...settings}>
            {weekly.map((info, index) => (
              <>
                <div
                  className="content-weekly-layout"
                  key={index}
                >
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <div
                      className="content-time-wrapper"
                      style={{
                        justifyContent: "flex-start",
                      }}
                    >
                      <div
                        className="content-time-text"
                        style={{ marginLeft: 7 }}
                      >
                        <span className="content-time-overlay" />
                        <p className="content-time">
                          Time :{info.time}
                        </p>
                      </div>
                    </div>

                    <img
                      className="content-weekly-img"
                      src={info.img}
                      alt={info.img}
                    />
                  </div>
                  {/* <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <div className="content-time-wrapper">
                      <div className="content-time-text">
                        <p>Time :{info.time}</p>
                      </div>
                    </div>

                    <img
                      className="content-weekly-img"
                      src={info.img}
                      alt=""
                    />
                  </div> */}
                  <div className="content-text-wrapper">
                    <div className="content-playagin">
                      <p>Play Again to</p>
                      <img src={trophy} alt="11" />
                    </div>
                    <div className="content-wininfo">
                      <span>Win</span>
                      <span className="pp-wrapper">
                        <div className="pp-text">PP</div>
                      </span>
                      <span
                        style={{
                          fontSize: 16,
                          fontWeight: 500,
                          color: "#1b202a",
                        }}
                      >
                        {AddComma(info.point)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* <div
                    style={{
                      fontFamily: "AppleSDGothicNeo",
                      textAlign: "left",
                      padding: "20px 0 0 0",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 32,
                        fontWeight: "bold",
                        color: "#09607b",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span>To Win</span>
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
                        <div
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
                        </div>
                      </span>
                      <span>{info.point}</span>
                    </div>
                    <div
                      style={{
                        fontSize: 30,
                        fontWeight: 500,
                        color: "#85b8c8",
                      }}
                    >
                      Target {info.target}
                    </div>
                    <div
                      style={{
                        fontSize: 30,
                        color: "#85b8c8",
                      }}
                    >
                      START NOW
                    </div>
                  </div> */}
              </>
            ))}
          </Slider>
        </>
      )}
    </>
  );
};

export default MissionSlide;
