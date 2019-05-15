import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import './BeersList.css';

const BeersList = ({ beers, addToFavourites, showColumns }) => {
  return (
    <table className="table-design table-a11y" role="table">
      <caption>Beers List</caption>
      <thead>
        <tr role="row">
          {showColumns.map(columnType => (
            <th key={uuid.v4()} role="columnheader" scope="col">
              {columnType}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {beers.map((beer, beerIndex) => (
          <tr role="row" key={uuid.v4()}>
            <th role="rowheader" scope="row" headers="columnheader1">
              <span className="col-header" aria-hidden="true">
                {showColumns[0]}
              </span>
              {!beer.isFavourite ? (
                <button onClick={() => addToFavourites(beer)}>Add to Favourites</button>
              ) : (
                <div>Favourite</div>
              )}
            </th>
            <td role="cell" headers={`item${beerIndex + 1} columnheader2`}>
              <span className="col-header" aria-hidden="true">
                {showColumns[1]}
              </span>
              {beer[showColumns[1]]}
            </td>
            <td role="cell" headers={`item${beerIndex + 1} columnheader3`}>
              <span className="col-header" aria-hidden="true">
                {showColumns[2]}
              </span>
              {beer[showColumns[2]]}
            </td>
            <td role="cell" headers={`item${beerIndex + 1} columnheader4`}>
              <span className="col-header" aria-hidden="true">
                {showColumns[3]}
              </span>
              {beer[showColumns[3]]}
            </td>
            <td role="cell" headers={`item${beerIndex + 1} columnheader5`}>
              <span className="col-header" aria-hidden="true">
                {showColumns[4]}
              </span>
              {beer[showColumns[4]]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

BeersList.propTypes = {
  beers: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToFavourites: PropTypes.func.isRequired,
};

export default BeersList;
