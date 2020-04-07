import React from 'react';
import PropTypes from 'prop-types';
import './card-figure-back.scss';

const CardFigureBack = ({ client }) => (
  <div className="card-figure-back">
    <div className="card-figure-back__logo">
      
    </div>
    <div className="card-figure-back__code">
    </div>
    <div className="card-figure-back__row">
        <div className="card-figure-back__people"></div>
        <div className="card-figure-back__date"></div>
    </div>
  </div>
);

CardFigureBack.propTypes = {
  client: PropTypes.object
}

export default CardFigureBack;