import map from 'lodash/map';
import find from 'lodash/find';
import filter from 'lodash/filter';
import dropRight from 'lodash/dropRight';
import last from 'lodash/last';

import {
  ADD_TODO,
  DELETE_TODO,
  SELECT_TODO,
  UNDO,
} from '../constants/ActionTypes'

const initialState = {
  past: [],
  present: [
    {
      id: 0,
      text: 'First Item',
      selected: false,
    },
  ]
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        past: [
          ...state.past,
          state.present,
        ],
        present: [
          ...state.present,
          {
            id: state.present.reduce((maxId, todo) => Math.max( todo.id, maxId), -1) + 1,
            text: action.text,
            selected: false,
          }
        ]
      };

    case DELETE_TODO:
      return {
        past: [
          ...state.past,
          state.present,
        ],
        present: filter(state.present, [ 'selected', false ]),
      };

    case SELECT_TODO:
      return {
        ...state,
        present: map(state.present, (item) => {
          if (item.id == action.id) {
            return {
              ...item,
              selected: !item.selected,
            };
          }
          return {
            ...item,
            selected: false,
          };
        }),
      };

    case UNDO:
      return 0 < state.past.length ? {
        past: dropRight(state.past),
        present: last(state.past),
      } : state;

    default:
      return state;
  }
}

