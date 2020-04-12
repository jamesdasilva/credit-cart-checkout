import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import PayFormSelect from './pay-form-input-select'

describe('<PayFormSelect /> spec', () => {
  test('Snapshot test', () => {
    const _mock = {
      name: "installments",
      label: "Número de parcelas",
      invalidMsg: "Insira o número de parcelas",
      update: jest.fn()
    }
    const { getByTestId } = render(
      <PayFormSelect
        name={_mock.invalidMsg}
        label={_mock.label}
        invalidMsg={_mock.invalidMsg}
        update={_mock.update} />
      )

    const payFormSelect = getByTestId('pay-select')
    expect(payFormSelect).toMatchSnapshot()
  })
  test('Deve chamar update passando o novo valor quando houver alteração', () => {
    const _mock = {
      name: "installments",
      label: "Número de parcelas",
      invalidMsg: "Insira o número de parcelas",
      update: jest.fn()
    }
    const _paramCall = { 
      name: _mock.name, 
      value: '1', 
      isValid: true 
    }
    const { getByTestId } = render(
      <PayFormSelect
        name={_mock.name}
        label={_mock.label}
        invalidMsg={_mock.invalidMsg}
        update={_mock.update} />
      )

    const inputSelect = getByTestId('input-select')
    fireEvent.change(inputSelect, { target: { value: "1" } });
    expect(_mock.update.mock.calls[0][0]).toEqual(_paramCall)
  })

  test('Deve retornar { ...p, isValid: true } quando o valor for igual a 0', () => {
    const _mock = {
      name: "installments",
      label: "Número de parcelas",
      invalidMsg: "Insira o número de parcelas",
      update: jest.fn()
    }
    const _paramCall = { 
      name: _mock.name, 
      value: '0', 
      isValid: false 
    }
    const { getByTestId } = render(
      <PayFormSelect
        name={_mock.name}
        label={_mock.label}
        invalidMsg={_mock.invalidMsg}
        update={_mock.update} />
      )

    const inputSelect = getByTestId('input-select')
    fireEvent.change(inputSelect, { target: { value: "0" } });
    expect(_mock.update.mock.calls[0][0]).toEqual(_paramCall)
  })

  test('Deve retornar { ...p, isValid: true } quando o valor for diferente de 0', () => {
    const _mock = {
      name: "installments",
      label: "Número de parcelas",
      invalidMsg: "Insira o número de parcelas",
      update: jest.fn()
    }
    const _paramCall = { 
      name: _mock.name, 
      value: '3', 
      isValid: true 
    }
    const { getByTestId } = render(
      <PayFormSelect
        name={_mock.name}
        label={_mock.label}
        invalidMsg={_mock.invalidMsg}
        update={_mock.update} />
      )

    const inputSelect = getByTestId('input-select')
    fireEvent.change(inputSelect, { target: { value: "3" } });
    expect(_mock.update.mock.calls[0][0]).toEqual(_paramCall)
  })
})