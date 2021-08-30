import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MissionSlide = ({ weekly }) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // centerPadding: "0 0 30px 0",
    centerMode: false,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
    // useCSS: true,
  };

  return (
    <>
      {weekly !== undefined && (
        <>
          <Slider {...settings}>
            {weekly.map((info) => (
              <>
                <div
                  style={{
                    width: 220,
                    position: "relative",
                    margin: "0 0 15px 0",
                  }}
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
                    <p
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
                      <span>{info.point}</span>
                    </p>
                    <p
                      style={{
                        fontSize: 30,
                        fontWeight: 500,
                        color: "#85b8c8",
                      }}
                    >
                      Target {info.target}
                    </p>
                    <p
                      style={{
                        fontSize: 30,
                        color: "#85b8c8",
                      }}
                    >
                      START NOW
                    </p>
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
