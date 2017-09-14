import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import find from 'lodash/find';

const TodoList = ({ todos, onSelect }) => (
  <select
    size="10"
    value={find(todos, 'selected').id}
    onChange={(event) => onSelect(event.target.value)}
  >
    { map(todos, ({ text , id }) => (
      <option value={id}>
        {text}
      </option>
    )) }
  </select>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TodoList;

