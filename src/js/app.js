import React, { Component } from "react";
import './app.scss';
import PayCreditCard from "./components/pay-credit-card/pay-credit-card";

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
