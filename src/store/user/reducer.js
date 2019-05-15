import { SET_SORT_BY, SET_SORT_ORDER, CHANGE_SHOW_COLUMNS } from './actions';

const initialState = {
  sortOrder: 'ascending',
  sortby: 'id',
  showColumns: ['addToFavourites', 'name', 'abv', 'attenuation_level', 'ph'],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortby: action.sortby,
      };
    case SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.sortOrder,
      };
    case CHANGE_SHOW_COLUMNS:
      return {
        ...state,
        showColumns: action.showColumns,
      };
    default:
      return state;
  }
}

export default userReducer;
