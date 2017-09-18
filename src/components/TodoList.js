import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import find from 'lodash/find';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const TodoList = ({ todos, onSelect }) => (
  <Table
    onCellClick={(index) => onSelect(todos[index].id)}
  >
    <TableBody
      deselectOnClickaway={false}
      showRowHover={true}
    >
      { map(todos, ({ text, id, selected }) => (
        <TableRow value={id} key={id} selected={selected}>
          <TableRowColumn>
            {text}
          </TableRowColumn>
        </TableRow>
      )) }
    </TableBody>
  </Table>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TodoList;

