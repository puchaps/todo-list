import React, { useContext, useEffect } from "react";
import { MainContext } from "../../context/main.context";

import "./content-preview.styles.scss";

import { getItemsBySelectAC } from "../../context/actions/main.actions";

import FormAdded from "../form-added/form-added.components";
import AddedItems from "../added-items/added-items.component";

const ContentPreview = () => {
  const {
    state: { selectValue, todoListItems },
    dispatch,
  } = useContext(MainContext);

  useEffect(() => {
    dispatch(getItemsBySelectAC());
  }, [selectValue, todoListItems, dispatch]);

  return (
    <div className="content-preview">
      <h1 className="content-preview-title">Enter your first item</h1>
      <FormAdded />
      <AddedItems />
    </div>
  );
};

export default ContentPreview;
