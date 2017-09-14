import * as types from '../constants/ActionTypes';

export const addTodo = (text) => ({
  type: types.ADD_TODO,
  text,
});

export const deleteTodo = (id) => ({
  type: types.DELETE_TODO,
  id,
});

export const selectTodo = (id) => ({
  type: types.SELECT_TODO,
  id,
});

