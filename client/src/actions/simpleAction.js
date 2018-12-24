export const SIMPLE_ACTION = 'SIMPLE_ACTION';

export const simpleAction = () => dispatch => {
  dispatch({
    type: SIMPLE_ACTION,
    payload: 'result of simple action',
  });
};
