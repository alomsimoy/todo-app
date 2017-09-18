import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const DeleteItemButton = ({ action }) => (
  <RaisedButton
    secondary
    onClick={action}
  >
    -
  </RaisedButton>
);

DeleteItemButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default DeleteItemButton;

