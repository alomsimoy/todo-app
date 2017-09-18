import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';
import TodoList from '../components/TodoList';
import NewItemButton from '../components/NewItemButton';
import DeleteItemButton from '../components/DeleteItemButton';
import UndoButton from '../components/UndoButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = ({todos, actions}) => (
  <MuiThemeProvider>
    <div>
      <TodoList
        todos={todos}
        onSelect={actions.selectTodo}
      />
      <br/>
      <NewItemButton action={actions.addTodo} />
      <DeleteItemButton action={actions.deleteTodo} />
      <UndoButton action={actions.undo} />
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos.present,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

