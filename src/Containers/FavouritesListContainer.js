import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFavourites } from '../store/favourites/selectors';
import { removeFromFavourites } from '../store/favourites/actions';

import FavouritesList from '../Components/FavouritesList/FavouritesList';
import Empty from '../Components/Empty/Empty';

class FavouritesListContainer extends Component {
  render() {
    const { favourites, removeFromFavourites } = this.props;
    if (favourites.length === 0) return <Empty />;
    return <FavouritesList favourites={favourites} removeFromFavourites={removeFromFavourites} />;
  }
}

const mapStateToProps = state => ({
  favourites: getFavourites(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeFromFavourites: removeFromFavourites,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouritesListContainer);
