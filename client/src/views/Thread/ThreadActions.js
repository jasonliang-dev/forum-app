export const ADD_REPLY = 'THREAD_ADD_REPLY';
export const RESET_STATE = 'THREAD_RESET_STATE';
export const OPEN_DELETE_DIALOG = 'THREAD_OPEN_DELETE_DIALOG';
export const CLOSE_DELETE_DIALOG = 'THREAD_CLOSE_DELETE_DIALOG';

export const addReply = payload => ({
  type: ADD_REPLY,
  payload,
});

export const openDialog = () => ({
  type: OPEN_DELETE_DIALOG,
});

export const closeDialog = () => ({
  type: CLOSE_DELETE_DIALOG,
});

export const resetState = () => ({
  type: RESET_STATE,
});
