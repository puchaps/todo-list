import React, { useCallback, useContext } from "react";
import { MainContext } from "../../context/main.context";

import "./header.styles.scss";

import {
  AUTH,
  signInWithHelpGoogleAccount,
} from "../../firebase/firebase.utils";

import { signOutFromAccountAC } from "../../context/actions/main.actions";

import CustomButton from "../custom-button/custom-button.component";

const Header = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useContext(MainContext);

  const handleSignOut = useCallback(() => {
    AUTH.signOut();
    dispatch(signOutFromAccountAC());
  }, [dispatch]);

  return (
    <div className="header">
      <div className="header-logo">
        <img
          src="https://cdn4.iconfinder.com/data/icons/business-and-finance-colorful-free-hand-drawn-set/102/check-512.png"
          alt="logo"
        />
      </div>
      <div className="header-btn">
        {currentUser ? (
          <CustomButton onTypeBtn="logout" onClick={handleSignOut}>
            LOGOUT
          </CustomButton>
        ) : (
          <CustomButton onTypeBtn="login" onClick={signInWithHelpGoogleAccount}>
            LOGIN
          </CustomButton>
        )}
      </div>
    </div>
  );
};

export default Header;
