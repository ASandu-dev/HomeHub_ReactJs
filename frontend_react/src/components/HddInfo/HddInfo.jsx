import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardDrive } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "react-bootstrap/ProgressBar";


const HddInfo = () => {
 
    
  const now = 45;

  return (
    <>
      <FontAwesomeIcon icon={faHardDrive} className="icons" />
      <ProgressBar
        animated
        now={now}
        label={`${now}%`}
        className="progress-bar"
      />
    </>
  );
};

export default HddInfo;
