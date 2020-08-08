import React from 'react';
import './App.scss';
import {TermAndConditionContainer} from './containers/TermAndConditionContainer';
import {HeaderContainer} from './containers/HeaderContainer';
import {ProvidedServicesContainer} from './containers/ProvidedServicesContainer';
import {FooterContainer} from "./containers/FooterContainer";
import {NewsletterContainer} from './containers/NewsletterContainer'

function App() {
  const greetName = 'Sherly Febrianti';

  return (
    <div className="Container">
      <TermAndConditionContainer />
      <HeaderContainer greetName={greetName} />
      <ProvidedServicesContainer/>
      <FooterContainer greetName={greetName}/>
      <NewsletterContainer />
    </div>
  );
}

export default App;
