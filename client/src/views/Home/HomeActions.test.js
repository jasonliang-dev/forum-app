import * as actions from './HomeActions';

describe('Home Actions', () => {
  it('returns the correct type for requesting threads', () => {
    const { GET_THREADS_REQUEST, requestThreads } = actions;
    expect(requestThreads().type).toEqual(GET_THREADS_REQUEST);
  });

  it('returns the correct type for request failure', () => {
    const { GET_THREADS_FAILURE, getThreadsFailure } = actions;
    expect(getThreadsFailure().type).toEqual(GET_THREADS_FAILURE);
  });

  it('returns the correct type on request success', () => {
    const { GET_THREADS_SUCCESS, getThreadsSuccess } = actions;
    expect(getThreadsSuccess().type).toEqual(GET_THREADS_SUCCESS);
  });

  it('returns the correct data on request success', () => {
    const { getThreadsSuccess } = actions;
    const data = ['a', 'b', 'c'];
    expect(getThreadsSuccess(data).payload).toEqual(data);
  });
});
