/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, onTypeBtn = "", ...otherProps }) => (
  <div className="custom-button">
    <button
      {...otherProps}
      className={`custom-button-btn ${onTypeBtn}`}
      type="button"
    >
      {children}
    </button>
  </div>
);

export default CustomButton;
