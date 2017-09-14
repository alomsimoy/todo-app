import React from 'react';
import PropTypes from 'prop-types';

const DeleteItemButton = ({ action }) => (
  <button
    onClick={action}
  >
    -
  </button>
);

DeleteItemButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default DeleteItemButton;

