import React from 'react';
import PropTypes from 'prop-types';

const UndoButton = ({ action }) => (
  <button
    onClick={action}
  >
    { '<-' }
  </button>
);

UndoButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default UndoButton;

