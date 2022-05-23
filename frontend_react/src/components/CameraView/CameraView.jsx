import React from "react";
import CardHeaders from "../CardHeaders/CardHeaders";

import "./CameraView.scss";

const CameraView = () => {
  const cardTitle = "Camera"
  return (
    <div className="cameraCard">
      <div className="header">
        <CardHeaders title="Camera"/>
      </div>
      <div className="content">
        <div className="embed-responsive embed-responsive-16by9 cameraView ">
          <iframe
            title="cameraView"
            className="embed-responsive-item cameraSize"
            src="https://play.webcamromania.ro/b3p4l5g5v534s213y2"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CameraView;
