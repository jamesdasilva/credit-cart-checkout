import React, { Component } from "react";
import './app.scss';
import PayCreditCard from "./credit-card-checkout/_credit-card-checkout/credit-card-checkout";

class App extends Component {
  constructor() {
    super(); 
  }

  render() {
    return (
      <div className="app">
        <div className="app__header">App Title</div>
        <div className="app__body">
          <PayCreditCard></PayCreditCard>
        </div>
      </div>
    );
  }
}

export default App;
