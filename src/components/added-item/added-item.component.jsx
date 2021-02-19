import React, { useContext } from "react";
import { MainContext } from "../../context/main.context";

import "./added-item.styles.scss";

import {
  changeChosenItemAC,
  deleteItemFromTodoListAC,
} from "../../context/actions/main.actions";

import CustomButton from "../custom-button/custom-button.component";

const AddedItem = ({ text, id, completed }) => {
  const { dispatch } = useContext(MainContext);

  return (
    <div className={`added-item ${text ? "active" : ""}`}>
      <div className="added-item-text">{text}</div>
      <div className="added-item-btns">
        <CustomButton
          onTypeBtn={`mark ${completed ? "noted" : ""}`}
          onClick={() => dispatch(changeChosenItemAC(id))}
        >
          <span>&#10003;</span>
        </CustomButton>
        <CustomButton
          onTypeBtn="delete"
          onClick={() => dispatch(deleteItemFromTodoListAC(id))}
        >
          <span>&#10006;</span>
        </CustomButton>
      </div>
    </div>
  );
};

export default AddedItem;
