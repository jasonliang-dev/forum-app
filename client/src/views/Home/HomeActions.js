import axios from 'axios';
import environment from '../../environment';

export const GET_THREADS_REQUEST = 'HOME_GET_THREADS_REQUEST';
export const GET_THREADS_SUCCESS = 'HOME_GET_THREADS_SUCCESS';
export const GET_THREADS_FAILURE = 'HOME_GET_THREADS_FAILURE';

export const requestThreads = () => ({
  type: GET_THREADS_REQUEST,
});

export const getThreadsSuccess = payload => ({
  type: GET_THREADS_SUCCESS,
  payload,
});

export const getThreadsFailure = () => ({
  type: GET_THREADS_FAILURE,
});

export const getThreads = dispatch => {
  dispatch(requestThreads());

  axios
    .get(`${environment.endpoint}/threads`)
    .then(response => response.data)
    .then(threads => dispatch(getThreadsSuccess(threads)))
    .catch(() => {
      dispatch(getThreadsFailure());
    });
};
