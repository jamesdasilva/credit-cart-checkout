import React from 'react';
import PropTypes from 'prop-types';
import './card-figure.scss';
import logo from '../../../../assets/logo-visa.png';

const CardFigure = ({ client }) => (
  <div className="card-figure">
    <div className="card-figure__logo">
      <img src={logo} />
    </div>
    <div className="card-figure__code">
      {client.cardCode}
    </div>
    <div className="card-figure__row">
        <div className="card-figure__people">{client.people}</div>
        <div className="card-figure__date">{client.shelfLife}</div>
    </div>
  </div>
);

CardFigure.propTypes = {
  client: PropTypes.object
}

export default CardFigure;