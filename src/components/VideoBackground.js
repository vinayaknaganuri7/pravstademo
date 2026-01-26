import React from "react";
import "./VideoBackground.css";
import videoSrc from "../video.mp4"; // Place your video in src/

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="video-overlay">
        <h1>Welcome to My Company</h1>
        <p>Innovating for the future</p>
      </div>
    </div>
  );
};

export default VideoBackground;
