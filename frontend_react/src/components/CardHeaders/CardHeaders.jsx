import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear
} from "@fortawesome/free-solid-svg-icons";

import "./CardHeaders.scss";

const CardHeaders = (props) => {
  return (
    <div class="header">
      <h1>{props.title}</h1>
      <FontAwesomeIcon icon={faGear} className='icons' />
    </div>
  );
};

export default CardHeaders;
