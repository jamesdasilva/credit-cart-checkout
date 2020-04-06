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
    this.validate = this.validate.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
  }
	updateValue(e) {
    const { separator = '', charSet } = this.props;
    const length = this.props.length || 50;
    const newState = { };
    if(e.target.value.length <= length && 
      new RegExp(this.charSet[charSet]).test(e.target.value)) {
      if((e.target.value.length > this.state.value.length) && 
          this.isPosition(e.target.value.length)) {
        newState['value'] = e.target.value + separator;
        newState['isValid'] = true;
      } else {
        newState['value'] = e.target.value;
        newState['isValid'] = true;
      }
    } else {
      newState['value'] = this.state.value;
      newState['isValid'] = this.state.isValid;
    }
    this.setState(newState);
    newState['name'] = this.props.name;
    this.props.update(newState);
  }
  isPosition(length) {
    return  this.props.positions && this.props.positions.filter(item => item == length).length > 0;
  }
  validate(value) {
    if(!this.props.length){
      if(value.length > 0){
        return true;
      } else {
        return false;
      }  
    } else {
      if(value.length == this.props.length) {
        return true;
      } else {
        return false;
      }
    }
  }
  onBlurHandler(e){
    const newState = { };
    newState['value'] = e.target.value;
    newState['isValid'] = this.validate(e.target.value);
    this.setState(newState);
  }
	render() {
		return (
      <div className="pay-input">
        <label className={this.state.value ? "pay-input__label pay-input__label--visible" : "pay-input__label"}>
          {this.props.label}
        </label>
        <input 
          type="text"
          className={!this.state.isValid === false ? "pay-input__input" : " pay-input__input pay-input__input--invalid"}
          value={this.state.value}
          onChange={this.updateValue}
          onBlur={this.onBlurHandler}
          placeholder={this.props.label}></input>
        <div className={this.state.isValid === false ? "pay-input__alert pay-input__alert--visible" : "pay-input__alert"}>
          {this.props.invalidMsg}
          </div>
      </div>
		);
	}
}

export default PayFormInput;
