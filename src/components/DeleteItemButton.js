import React from 'react';
import PropTypes from 'prop-types';

const DeleteItemButton = ({ action }) => (
  <button onClick={action} />
);

DeleteItemButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default DeleteItemButton;

