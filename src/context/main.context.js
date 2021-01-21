import React, { useEffect, useReducer } from "react";
import { AUTH } from "../firebase/firebase.utils";
import { getUserAuthAC } from "./actions/main.actions";

import { 
  fixChangesDataInLocalStorage,
  setDataInLocalStorageOrGeted
} from "./local-storage/local-storage.utils";

import mainReducer from "./reducer/main.reducer";

export const MainContext = React.createContext();

const MainProvider = ({children}) => {
  const[state, dispatch] = useReducer(mainReducer, {
    inputValue: '',
    todoListItems: [],
    selectValue: 'all',
    sortItemsBySelectValue: [],
    currentUser: null
  });

  const getUserAuth = () => {
    try {
      AUTH.onAuthStateChanged( async (userAuth) => {
        if (userAuth) {
          dispatch(getUserAuthAC({
            displayName: userAuth.displayName,
            email: userAuth.email,
            id: userAuth.uid
            }
          ));
        } else {
          dispatch(getUserAuthAC(null));
        };
      });
    } catch(error) {
      console.log(error.massege);
    }
  };

  useEffect(() => {
    setDataInLocalStorageOrGeted({dispatch, todoListItems: state.todoListItems});
    getUserAuth();
  }, []);

  useEffect(() => {
    fixChangesDataInLocalStorage(state.todoListItems);
  }, [state.todoListItems])

  return(
    <MainContext.Provider value = {{
      state,
      dispatch
    }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;

// const[inputValue, setInputValue] = useState('');
//   const[allTodoList, setAllTodoList] = useState([]);
//   const[selectValue, setSelectValue] = useState('all')
//   const[filterTodoItem, setFilterTodoItem] = useState([]);

//   const handleShowTodoList = () => {
//     switch(selectValue) {
//       case 'completed':
//         setFilterTodoItem(allTodoList.filter(item => item.completed === true));
//         break;
//       case 'uncompleted':
//         setFilterTodoItem(allTodoList.filter(item => item.completed === false));
//         break;
//       default:
//         setFilterTodoItem(allTodoList);
//         break;
//     }
//   };

//   const saveDataLocalInStore = () => {
//     if(localStorage.getItem("todoList") === null) {
//       localStorage.setItem("todoList", JSON.stringify([]));
//     } else {
//       const dataLocalStorage = localStorage.getItem("todoList", JSON.stringify(allTodoList));

//       setAllTodoList(JSON.parse(dataLocalStorage));
//     }

//     return;
//   }

//   const saveChangesInLocalStore = () => {
//     localStorage.setItem("todoList", JSON.stringify(allTodoList));
//   }

//   useEffect(() => {
//     saveDataLocalInStore();
//   }, []);

//   useEffect(() => {
//     handleShowTodoList();
//     saveChangesInLocalStore();
//   }, [allTodoList, selectValue]);