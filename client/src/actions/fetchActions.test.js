import * as actions from './fetchActions';

describe('Fetch Actions', () => {
  it('returns the correct type for requesting data', () => {
    const { FETCH_REQUEST, requestData } = actions;
    expect(requestData().type).toEqual(FETCH_REQUEST);
  });

  it('returns the correct type for request failure', () => {
    const { FETCH_FAILURE, fetchFailure } = actions;
    expect(fetchFailure().type).toEqual(FETCH_FAILURE);
  });

  it('returns the correct type on request success', () => {
    const { FETCH_SUCCESS, fetchSuccess } = actions;
    expect(fetchSuccess().type).toEqual(FETCH_SUCCESS);
  });

  it('returns the correct data on request success', () => {
    const { fetchSuccess } = actions;
    const data = ['a', 'b', 'c'];
    expect(fetchSuccess(data).payload).toEqual(data);
  });
});
