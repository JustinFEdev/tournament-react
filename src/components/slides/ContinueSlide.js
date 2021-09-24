import React from "react";
import "../navigation/navi.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AddComma } from "../Main";

const ContinueSlide = ({ conti, size }) => {
  // console.log("넘어온 size");
  // console.log(size);
  // const trophy = "../resource/icons/group.png";

  const contiSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: size < 361 ? 3 : 6,
    // slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    pauseOnHover: true,
    useCSS: true,
    // vertical: false,
    // responsive: [
    //   {
    //     breakpoint: 630, //화면 사이즈 401
    //     settings: {
    //       slidesToShow: 5,
    //     },
    //   },
    //   {
    //     breakpoint: 550, //화면 사이즈 401
    //     settings: {
    //       slidesToShow: 4,
    //     },
    //   },
    //   {
    //     breakpoint: 430, //화면 사이즈 500
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    // ],
  };

  return (
    <>
      {conti !== undefined && (
        <>
          <Slider {...contiSettings}>
            {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%",
              overflowX: "scroll",
              overflowY: "hidden",
            }}
          > */}
            {/* <div
              className="slick-list"
              style={{ display: "flex" }}
            > */}
            {conti.map((info, index) => (
              <>
                <div
                  className="continue-container"
                  key={index}
                >
                  {/* <div className="continue-imgarea"> */}
                  <div
                    style={{
                      position: "relative",
                      width: 122,
                      height: 141,
                    }}
                  >
                    <div className="content-time-wrapper">
                      <div className="content-time-text">
                        <span className="content-time-overlay" />
                        <p className="content-time">
                          Time :{info.time}
                        </p>
                      </div>
                    </div>

                    <img
                      className="content-img"
                      src={info.img}
                      alt={info.img}
                    />
                  </div>
                  <div className="content-text-wrapper">
                    <div className="content-playagin">
                      <p>Play Again to</p>
                      <img
                        src="../resource/icons/group.png"
                        alt=""
                      />
                    </div>
                    <div className="content-wininfo">
                      <p>Win</p>
                      <span className="pp-wrapper">
                        <p className="pp-text">PP</p>
                      </span>
                      <p
                        style={{
                          fontSize: 16,
                          fontWeight: 500,
                          color: "#1b202a",
                        }}
                      >
                        {AddComma(info.point)}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
            {/* </div> */}
            {/* </div> */}
          </Slider>
        </>
      )}
    </>
  );
};

export default ContinueSlide;
