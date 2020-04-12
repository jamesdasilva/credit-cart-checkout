import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import PayFormSelect from './pay-form-input-select'

let _mock;

beforeEach(() => {
  _mock = {
    name: "installments",
    label: "Número de parcelas",
    invalidMsg: "Insira o número de parcelas",
    update: jest.fn()
  };
});

afterEach(() => { });

describe('<PayFormSelect /> spec', () => {
  test('Snapshot test', () => {
    const { getByTestId } = render(
      <PayFormSelect
        name={_mock.invalidMsg}
        label={_mock.label}
        invalidMsg={_mock.invalidMsg}
        update={_mock.update} />);

    expect(getByTestId('pay-select')).toMatchSnapshot();
  })
  test('Deve chamar update passando o novo valor quando houver alteração', () => {
    const _paramCall = { 
      name: _mock.name, 
      value: '1', 
      isValid: true 
    };
    const { getByTestId } = render(
      <PayFormSelect
        name={_mock.name}
        label={_mock.label}
        invalidMsg={_mock.invalidMsg}
        update={_mock.update} />);

    fireEvent.change(getByTestId('input-select'), { target: { value: "1" } });
    expect(_mock.update.mock.calls[0][0]).toEqual(_paramCall);
  })

  test('Deve retornar { ...p, isValid: true } quando o valor for igual a 0', () => {
    const _paramCall = { 
      name: _mock.name, 
      value: '0', 
      isValid: false 
    };
    const { getByTestId } = render(
      <PayFormSelect
        name={_mock.name}
        label={_mock.label}
        invalidMsg={_mock.invalidMsg}
        update={_mock.update} />);

    fireEvent.change(getByTestId('input-select'), { target: { value: "0" } });
    expect(_mock.update.mock.calls[0][0]).toEqual(_paramCall);
  })

  test('Deve retornar { ...p, isValid: true } quando o valor for diferente de 0', () => {
    const _paramCall = { 
      name: _mock.name, 
      value: '3', 
      isValid: true 
    };
    const { getByTestId } = render(
      <PayFormSelect
        name={_mock.name}
        label={_mock.label}
        invalidMsg={_mock.invalidMsg}
        update={_mock.update} />);

    fireEvent.change(getByTestId('input-select'), { target: { value: "3" } });
    expect(_mock.update.mock.calls[0][0]).toEqual(_paramCall);
  })
})