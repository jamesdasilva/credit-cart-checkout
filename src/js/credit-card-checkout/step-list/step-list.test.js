import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import StepList from './step-list';

describe('<StepList /> spec', () => {
  test('Snapshot test', () => {
    const objectMock = { 
      steps: [
        "Carrinho",
        "Pagamento",
        "Confirmação"
      ],
      stepSelected: "Carrinho"
    }
    const { getByTestId } = render(
      <StepList
        steps={objectMock.steps}
        stepSelected={objectMock.stepSelected} />
      )

    const stepList = getByTestId('step-list')
    expect(stepList).toMatchSnapshot()
  })

  test('Deve exibir os nomes das steps nos itens da lista', () => {
    const objectMock = {
      steps: [
        "Carrinho",
        "Pagamento",
        "Confirmação"
      ],
      stepSelected: "Carrinho"
    }
    const { getByTestId } = render(
      <StepList
        steps={objectMock.steps}
        stepSelected={objectMock.stepSelected} />
      )

    const itemListCount = getByTestId('step-list').childNodes
    
    const itemTexts = [...itemListCount].map(item => {
      return item.textContent.match(/[ A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+/)[0]
    })

    expect(itemTexts).toEqual(objectMock.steps)
  })

  test('Deve não exibir check-icon nenhum quando stepSelected == steps[0]', () => {
    const objectMock = {
      steps: [
        "Carrinho",
        "Pagamento",
        "Confirmação"
      ],
      stepSelected: "Carrinho"
    }
    const { queryAllByTestId, queryByText } = render(
      <StepList
        steps={objectMock.steps}
        stepSelected={objectMock.stepSelected} />
      )

    const itemIcon = queryAllByTestId('check-icon')
    expect(itemIcon.length).toBeFalsy();

    const item1 = queryByText(/[1]+/)
    const item2 = queryByText(/[2]+/)
    const item3 = queryByText(/[3]+/)
    expect(item1).toBeTruthy();
    expect(item2).toBeTruthy();
    expect(item3).toBeTruthy();

  })

  test('Deve exibir check-icon no primeiro item quando stepSelected == steps[1]', () => {
    const objectMock = {
      steps: [
        "Carrinho",
        "Pagamento",
        "Confirmação"
      ],
      stepSelected: "Pagamento"
    }
    const { queryByTestId, queryByText } = render(
      <StepList
        steps={objectMock.steps}
        stepSelected={objectMock.stepSelected} />
      )

    const itemIcon = queryByTestId('check-icon')
    expect(itemIcon).toBeTruthy();

    const item1 = queryByText(/[1]+/)
    const item2 = queryByText(/[2]+/)
    const item3 = queryByText(/[3]+/)
    expect(item1).toBeFalsy();
    expect(item2).toBeTruthy();
    expect(item3).toBeTruthy();

  })

  test('Deve exibir check-icon nos dois primeiros itens quando stepSelected == steps[2]', () => {
    const objectMock = {
      steps: [
        "Carrinho",
        "Pagamento",
        "Confirmação"
      ],
      stepSelected: "Confirmação"
    }
    const { queryAllByTestId, queryByText } = render(
      <StepList
        steps={objectMock.steps}
        stepSelected={objectMock.stepSelected} />
      )

    const itemIcon = queryAllByTestId('check-icon')
    expect(itemIcon.length).toBe(2);

    const item1 = queryByText(/[1]+/)
    const item2 = queryByText(/[2]+/)
    const item3 = queryByText(/[3]+/)
    expect(item1).toBeFalsy();
    expect(item2).toBeFalsy();
    expect(item3).toBeTruthy();

  })
})
