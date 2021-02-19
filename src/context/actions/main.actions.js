/* eslint-disable spaced-comment */
import {
  ADD_ITEM_TO_TODO_LIST,
  CHANGE_CHOSEN_ITEM,
  CHANGE_INPUT_VALUE,
  CLEAR_INPUT_VALUE,
  DELETE_ITEM_FROM_TODO_LIST,
  GET_ITEMS_BY_SELECT,
  GET_USER_AUTH_FAILED,
  GET_USER_AUTH_SUCCESS,
  SET_DATA_FROM_LOCAL_STORAGE,
  SET_SELECT_VALUE,
  SIGN_OUT_FROM_ACCOUNT,
} from "../types/main.types";

//////////////////--INPUT-VALUE--//////////////////
export const changeInputValueAC = (value) => ({
  type: CHANGE_INPUT_VALUE,
  payload: value,
});
export const clearInputValueAC = () => ({
  type: CLEAR_INPUT_VALUE,
});
//////////////////--INPUT-VALUE--//////////////////

//////////////////--SELECT-VALUE--//////////////////
export const setSelectValueAC = (value) => ({
  type: SET_SELECT_VALUE,
  payload: value,
});
//////////////////--SELECT-VALUE--//////////////////

//////////////////--TOTO-LIST--//////////////////
export const addItemToTodoListAC = () => ({
  type: ADD_ITEM_TO_TODO_LIST,
});
export const deleteItemFromTodoListAC = (deleteItem) => ({
  type: DELETE_ITEM_FROM_TODO_LIST,
  payload: deleteItem,
});
export const changeChosenItemAC = (chosenItem) => ({
  type: CHANGE_CHOSEN_ITEM,
  payload: chosenItem,
});
//////////////////--TOTO-LIST--//////////////////

//////////////////--TOTO-LIST-BY-SELECT--//////////////////
export const getItemsBySelectAC = () => ({
  type: GET_ITEMS_BY_SELECT,
});
//////////////////--TOTO-LIST-BY-SELECT--//////////////////

//////////////////--LOCAL-STORAGE--//////////////////
export const setDataFromLocalStorageAC = (data) => ({
  type: SET_DATA_FROM_LOCAL_STORAGE,
  payload: data,
});
//////////////////--LOCAL-STORAGE--//////////////////

//////////////////--USER-AUTH--//////////////////

export const getUserAuthSuccessAC = (userAuth) => ({
  type: GET_USER_AUTH_SUCCESS,
  payload: userAuth,
});
export const getUserAuthFailedAC = (error) => ({
  type: GET_USER_AUTH_FAILED,
  payload: error,
});
export const signOutFromAccountAC = () => ({
  type: SIGN_OUT_FROM_ACCOUNT,
});
//////////////////--USER-AUTH--//////////////////
