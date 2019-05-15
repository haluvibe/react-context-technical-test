import { createSelector } from 'reselect';
import { getFavourites } from '../favourites/selectors';
import { getSortBy, getSortOrder } from '../user/selectors';

export const getBeers = ({ punk }) => punk.beers;
export const getBeersPending = ({ punk }) => punk.pending;
export const getBeersError = ({ punk }) => punk.error;

function dynamicSort(property, sortOrder) {
  return function(a, b) {
    var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * (sortOrder === 'ascending' ? 1 : -1);
  };
}

export const makeSortedBeersWithFavourites = () => {
  return createSelector(
    [getFavourites, getBeers, getSortBy, getSortOrder],
    (favourites, beers, sortby, sortOrder) => {
      const beersWithFavourites = beers.map(beer => {
        if (favourites.some(favourite => favourite.id === beer.id)) {
          beer.isFavourite = true;
        } else {
          beer.isFavourite = false;
        }
        return beer;
      });
      const sortedBeers = beersWithFavourites.sort(dynamicSort(sortby, sortOrder));
      return sortedBeers;
    }
  );
};
