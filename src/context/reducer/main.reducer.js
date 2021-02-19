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

import {
  changeChosenItem,
  addedItemToTodoList,
  deleteItemFromTodoList,
  showItemsBySelectValue,
} from "../utils/main.utils";

const mainReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    case CLEAR_INPUT_VALUE:
      return {
        ...state,
        inputValue: "",
      };
    case SET_SELECT_VALUE:
      return {
        ...state,
        selectValue: action.payload,
      };
    case ADD_ITEM_TO_TODO_LIST:
      return {
        ...state,
        todoListItems: addedItemToTodoList(
          state.todoListItems,
          state.inputValue
        ),
      };
    case DELETE_ITEM_FROM_TODO_LIST:
      return {
        ...state,
        todoListItems: deleteItemFromTodoList(
          state.todoListItems,
          action.payload
        ),
      };
    case CHANGE_CHOSEN_ITEM:
      return {
        ...state,
        todoListItems: changeChosenItem(state.todoListItems, action.payload),
      };
    case GET_ITEMS_BY_SELECT:
      return {
        ...state,
        sortItemsBySelectValue: showItemsBySelectValue(
          state.todoListItems,
          state.selectValue
        ),
      };
    case SET_DATA_FROM_LOCAL_STORAGE:
      return {
        ...state,
        todoListItems: action.payload,
      };
    case GET_USER_AUTH_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case GET_USER_AUTH_FAILED:
      return {
        ...state,
        currentUser: null,
        error: action.payload
      }
    case SIGN_OUT_FROM_ACCOUNT:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default mainReducer;
