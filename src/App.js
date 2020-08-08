import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {TermAndConditionContainer} from './containers/TermAndConditionContainer';
import {HeaderContainer} from './containers/HeaderContainer';
import {ProvidedServicesContainer} from "./containers/ProvidedServicesContainer";

function App() {
  return (
    <div className="Container">
      <TermAndConditionContainer />
      <HeaderContainer />
      <ProvidedServicesContainer/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
