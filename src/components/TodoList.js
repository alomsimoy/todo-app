import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

const TodoList = ({ todos }) => (
  <ul>
    { map(todos, ({text}) => <li>{text}</li>) }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
