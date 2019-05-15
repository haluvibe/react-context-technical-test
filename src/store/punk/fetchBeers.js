import { fetchBeersPending, fetchBeersSuccess, fetchBeersError } from './actions';

function fetchBeers() {
  return dispatch => {
    const punkApiUrl = 'https://api.punkapi.com/v2/beers';

    const urls = [
      punkApiUrl + '?page=1&per_page=80',
      punkApiUrl + '?page=2&per_page=80',
      punkApiUrl + '?page=3&per_page=80',
      punkApiUrl + '?page=4&per_page=80',
      punkApiUrl + '?page=5&per_page=80',
    ];

    dispatch(fetchBeersPending());
    Promise.all(
      urls.map(url =>
        fetch(url)
          .then(response => response.json())
          .then(response => {
            if (response.error) {
              throw response.error;
            }
            return response;
          })
      )
    )
      .then(responses => {
        const beers = [].concat(...responses);
        dispatch(fetchBeersSuccess(beers));
      })
      .catch(error => {
        dispatch(fetchBeersError(error));
      });
  };
}

export default fetchBeers;
