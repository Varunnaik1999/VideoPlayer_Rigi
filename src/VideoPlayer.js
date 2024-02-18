import React from "react";
import "./App.css";
const VideoPlayer = (props) => {
  const { videoUrl } = props;

  return (
    <div>
      <video
        controls
        className="customVideo"
        src={videoUrl}
        autoPlay={true}
      ></video>
    </div>
  );
};

export default VideoPlayer;
