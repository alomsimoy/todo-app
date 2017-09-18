import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const showPrompt = (callback) => {
  const text = window.prompt('Enter a new Item');
  callback(text);
};

const NewItemButton = ({ action }) => (
  <RaisedButton
    primary
    onClick={() => showPrompt(action)}
  >
    +
  </RaisedButton>
);

NewItemButton.propTypes = {
  action: PropTypes.func.isRequired,
};

export default NewItemButton;

