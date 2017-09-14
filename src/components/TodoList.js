import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

const TodoList = ({ todos }) => (
  <select size="10" >
    { map(todos, ({text}) => <option>{text}</option>) }
  </select>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
