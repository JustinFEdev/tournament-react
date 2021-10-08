import React from "react";
import Loader from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Loader
        type="Oval"
        color="#00BFFF"
        height={40}
        width={40}
      />
    </div>
  );
};

export default LoaderSpinner;
