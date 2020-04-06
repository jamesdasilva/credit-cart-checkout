import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './pay-credit-card.scss';
import cartIconImg from '../../../../assets/cart-icon.svg';
import CardFigure from '../card-figure/card-figure';
import CardFigurePicker from '../card-figure-picker/card-figure-picker';
import StepList from '../step-list/step-list';
import PayForm from '../pay-form/pay-form';

export default class PayCreditCard extends Component {
  constructor(){
    super();
    this.state ={
      client: {
        cardCode: '**** **** **** ****', 
        people: 'NOME DO TITULAR', 
        shelfLife: '00/00'
      }
    };
    this.update = this.update.bind(this);
  }
  update(e){
    this.setState(e);
  }
  render() {
    return (
      <div className="pay-credit-card">
        <div className="pay-credit-card__presentation">
          <div className="pay-credit-card__back-step">
            <div className="pay-credit-card__icon">
              <FontAwesomeIcon icon={faAngleLeft} size="lg" />
            </div> Alterar forma de pegamento
          </div>
          <div className="pay-credit-card__step-title">
            <img src={cartIconImg} />
            Adicione um novo cartão de crédito
          </div>
          <CardFigurePicker 
            client={this.state.client}
            cardFigureRender={(c) => <CardFigure client={c}></CardFigure> }>
          </CardFigurePicker>
        </div>
        <div className="pay-credit-card__form-container">
          <StepList
            steps={["Carrinho", "Pagamento", "Confirmação"]}
            stepSelected={"Pagamento"}></StepList>
          <div className="pay-credit-card__form">
            <PayForm update={this.update}></PayForm>
          </div>
        </div>
      </div>
    );
  }
}