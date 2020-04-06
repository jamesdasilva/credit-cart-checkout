import React from 'react';
import PropTypes from 'prop-types';
import './card-figure-undefined.scss';

const CardFigureUndefined = ({ client }) => (
  <div className="card-figure-undefined">
    <div className="card-figure-undefined__logo">
      
    </div>
    <div className="card-figure-undefined__code">
      {client.cardCode || '**** **** **** ****'}
    </div>
    <div className="card-figure-undefined__row">
        <div className="card-figure-undefined__people">{client.people || 'NOME DO TITULAR'}</div>
        <div className="card-figure-undefined__date">{client.shelfLife || '00/00'}</div>
    </div>
  </div>
);

CardFigureUndefined.propTypes = {
  client: PropTypes.object
}

export default CardFigureUndefined;