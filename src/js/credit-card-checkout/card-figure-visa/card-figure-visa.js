import React from 'react';
import PropTypes from 'prop-types';
import './card-figure-visa.scss';
import logo from '../../../../assets/logo-visa.png';

const CardFigureVisa = ({ client }) => (
  <div className="card-figure-visa">
    <div className="card-figure-visa__logo">
      <img src={logo} />
    </div>
    <div className="card-figure-visa__code" >
      {client.cardCode}
    </div>
    <div className="card-figure-visa__row">
        <div className="card-figure-visa__people">{client.people || 'NOME DO TITULAR'}</div>
        <div className="card-figure-visa__date">{client.shelfLife || '00/00'}</div>
    </div>
  </div>
);

CardFigureVisa.propTypes = {
  client: PropTypes.object
}

export default CardFigureVisa;