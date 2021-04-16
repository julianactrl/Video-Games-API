import React from "react";
import "./styles.css";

const Loader = () => {
  return (
    <div className="loader">
        <div className="loading-text">
            <span>We are searching for the games! 🥳</span>
        </div>
        <div class="circle"></div>
    </div>
  );
};

export default Loader;
