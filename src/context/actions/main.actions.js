import {
  ADD_ITEM_TO_TODO_LIST, CHANGE_CHOOSED_ITEM, CHANGE_INPUT_VALUE,
  CLEAR_INPUT_VALUE, CLEAR_USER_AUTH, DELETE_ITEM_FROM_TODO_LIST,
  GET_ITEMS_BY_SELECT, GET_USER_AUTH, SET_DATA_FROM_LOCAL_STORAGE,
  SET_SELECT_VALUE,
  SIGN_OUT_FROM_ACCOUNT
} from "../types/main.types";

export const changeInputValueAC = (value) => ({
  type: CHANGE_INPUT_VALUE,
  payload: value
});

export const addItemToTodoListAC = () => ({
  type: ADD_ITEM_TO_TODO_LIST
});

export const clearInputValueAC = () => ({
  type: CLEAR_INPUT_VALUE
});

export const setSelectValueAC = (value) => ({
  type: SET_SELECT_VALUE,
  payload: value
});

export const deleteItemFromTodoListAC = (deleteItem) => ({
  type: DELETE_ITEM_FROM_TODO_LIST,
  payload: deleteItem
});

export const changeChoosedItemAC = (choosedItem) => ({
  type: CHANGE_CHOOSED_ITEM,
  payload: choosedItem
});

export const getItemsBySelectAC = () => ({
  type: GET_ITEMS_BY_SELECT
});

export const setDataFromLocalStorageAC = (data) => ({
  type: SET_DATA_FROM_LOCAL_STORAGE,
  payload: data
});

export const getUserAuthAC = (userAuth) => ({
  type: GET_USER_AUTH,
  payload: userAuth
});

export const signOutFromAcoountAC = () => ({
  type: SIGN_OUT_FROM_ACCOUNT
});


