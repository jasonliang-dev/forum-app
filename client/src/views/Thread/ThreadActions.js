export const ADD_REPLY = 'THREAD_ADD_REPLY';
export const CLEAR_REPLIES = 'THREAD_CLEAR_REPLIES';

export const addReply = payload => ({
  type: ADD_REPLY,
  payload,
});

export const clearReplies = () => ({
  type: CLEAR_REPLIES,
});
