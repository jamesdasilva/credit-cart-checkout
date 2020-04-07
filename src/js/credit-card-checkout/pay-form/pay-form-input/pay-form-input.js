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
      name: this.props.name,
      value: '',
      isValid: true,
      hover: false,
      focus: false
		};
    this.updateValue = this.updateValue.bind(this);
    this.isPosition = this.isPosition.bind(this);
    this.validate = this.validate.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
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
    newState['isValid'] = this.validate(e.target.value);
    newState['hover'] = this.state.hover;
    newState['focus'] = this.state.focus;
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
      if(value.length >= this.props.length) {
        return true;
      } else {
        return false;
      }
    }
  }
  onFocusHandler() {
    const newState = { ...this.state, focus: true };
    this.setState(newState);
    this.props.update(newState);
  }
  onBlurHandler(e){
    const newState = { ...this.state, focus: false };
    this.setState(newState);
    this.props.update(newState);
  }
  onMouseEnterHandler() {
    const newState = { ...this.state, hover: true };
    this.setState(newState);
    this.props.update(newState);
  }
  onMouseLeaveHandler() {
    const newState = { ...this.state, hover: false };
    this.setState(newState);
    this.props.update(newState);
  }
	render() {
		return (
      <div className="pay-input" data-testid={this.props.name}>
        <label className={this.state.value ? "pay-input__label pay-input__label--visible" : "pay-input__label"}>
          {this.props.label}
        </label>
        <input 
          type="text"
          className={!this.state.isValid === false ? "pay-input__input" : " pay-input__input pay-input__input--invalid"}
          value={this.state.value}
          onChange={this.updateValue}
          onFocus={this.onFocusHandler}
          onBlur={this.onBlurHandler}
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}
          placeholder={this.props.label}></input>
        <div className={this.state.isValid === false ? "pay-input__alert pay-input__alert--visible" : "pay-input__alert"}>
          {this.props.invalidMsg}
          </div>
      </div>
		);
	}
}

export default PayFormInput;
