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

    </div>
  );
}

export default App;
