import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const UndoButton = ({ action }) => (
  <RaisedButton
    onClick={action}
  >
    &larr;
  </RaisedButton>
);

UndoButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default UndoButton;

