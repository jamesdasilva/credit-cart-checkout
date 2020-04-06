import React from 'react';
import PropTypes from 'prop-types';
import './card-figure-picker.scss';

const CardFigurePicker = ({ client, cardFigureRender }) => (
  <div className="card-figure-picker" data-testid="card-code-figure">
    {cardFigureRender(client)}
  </div>
);

CardFigurePicker.propTypes = {
  client: PropTypes.object
}

export default CardFigurePicker;