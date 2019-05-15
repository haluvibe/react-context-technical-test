export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_SORT_ORDER = 'SET_SORT_ORDER';
export const CHANGE_SHOW_COLUMNS = 'CHANGE_SHOW_COLUMNS';

export const setSortBy = sortby => {
  return {
    type: SET_SORT_BY,
    sortby: sortby,
  };
};

export const setSortOrder = sortOrder => {
  return {
    type: SET_SORT_ORDER,
    sortOrder: sortOrder,
  };
};

export const changeShowColumns = showColumns => {
  return {
    type: CHANGE_SHOW_COLUMNS,
    showColumns: showColumns,
  };
};
