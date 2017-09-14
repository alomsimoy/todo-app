import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';
import TodoList from '../components/TodoList';
import NewItemButton from '../components/NewItemButton';

const App = ({todos, actions}) => (
  <div>
    <h2>TODOS</h2>
    <TodoList
      todos={todos}
      onSelect={actions.selectTodo}
    />
    <NewItemButton action={actions.addTodo} />
  </div>
);

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

