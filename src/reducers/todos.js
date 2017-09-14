import map from 'lodash/map';
import find from 'lodash/find';
import filter from 'lodash/filter';

import { ADD_TODO, DELETE_TODO, SELECT_TODO } from '../constants/ActionTypes'

const initialState = [
  {
    id: 0,
    text: 'Initial todo',
    selected: false,
  },
  {
    id: 1,
    text: 'Initial tosdfdo',
    selected: true,
  },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max( todo.id, maxId), -1) + 1,
          text: action.text,
          selected: false,
        }
      ];

    case DELETE_TODO:
      return filter(state, [ 'selected', false ]);

    case SELECT_TODO:
       return map(state, (item) => {
        if (item.id == action.id) {
          return {
            ...item,
            selected: true,
          };
        }
        return {
          ...item,
          selected: false,
        };
      });

    default:
      return state;
  }
}
