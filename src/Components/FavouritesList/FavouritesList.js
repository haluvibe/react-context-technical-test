import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import './FavouritesList.css';

const FavouritesList = ({ favourites, removeFromFavourites }) => (
  <ul>
    {favourites.map(({ name, id }) => {
      return (
        <li key={uuid.v4()}>
          {name}
          <button className="remove-button" onClick={() => removeFromFavourites(id)}>
            {' '}
            Remove from Favourites{' '}
          </button>
        </li>
      );
    })}
  </ul>
);

FavouritesList.propTypes = {
  favourites: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFromFavourites: PropTypes.func.isRequired,
};

export default FavouritesList;
