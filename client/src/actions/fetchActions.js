import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const requestData = () => ({
  type: FETCH_REQUEST,
});

export const fetchSuccess = payload => ({
  type: FETCH_SUCCESS,
  payload,
});

export const fetchFailure = () => ({
  type: FETCH_FAILURE,
});

export const fetchData = url => dispatch => {
  dispatch(requestData());

  axios
    .get(url)
    .then(response => response.data)
    .then(data => dispatch(fetchSuccess(data)))
    .catch(() => dispatch(fetchFailure()));
};
