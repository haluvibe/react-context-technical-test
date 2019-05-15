import React from 'react';
import BeersListContainer from '../Containers/BeersListContainer';
import FavouritesListContainer from '../Containers/FavouritesListContainer';
import SortingContainer from '../Containers/SortingContainer';
import './MainLayout.css';

const MainLayout = () => (
  <div className="container">
    <div className="spacer--small" />
    <h1>My Favourites</h1>
    <div className="spacer--small" />
    <FavouritesListContainer />
    <div className="spacer--small" />
    <h1>List of Beers</h1>
    <div className="spacer--small" />
    <SortingContainer />
    <div className="spacer--small" />
    <BeersListContainer />
  </div>
);

export default MainLayout;
