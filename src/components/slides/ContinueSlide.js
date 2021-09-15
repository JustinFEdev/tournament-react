import React from "react";
import "../navigation/navi.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContinueSlide = ({ conti, size }) => {
  // console.log("넘어온 size");
  // console.log(size);
  const contiSettings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    // slidesToShow: size < 501 ? 2 : 3,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    pauseOnHover: true,
    useCSS: true,
    vertical: false,
    responsive: [
      // {
      //   breakpoint: 620, //화면 사이즈 501
      //   settings: {
      //     slidesToShow: 4,
      //   },
      // },
      {
        breakpoint: 401, //화면 사이즈 501
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 400, //화면 사이즈 500
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      {conti !== undefined && (
        <>
          <Slider {...contiSettings}>
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
                    <div className="continue-time-wrapper">
                      <div className="continue-time-text">
                        Time :{info.time}
                      </div>
                    </div>

                    <img
                      className="continue-img"
                      alt={info.img}
                    />
                  </div>
                  <div className="content-text-wrapper">
                    <div className="content-playagin">
                      <p>Play Again</p>
                      <span>icon</span>
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
                        {info.point}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            ))}
            {/* </div> */}
          </Slider>
        </>
      )}
    </>
  );
};

export default ContinueSlide;
