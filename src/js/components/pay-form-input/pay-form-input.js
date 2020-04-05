import React, { Component } from 'react';
import './pay-form-input.scss';

class PayFormInput extends Component {
	constructor(props) {
    super(props);
    this.charSet = {
      digits: "^[\\d /]*$",
      alphanumeric: "^[0-9a-zA-Z ]*$",
      alpha: "^[a-zA-Z \\.]*$",
      all: '^.*$'
    }
		this.state = {
      value: '',
      isValid: true
		};
    this.updateValue = this.updateValue.bind(this);
    this.isPosition = this.isPosition.bind(this);
  }
  isPosition(length) {
    return  this.props.positions && this.props.positions.filter(item => item == length).length > 0;
  }
	updateValue(e) {
    const { length, separator = '', charSet } = this.props;
    if(e.target.value.length <= length && 
      new RegExp(this.charSet[charSet]).test(e.target.value)) {
      if((e.target.value.length > this.state.value.length) && 
          this.isPosition(e.target.value.length)) {
        this.setState({ value: e.target.value + separator });
      } else {
        this.setState({ value: e.target.value });
      }
    }
  }
  
	render() {
    //console.log(/^.{4} [0-9]{4} [0-9]{4} [0-9]{4}$/.test(this.state.value));
		return (
      <input 
        type="text"
        className="pay-form-input"
        value={this.state.value}
        onChange={this.updateValue}
        placeholder={this.props.label}></input>
		);
	}
}

export default PayFormInput;
