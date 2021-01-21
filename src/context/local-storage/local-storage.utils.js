import { setDataFromLocalStorageAC } from "../actions/main.actions";

export const setDataInLocalStorageOrGeted = ({dispatch, todoListItems}) => {
  if(localStorage.getItem("todoList") === null) {
    localStorage.setItem("todoList", JSON.stringify([]));
  } else {
    const response = localStorage.getItem("todoList", JSON.stringify(todoListItems));

    dispatch(setDataFromLocalStorageAC(JSON.parse(response)));
  }
}

export const fixChangesDataInLocalStorage = (todoListItems) => {
  localStorage.setItem("todoList", JSON.stringify(todoListItems));
};