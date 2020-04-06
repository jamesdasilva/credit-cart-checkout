import React, { Component } from 'react';
import './pay-form-input-select.scss';

class PayFormSelect extends Component {
	constructor(props) {
    super(props);
		this.state = {
      value: '',
      isValid: true
		};
    this.updateValue = this.updateValue.bind(this);
    this.validate = this.validate.bind(this);
  }
	updateValue(e) {
    this.setState({ 
      value: e.target.value,
      isValid: this.validate(e.target.value)
    });
    this.props.update({
      name: this.props.name,
      value: e.target.value,
      isValid: this.validate(e.target.value)
    });
  }
  validate(value) {
    if(value > 0) {
      return true;
    } else {
      return false;
    }  
  }
	render() {
		return (
      <div className="pay-select">
        <label className={this.state.value ? "pay-select__label pay-select__label--visible" : "pay-select__label"}>
          {this.props.label}
        </label>
        <select 
          className="pay-select__select"
          className={this.state.isValid ? "pay-select__select" : " pay-select__select pay-select__select--invalid"}
					value={this.state.value}
					onChange={this.updateValue}
          onBlur={this.validate}
          placeholder={this.props.label}>
					<option value="0">{this.props.label}</option>
					<option value="1">1X</option>
					<option value="3">3X</option>
					<option value="5">5X</option>
					<option value="10">10X</option>
				</select>
        <div className={!this.state.isValid ? "pay-select__alert" : "pay-select__alert pay-select__alert--invisible"}>
          {this.props.invalidMsg}
          </div>
      </div>
		);
	}
}

export default PayFormSelect;
