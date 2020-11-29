import React from 'react';

import '../../css/Main.css';

import Logo from '../../img/logo/homework.svg';

const HeaderComponent = () => {
  return(
    <header>
      <div className = 'main-header'>
        <a href = '#'><img className = 'main-logo' src = {Logo} alt = 'logo'/></a>
        <button className = 'main-btn'>LOGIN</button>
      </div>
    </header>
  )
};

export default HeaderComponent;