/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import { MainContext } from "../../context/main.context";

import "./added-items.styles.scss";

import AddedItem from "../added-item/added-item.component";

const AddedItems = () => {
  const {
    state: { sortItemsBySelectValue },
  } = useContext(MainContext);

  return (
    <div className="added-items">
      {sortItemsBySelectValue.map((item) => (
        <AddedItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default AddedItems;
