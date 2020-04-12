import React, { useState } from 'react';
import './pay-form-input-select.scss';

const PayFormSelect = (props) => {
  
  const [state, setState] = useState({
    value: '0',
    isValid: true
  });
  
  const validate = (value) => {
    if(value > 0) {
      return true;
    } else {
      return false;
    }  
  };

	const updateValue = (e) => {
    setState({ 
      value: e.target.value,
      isValid: validate(e.target.value)
    });
    props.update({
      name: props.name,
      value: e.target.value,
      isValid: validate(e.target.value)
    });
  };

  return (
    <div className="pay-select" data-testid='pay-select'>
      <label className={state.value != "0" ? "pay-select__label pay-select__label--visible" : "pay-select__label"}>
        {props.label}
      </label>
      <div className={state.value != "0" ? "pay-select__container" : "pay-select__container pay-select__container--empty"}>
        <select 
          data-testid={"input-select"}
          id={props.name}
          className={state.isValid ? "pay-select__select" : "pay-select__select pay-select__select--invalid"}
          value={state.value}
          onChange={updateValue}
          onBlur={validate}
          placeholder={props.label}>
          <option value="0">{props.label}</option>
          <option value="1">1X</option>
          <option value="3">3X</option>
          <option value="5">5X</option>
          <option value="10">10X</option>
        </select>
      </div>
      <div className={!state.isValid ? "pay-select__alert" : "pay-select__alert pay-select__alert--invisible"}>
        {props.invalidMsg}
        </div>
    </div>
  );
}

export default PayFormSelect;
