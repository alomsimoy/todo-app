import { ADD_TODO, DELETE_TODO } from '../constants/ActionTypes'

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max( todo.id, maxId), -1) + 1,
          text: action.text
        }
      ];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    default:
      return state;
  }
}
