import React from 'react';
import PropTypes from 'prop-types';

const showPrompt = (callback) => {
  const text = window.prompt('Enter a new Item');
  callback(text);
};

const NewItemButton = ({ action }) => (
  <button onClick={() => showPrompt(action)} />
);

NewItemButton.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default NewItemButton;
