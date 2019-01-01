import axios from 'axios';
import { connect } from 'react-redux';
import { sleep } from '../utils';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const requestData = pageName => ({
  type: FETCH_REQUEST,
  payload: pageName,
});

export const fetchSuccess = payload => ({
  type: FETCH_SUCCESS,
  payload,
});

export const fetchFailure = err => ({
  type: FETCH_FAILURE,
  payload: err,
});

export const fetchData = (pageName, url) => dispatch => {
  dispatch(requestData(pageName));

  axios
    .get(url)
    .then(sleep(200)) // ahahaha
    .then(response => response.data)
    .then(data => dispatch(fetchSuccess(data)))
    .catch(err => dispatch(fetchFailure(err)));
};

export const connectFetcher = pageName =>
  connect(
    state => ({ ...state.fetchData[pageName] }),
    dispatch => ({ fetchData: url => dispatch(fetchData(pageName, url)) }),
  );
