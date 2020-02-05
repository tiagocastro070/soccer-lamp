import React from 'react';
import Loader from './Components/Loader/Loader';
import Menu from './Components/Menu/Menu';
import Top from './Components/Top/Top';
import Body from './Components/Body/Body';
import Logo from './Components/Menu/Logo/Logo';
import './App.css';
import './styles/buttons.scss';
import './styles/card.scss';
import './styles/animations.scss';

function App() {
  return (
    <>
      <Loader />
      <div className="App">
        <div className="App__menu">
          <Logo />
          <Menu />
        </div>
        <div className="App__top">
          <Top />
        </div>
        <div className="App__body">
          <Body />
        </div>
        <div className="App__footer"></div>
      </div>
    </>
  );
}

export default App;
