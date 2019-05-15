import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchBeersAction from '../store/punk/fetchBeers';
import { addToFavourites } from '../store/favourites/actions';

import {
  getBeersError,
  getBeersPending,
  makeSortedBeersWithFavourites,
} from '../store/punk/selectors';
import { getFavourites } from '../store/favourites/selectors';
import { getShowColumns } from '../store/user/selectors';

import Loading from '../Components/Loading/Loading';
import Error from '../Components/Error/Error';
import BeersList from '../Components/BeersList/BeersList';

class BeersListContainer extends Component {
  componentWillMount() {
    const { fetchBeers } = this.props;
    fetchBeers();
  }

  render() {
    const { beers, error, pending, favourites, addToFavourites, showColumns } = this.props;
    if (pending) return <Loading />;
    if (error) return <Error />;
    return <BeersList beers={beers} addToFavourites={addToFavourites} showColumns={showColumns} />;
  }
}

const makeMapStateToProps = () => {
  const getSortedBeersWithFavourites = makeSortedBeersWithFavourites();
  const mapStateToProps = (state, props) => {
    return {
      error: getBeersError(state),
      beers: getSortedBeersWithFavourites(state),
      pending: getBeersPending(state),
      favourites: getFavourites(state),
      showColumns: getShowColumns(state),
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchBeers: fetchBeersAction,
      addToFavourites: addToFavourites,
    },
    dispatch
  );

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(BeersListContainer);
