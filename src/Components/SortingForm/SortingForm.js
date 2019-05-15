import React from 'react';
import PropTypes from 'prop-types';
import './SortingForm.css';

const SortingForm = ({ sortOrder, sortBy, handleSortOrderChange, handleSortByChange }) => (
  <form>
    <label>
      Sort beers by:
      <select className="select" value={sortOrder} onChange={event => handleSortOrderChange(event)}>
        <option value="ascending">ascending</option>
        <option value="descending">descending</option>
      </select>
      <select className="select" value={sortBy} onChange={event => handleSortByChange(event)}>
        <option value="id">id</option>
        <option value="abv">abv</option>
        <option value="name">name</option>
        <option value="attenuation_level">attenuation_level</option>
        <option value="ph">ph</option>
      </select>
    </label>
  </form>
);

SortingForm.propTypes = {
  sortOrder: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  handleSortOrderChange: PropTypes.func.isRequired,
  handleSortByChange: PropTypes.func.isRequired,
};

export default SortingForm;
