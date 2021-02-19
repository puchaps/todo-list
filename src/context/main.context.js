import React, { useCallback, useEffect, useReducer } from "react";

import { AUTH } from "../firebase/firebase.utils";
import {
  getUserAuthFailedAC,
  getUserAuthSuccessAC,
  setDataFromLocalStorageAC,
} from "./actions/main.actions";

import mainReducer from "./reducer/main.reducer";

export const MainContext = React.createContext();

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, {
    inputValue: "",
    todoListItems: [],
    selectValue: "all",
    sortItemsBySelectValue: [],
    currentUser: null,
    error: null,
  });

  const { todoListItems } = state;

  const handleGetUserAuth = useCallback(() => {
    try {
      AUTH.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          dispatch(
            getUserAuthSuccessAC({
              displayName: userAuth.displayName,
              email: userAuth.email,
              id: userAuth.uid,
            })
          );
        } else {
          dispatch(getUserAuthSuccessAC(null));
        }
      });
    } catch (error) {
      dispatch(getUserAuthFailedAC(error.message));
    }
  }, []);

  const setDataInLocalStorage = useCallback(() => {
    if (localStorage.getItem("todoList") === null) {
      localStorage.setItem("todoList", JSON.stringify([]));
    } else {
      const response = localStorage.getItem("todoList", JSON.stringify());

      dispatch(setDataFromLocalStorageAC(JSON.parse(response)));
    }
  }, []);

  const fixChangesDataInLocalStorage = useCallback(() => {
    localStorage.setItem("todoList", JSON.stringify(todoListItems));
  }, [todoListItems]);

  useEffect(() => {
    handleGetUserAuth();
    setDataInLocalStorage();
  }, [handleGetUserAuth, setDataInLocalStorage]);

  useEffect(() => {
    fixChangesDataInLocalStorage();
  }, [fixChangesDataInLocalStorage]);
  return (
    <MainContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
