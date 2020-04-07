import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './credit-card-checkout.scss';
import cartIconImg from '../../../../assets/cart-icon.svg';
import CardFigurePicker from '../card-figure-picker/_card-figure-picker/card-figure-picker';
import StepList from '../step-list/step-list';
import PayForm from '../pay-form/_pay-form/pay-form';

const StepListMobile = (steps, stepSelected) => {
  return (
    <div className="steps-list-mobile">
      <strong>Etapa {steps.findIndex(s => s == stepSelected) + 1}</strong> de {steps.length}
    </div>
  )
}

export default class PayCreditCard extends Component {
  constructor(){
    super();
    this.state ={
      client: {
        cardCode: '', 
        people: '', 
        shelfLife: ''
      },
      displayCardBack: false
    };
    this.update = this.update.bind(this);
  }
  update(e){
    const newState = {};
    const _cvv = e.find(item => item.name == 'cvv');
    e.forEach(item => {
      newState[item.name] = item.value
    });
    
    this.setState({ 
      client: { ...this.state.client, ...newState },
      displayCardBack: _cvv ? _cvv.focus || _cvv.hover : false,
    });
  }
  render() {
    return (
      <div className="pay-credit-card">
        <div className="pay-credit-card__presentation">
          <div className="pay-credit-card__step-nav">
            <div className="pay-credit-card__back-step">
              <div className="pay-credit-card__back-step-icon">
                <FontAwesomeIcon icon={faAngleLeft} size="lg" />
              </div> 
              <div className="pay-credit-card__back-step-text">
                Alterar forma de pegamento
              </div>
            </div>
            <div className="pay-credit-card__steps">
              {StepListMobile(["Carrinho", "Pagamento", "Confirmação"], "Pagamento")}
            </div>
            <div className="pay-credit-card__right">
            </div>
          </div>
          <div className="pay-credit-card__step-title">
            <img src={cartIconImg} />
            Adicione um novo cartão de crédito
          </div>
          <div className="pay-credit-card__figure">
          <CardFigurePicker 
            client={this.state.client}
            displayCardBack={this.state.displayCardBack}>
          </CardFigurePicker>
          </div>
        </div>
        <div className="pay-credit-card__form-container">
          <div className="pay-credit-card__step-list">
            <StepList
              steps={["Carrinho", "Pagamento", "Confirmação"]}
              stepSelected={"Pagamento"}></StepList>
          </div>
          <div className="pay-credit-card__form">
            <PayForm update={this.update}></PayForm>
          </div>
        </div>
      </div>
    );
  }
}