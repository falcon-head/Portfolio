import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./Loader.scss";

const Loader = () => {
  // Illustrations are from pixeltrue.com make sure to give them the credits
  const loader = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: loader.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./../../assets/Login BW.json"),
    });
  }, []);
  return (
    <div className="container-fluid loader-holder">
      <div className="loader" ref={loader}></div>
    </div>
  );
};

export default Loader;
