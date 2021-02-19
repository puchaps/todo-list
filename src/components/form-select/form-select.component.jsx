/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import "./form-select.styles.scss";

const FormSelect = ({ ...otherProps }) => (
  <div className="form-select">
    <select {...otherProps}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
    </select>
  </div>
);

export default FormSelect;
