import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import IconAccessibility from "~icons/carbon/accessibility";
import IconAccountBox from "~icons/mdi/account-box";

const Test = () => {
  return (
    <>
      <p>Saalam</p>
      <FontAwesomeIcon icon={faEnvelope} />
      <i className="fa fa-car"></i>

      <IconAccessibility />
      <IconAccountBox style={{ fontSize: "2em", color: "red" }} />
    </>
  );
};

export default Test;
