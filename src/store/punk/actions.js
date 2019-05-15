export const FETCH_BEERS_PENDING = 'FETCH_BEERS_PENDING';
export const FETCH_BEERS_SUCCESS = 'FETCH_BEERS_SUCCESS';
export const FETCH_BEERS_ERROR = 'FETCH_BEERS_ERROR';

export const fetchBeersPending = () => {
  return {
    type: FETCH_BEERS_PENDING,
  };
};

export const fetchBeersSuccess = beers => {
  return {
    type: FETCH_BEERS_SUCCESS,
    beers: beers,
  };
};

export const fetchBeersError = error => {
  return {
    type: FETCH_BEERS_ERROR,
    error: error,
  };
};
