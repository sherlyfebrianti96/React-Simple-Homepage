import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {TermAndConditionContainer} from './containers/TermAndConditionContainer';
import {HeaderContainer} from './containers/HeaderContainer';
import {ProvidedServicesContainer} from "./containers/ProvidedServicesContainer";
import {FooterContainer} from "./containers/FooterContainer";

function App() {
  const greetName = 'Sherly Febrianti';

  return (
    <div className="Container">
      <TermAndConditionContainer />
      <HeaderContainer greetName={greetName} />
      <ProvidedServicesContainer/>
      <FooterContainer greetName={greetName}/>
    </div>
  );
}

export default App;
