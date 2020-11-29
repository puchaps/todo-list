import React from 'react';

import './css/Main.css';

import HeaderComponent from './components/header/Header.component';
import ContentComponent from './components/content/Content.component';

function App() {
  return (
    <main className = "main-app">
      <HeaderComponent/>
      <ContentComponent/>
    </main>

  );
}

export default App;
