import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import './pay-credit-card.scss';
import cartIconImg from '../../../../assets/cart-icon.svg';
import CardFigure from '../card-figure/card-figure';

export default class PayCreditCard extends Component {
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
          <CardFigure client={{
            code: '5149 4505 6231 6542', people: 'JAMES O DA SILVA', date: '06/26'}}></CardFigure>
        </div>
        <div className="pay-credit-card__form-container">
          <div className="pay-credit-card__step-list">

          </div>
          <div className="pay-credit-card__form">

          </div>
        </div>
      </div>
    );
  }
}