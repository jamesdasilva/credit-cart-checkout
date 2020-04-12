import React from 'react';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './step-list.scss';

const StepList = ({steps, stepSelected}) => {
  return (
    <div className="step-list" data-testid='step-list'>
      {steps.map((item, i) => (
        <div className="step-list__item" key={i}>
        { i < steps.findIndex(s => s == stepSelected) ? 
          (<div className="step-list__item-icon" data-testid='check-icon'>
            <FontAwesomeIcon icon={faCheckCircle} size="lg" />
        </div>) : <div className="step-list__number">{i + 1}</div>}
        {item}
        {( i <  steps.length - 1 && 
          <div className="step-list__separator">
            <FontAwesomeIcon icon={faAngleRight} size="lg" />
          </div>
        )}
      </div>
      ))}
    </div>
  );
}

StepList.propTypes = {
  steps: PropTypes.arrayOf(String),
  stepSelected: PropTypes.string
}

export default StepList;
