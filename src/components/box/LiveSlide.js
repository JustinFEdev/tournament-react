import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LiveSlide = ({ live }) => {
  const liveSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    centerMode: true,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
    useCSS: true,
  };
  return (
    <>
      {live !== undefined && (
        <>
          <Slider {...liveSettings}>
            {live.map((info, index) => (
              <div
                style={{
                  position: "relative",
                  display: "block",
                  width: 620,
                  margin: "0 15px",
                }}
                key={index}
              >
                <div
                  style={{
                    position: "absolute",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: 68,
                      border: "1px solid",
                      borderRadius: 3.8,
                      backgroundColor: "#09607b",
                      fontSize: 19,
                      fontWeight: 500,
                      padding: "10px 14px 12px",
                      color: "#88d9f3",
                    }}
                  >
                    {info.live}
                  </div>
                  <div
                    style={{
                      width: 183,
                      border: "1px solid",
                      borderRadius: 3.8,
                      backgroundColor: "#09607b",
                      fontSize: 19,
                      fontWeight: 500,
                      padding: "10px 14px 12px",
                      color: "#88d9f3",
                      marginTop: 190,
                    }}
                  >
                    {info.time}
                  </div>
                </div>
                <div
                  style={{
                    height: 316,
                    width: "100%",
                    borderRadius: "16px 16px 0 0 ",
                    border: "solid 2.5px #86b1be",
                    borderBottom: "none",
                    backgroundColor: "#c9e2ea",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <img src={info.img} alt={info.img} />
                </div>
                <div
                  style={{
                    width: "100%",
                    height: 157,
                    border: "solid 2.5px #86b1be",
                    borderRadius: "0 0 16px 16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow:
                      "0 13px 13px 0 rgb(77 93 107 / 13%)",
                  }}
                >
                  <div
                    style={{
                      width: "60%",
                      textAlign: "left",
                      paddingLeft: 25,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 38,
                        fontWeight: 500,
                        color: "#09607b",
                      }}
                    >
                      {/* Bit Miner */}
                      {info.title}
                    </span>
                    <br />
                    <span>icon</span>
                    <span>{info.number}</span>
                    <span>watch</span>
                  </div>
                  <div
                    style={{
                      width: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 32,
                        fontWeight: "bold",
                        color: "#09607b",
                      }}
                    >
                      WIN
                    </span>
                    <span
                      style={{
                        width: 34,
                        height: 34,
                        border: "solid 1.5px #149231",
                        backgroundColor: "#38ae53",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 25,
                      }}
                    >
                      <p
                        style={{
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
                    <span
                      style={{
                        fontSize: 32,
                        fontWeight: "bold",
                        color: "#09607b",
                      }}
                    >
                      {info.point}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </>
      )}
    </>
  );
};

export default LiveSlide;
