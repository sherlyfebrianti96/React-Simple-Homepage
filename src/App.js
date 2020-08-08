import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {TermAndConditionContainer} from './containers/TermAndConditionContainer';
import {HeaderContainer} from './containers/HeaderContainer';
import {ProvidedServicesContainer} from "./containers/ProvidedServicesContainer";
import {FooterContainer} from "./containers/FooterContainer";

function App() {
  return (
    <div className="Container">
      <TermAndConditionContainer />
      <HeaderContainer />
      <ProvidedServicesContainer/>
      <FooterContainer/>
    </div>
  );
}

export default App;
