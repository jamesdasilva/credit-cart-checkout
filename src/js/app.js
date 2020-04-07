import React, { Component } from "react";
import './app.scss';
import PayCreditCard from "./credit-card-checkout/_credit-card-checkout/credit-card-checkout";
import storeLogo from '../../assets/Group 2290.svg';

class App extends Component {
  constructor() {
    super(); 
  }

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <div className="app__content">
            <img src={storeLogo} />
          </div>
        </div>
        <div className="app__body">
          <div className="app__content">
            <PayCreditCard></PayCreditCard>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
