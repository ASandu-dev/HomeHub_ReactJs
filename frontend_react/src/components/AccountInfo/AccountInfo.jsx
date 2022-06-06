import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHardDrive,
  faCircleQuestion,
  faEnvelope,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import ProgressBar from 'react-bootstrap/ProgressBar';

import "./AccountInfo.scss";

const AccountInfo = () => {
  return (
    <>
      <div className="icons-wrap">
        <FontAwesomeIcon icon={faCircleQuestion} className="icons" />
        <FontAwesomeIcon icon={faEnvelope} className="icons" />
        <FontAwesomeIcon icon={faBell} className="icons" />
      </div>
      <div className="userMenu">
        <h1>Username</h1>
      </div>
    </>
  );
};

export default AccountInfo;
