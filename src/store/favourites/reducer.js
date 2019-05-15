import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from './actions';

const initialState = {
  list: [],
};

function favouritesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        list: [...state.list, action.favourite],
      };
    case REMOVE_FROM_FAVOURITES:
      return {
        list: state.list.filter(element => element.id !== action.id),
      };
    default:
      return state;
  }
}

export default favouritesReducer;
