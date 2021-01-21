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

  const{todoListItems} = state;

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
    setDataInLocalStorageOrGeted({dispatch, todoListItems: todoListItems});
    getUserAuth();
  }, []);

  useEffect(() => {
    fixChangesDataInLocalStorage(todoListItems);
  }, [todoListItems]);

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