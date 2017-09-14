import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import find from 'lodash/find';

const getSelected = (todos) => {
    const selected = find(todos, 'selected');
    return selected ? selected.id : null;
};

const TodoList = ({ todos, onSelect }) => (
  <select
    size="10"
    value={getSelected(todos)}
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

