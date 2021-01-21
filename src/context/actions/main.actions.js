import {
  ADD_ITEM_TO_TODO_LIST, CHANGE_CHOOSED_ITEM, CHANGE_INPUT_VALUE,
  CLEAR_INPUT_VALUE, DELETE_ITEM_FROM_TODO_LIST,
  GET_ITEMS_BY_SELECT, GET_USER_AUTH, SET_DATA_FROM_LOCAL_STORAGE,
  SET_SELECT_VALUE,
  SIGN_OUT_FROM_ACCOUNT
} from "../types/main.types";

//////////////////--INPUT-VALUE--//////////////////
export const changeInputValueAC = (value) => ({
  type: CHANGE_INPUT_VALUE,
  payload: value
});
export const clearInputValueAC = () => ({
  type: CLEAR_INPUT_VALUE
});
//////////////////--INPUT-VALUE--//////////////////


//////////////////--SELECT-VALUE--//////////////////
export const setSelectValueAC = (value) => ({
  type: SET_SELECT_VALUE,
  payload: value
});
//////////////////--SELECT-VALUE--//////////////////


//////////////////--TOTO-LIST--//////////////////
export const addItemToTodoListAC = () => ({
  type: ADD_ITEM_TO_TODO_LIST
});
export const deleteItemFromTodoListAC = (deleteItem) => ({
  type: DELETE_ITEM_FROM_TODO_LIST,
  payload: deleteItem
});
export const changeChoosedItemAC = (choosedItem) => ({
  type: CHANGE_CHOOSED_ITEM,
  payload: choosedItem
});
//////////////////--TOTO-LIST--//////////////////


//////////////////--TOTO-LIST-BY-SLECT--//////////////////
export const getItemsBySelectAC = () => ({
  type: GET_ITEMS_BY_SELECT
});
//////////////////--TOTO-LIST-BY-SLECT--//////////////////


//////////////////--LOCAL-STORAGE--//////////////////
export const setDataFromLocalStorageAC = (data) => ({
  type: SET_DATA_FROM_LOCAL_STORAGE,
  payload: data
});
//////////////////--LOCAL-STORAGE--//////////////////


//////////////////--USER-AUTH--//////////////////

export const getUserAuthAC = (userAuth) => ({
  type: GET_USER_AUTH,
  payload: userAuth
});
export const signOutFromAcoountAC = () => ({
  type: SIGN_OUT_FROM_ACCOUNT
});
//////////////////--USER-AUTH--//////////////////


