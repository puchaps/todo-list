import { useContext } from 'react';
import { MainContext } from '../../context/main.context';

import './header.styles.scss';

import Logo from '../../img/logo/homework.svg';

import { AUTH, signInWithHelpGoogleAcount } from '../../firebase/firebase.utils';
import { signOutFromAcoountAC } from '../../context/actions/main.actions';

import CustomButton from '../custom-button/custom-button.component';

const Header = () => {
  const{state: {currentUser}, dispatch} = useContext(MainContext);

  return(
    <div className = 'header'>
      <div className = 'header-logo'>
        <a href = '#'>
          <img src = {Logo} alt = 'logo'/>
        </a>
      </div>
      <div className="header-btn">
        {
          currentUser ? (
            <CustomButton typeBtn = 'logout' onClick = {() => {
              AUTH.signOut();
              dispatch(signOutFromAcoountAC());
            }}>
              LOGOUT
            </CustomButton>
          ) : (
            <CustomButton typeBtn = 'login' onClick = {signInWithHelpGoogleAcount}>
              LOGIN
            </CustomButton>
          )
        }
      </div>
    </div>
  )
};

export default Header;