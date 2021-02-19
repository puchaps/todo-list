/* eslint-disable no-alert */
/* eslint-disable no-else-return */
export const addedItemToTodoList = (currentTodoListItem, textValue) => {
  if (currentTodoListItem.length < 9) {
    return [
      ...currentTodoListItem,
      { text: textValue, completed: false, id: Date.now() },
    ];
  } else {
    alert("You are can't add more 10 items");
    return currentTodoListItem;
  }
};

export const deleteItemFromTodoList = (currentTodoListItem, deleteItemId) =>
  currentTodoListItem.filter((item) => item.id !== deleteItemId);

export const changeChosenItem = (currentTodoListItem, chosenItemId) =>
  currentTodoListItem.map((item) => {
    if (item.id === chosenItemId) {
      return {
        ...item,
        completed: !item.completed,
      };
    }

    return item;
  });

export const showItemsBySelectValue = (currentTodoListItem, selectValue) => {
  switch (selectValue) {
    case "completed":
      return currentTodoListItem.filter((item) => item.completed === true);
    case "uncompleted":
      return currentTodoListItem.filter((item) => item.completed === false);
    default:
      return currentTodoListItem;
  }
};
