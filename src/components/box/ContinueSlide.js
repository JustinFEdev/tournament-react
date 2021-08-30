import React from "react";
import "../navigation/navi.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContinueSlide = ({ conti }) => {
  const contiSettings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
    // useCSS: true,
  };

  return (
    <>
      {conti !== undefined && (
        <>
          <Slider {...contiSettings}>
            {conti.map((info, index) => (
              <>
                <div
                  style={{
                    width: 220,
                    position: "relative",
                    border: "none",
                  }}
                  key={index}
                >
                  <img
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 217,
                      borderRadius: "16px 16px 0 0 ",
                      backgroundColor: "#9bc8d7",
                      border: "none",
                    }}
                    alt={info.img}
                  />
                  <div
                    style={{
                      height: 44,
                      borderRadius: " 0 0 16px 16px",
                      backgroundColor: "#09607b",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 23,
                        fontWeight: 500,
                        color: "#88d9f3",
                      }}
                    >
                      Time :{info.time}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "AppleSDGothicNeo",
                      textAlign: "left",
                      padding: "20px 0 0 0",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 30,
                        fontWeight: 500,
                        color: "#85b8c8",
                      }}
                    >
                      Play Again
                    </div>
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

export default ContinueSlide;
