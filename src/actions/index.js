import * as types from '../constants/ActionTypes';

export const addTodo = (text) => ({
  type: types.ADD_TODO,
  text,
});

export const deleteTodo = () => ({
  type: types.DELETE_TODO,
});

export const selectTodo = (id) => ({
  type: types.SELECT_TODO,
  id,
});

export const undo = () => ({
  type: types.UNDO,
});

