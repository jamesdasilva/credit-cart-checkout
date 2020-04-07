import React from 'react';
import PropTypes from 'prop-types';
import './card-figure-picker.scss';

import CardFigureBack from '../card-figure-back/card-figure-back';
import CardFigureVisa from '../card-figure-visa/card-figure-visa';
import CardFigureUndefined from '../card-figure-undefined/card-figure-undefined';

const setCardBack = (c) => {
  return (<CardFigureBack client={c}></CardFigureBack>)
}
const setCartFigure = (c) => {
  if(/^[4]{1}[.]*/.test(c.cardCode)){
    return (<CardFigureVisa client={c}></CardFigureVisa>)
  }
  return (<CardFigureUndefined client={c}></CardFigureUndefined>)
}

const CardFigurePicker = ({ client, displayCardBack }) => (
  <div className="card-figure-picker" data-testid="card-code-figure">
    {displayCardBack ? setCardBack(client) : setCartFigure(client)}
  </div>
);

CardFigurePicker.propTypes = {
  client: PropTypes.object
}

export default CardFigurePicker;