import React from "react";
import Slider from "react-slick";
// import "../navigation/navi.scss";
import "./slide.scss";
import "../layout.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Notice from "../../resource/image/icon-arrow-i@2x.png";
import Man_img from "../../resource/image/man-small@2x.png";
import Live_img from "../../resource/image/ui-icon-arrow-live@2x.png";
// import { isBrowser, isMobile } from "react-device-detect";
import { AddComma } from "../Main";

const LiveSlide = ({ live, size }) => {
  const liveSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2500,
    centerMode: false,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
  };
  return (
    <>
      {live !== undefined && (
        <>
          <div style={{ padding: "0 8px" }}>
            <Slider {...liveSettings}>
              {live.map((info, index) => (
                <div className="live-container" key={index}>
                  <div className="live-imgarea">
                    <div style={{ position: "relative" }}>
                      <div className="live-wrapper">
                        <div className="live-livestatus">
                          {info.status === "live" && (
                            <>
                              <img
                                style={{
                                  width: 24,
                                  height: 24,
                                  margin: "0 1px 0 0",
                                  objectFit: "contain",
                                }}
                                src={Live_img}
                                alt=""
                              />
                              <span
                                stylr={{
                                  fontSize: 13,
                                  color: "#fff",
                                }}
                              >
                                Live
                              </span>
                            </>
                          )}
                        </div>
                        <div className="live-timestatus">
                          {info.time}
                        </div>
                      </div>
                    </div>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: 0,
                        margin: 0,
                        objectFit: "fill",
                        borderRadius: "10px 10px 0 0 ",
                      }}
                      src={info.img}
                      alt={info.img}
                    />
                  </div>
                  <div className="live-info-wrapper">
                    <div className="live-info-titlearea">
                      <span className="live-info-title">
                        {info.title}
                      </span>
                      <div
                        style={{
                          padding: "10px 0 0 0",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            height: 27,
                            fontSize: 14,
                            display: "flex",
                            alignItems: "center",
                            color: "var(--neutral-3)",
                          }}
                        >
                          <img
                            style={{
                              width: 19,
                              height: 19,
                              objectFit: "contain",
                            }}
                            src={Man_img}
                            alt=""
                          />
                          <span style={{ marginRight: 5 }}>
                            8.1M
                          </span>
                          <img
                            src={Notice}
                            alt=""
                            style={{
                              cursor: "pointer",
                              width: 21,
                              height: 21,
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        <div className="live-liveinfo">
                          <div className="content-wininfo">
                            <span>Win</span>
                            <span className="pp-wrapper">
                              <div className="pp-text">
                                PP
                              </div>
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
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </>
      )}
    </>
  );
};

export default LiveSlide;
