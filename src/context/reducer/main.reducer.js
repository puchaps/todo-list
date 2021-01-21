import {
  ADD_ITEM_TO_TODO_LIST, CHANGE_CHOOSED_ITEM,
  CHANGE_INPUT_VALUE, CLEAR_INPUT_VALUE,
  DELETE_ITEM_FROM_TODO_LIST, GET_ITEMS_BY_SELECT,
  GET_USER_AUTH,
  SET_DATA_FROM_LOCAL_STORAGE, SET_SELECT_VALUE, SIGN_OUT_FROM_ACCOUNT
} from "../types/main.types";

import {
  changeChoosedItem, addedItemToTodoList, deleteItemFromTodoList, showItesBySelectValue
} from "../utils/main.utils";

const mainReducer = (state, action) => {
  switch(action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload
      };
    case CLEAR_INPUT_VALUE:
      return {
        ...state,
        inputValue: ''
      };
    case SET_SELECT_VALUE:
      return {
        ...state,
        selectValue: action.payload
      };
    case ADD_ITEM_TO_TODO_LIST:
      return {
        ...state,
        todoListItems: addedItemToTodoList(state.todoListItems, state.inputValue)
      };
    case DELETE_ITEM_FROM_TODO_LIST:
      return {
        ...state,
        todoListItems: deleteItemFromTodoList(state.todoListItems, action.payload)
      };
    case CHANGE_CHOOSED_ITEM:
      return {
        ...state,
        todoListItems: changeChoosedItem(state.todoListItems, action.payload)
      };
    case GET_ITEMS_BY_SELECT:
      return {
        ...state,
        sortItemsBySelectValue: showItesBySelectValue(state.todoListItems, state.selectValue)
      }
    case SET_DATA_FROM_LOCAL_STORAGE:
      return {
        ...state,
        todoListItems: action.payload
      };
    case GET_USER_AUTH:
      return {
        ...state,
        currentUser: action.payload
      };
    case SIGN_OUT_FROM_ACCOUNT:
      return {
        ...state,
        currentUser: null
      }
    default:
      return state
  };
};

export default mainReducer;