import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SortingForm from '../Components/SortingForm/SortingForm';

import { setSortBy, setSortOrder } from '../store/user/actions';
import { getSortBy, getSortOrder } from '../store/user/selectors';

class SortingContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
  }

  handleSortByChange(event) {
    const { setSortBy } = this.props;
    setSortBy(event.target.value);
  }

  handleSortOrderChange(event) {
    const { setSortOrder } = this.props;
    setSortOrder(event.target.value);
  }

  render() {
    const { sortBy, sortOrder } = this.props;
    return (
      <SortingForm
        sortBy={sortBy}
        sortOrder={sortOrder}
        handleSortByChange={this.handleSortByChange}
        handleSortOrderChange={this.handleSortOrderChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  sortBy: getSortBy(state),
  sortOrder: getSortOrder(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSortBy: setSortBy,
      setSortOrder: setSortOrder,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortingContainer);
