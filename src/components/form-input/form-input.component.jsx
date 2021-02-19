/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ textPlaceholder, ...otherProps }) => (
  <div className="form-input">
    <input placeholder={textPlaceholder} {...otherProps} maxLength='15'/>
  </div>
);

export default FormInput;
