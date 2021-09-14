import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { isBrowser, isMobile } from "react-device-detect";

const MissionSlide = ({ weekly, size }) => {
  // console.log("weekly로 넘어온 size");
  // console.log(size);
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: size < 501 ? 2 : 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
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
                  style={{
                    width: 220,
                    position: "relative",
                    margin: "0 0 15px 0",
                  }}
                  key={index}
                >
                  <img
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 217,
                      borderRadius: "16px",
                      backgroundColor: "#9bc8d7",
                      border: "none",
                    }}
                    src={info.img}
                    alt=""
                  />
                  <div
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
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </>
      )}
    </>
  );
};

export default MissionSlide;
