export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

export const addToFavourites = favourite => {
  return {
    type: ADD_TO_FAVOURITES,
    favourite: favourite,
  };
};

export const removeFromFavourites = id => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    id: id,
  };
};
