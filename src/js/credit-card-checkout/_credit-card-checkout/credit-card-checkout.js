import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './credit-card-checkout.scss';
import cartIconImg from '../../../../assets/cart-icon.svg';
import CardFigureVisa from '../card-figure-visa/card-figure-visa';
import CardFigureUndefined from '../card-figure-undefined/card-figure-undefined';
import CardFigurePicker from '../card-figure-picker/card-figure-picker';
import StepList from '../step-list/step-list';
import PayForm from '../pay-form/pay-form';

export default class PayCreditCard extends Component {
  constructor(){
    super();
    this.state ={
      client: {
        cardCode: '', 
        people: '', 
        shelfLife: ''
      }
    };
    this.update = this.update.bind(this);
  }
  update(e){
    //console.log(e);
    const newState = {};
    e.forEach(item => {
      newState[item.name] = item.value
    });
    this.setState({ client: { ...this.state.client, ...newState }});
  }
  setCartFigure(c) {
    if(/^[4]{1}[.]*/.test(c.cardCode)){
      return (<CardFigureVisa client={c}></CardFigureVisa>)
    }
    return (<CardFigureUndefined client={c}></CardFigureUndefined>)
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
            cardFigureRender={this.setCartFigure}>
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