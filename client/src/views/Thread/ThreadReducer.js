import { ADD_REPLY, CLEAR_REPLIES } from './ThreadActions';

const initialState = {
  additionalReplies: [],
};

const threadReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REPLY:
      return {
        additionalReplies: [...state.additionalReplies, action.payload],
      };
    case CLEAR_REPLIES:
      return { additionalReplies: [] };
    default:
      return state;
  }
};

export default threadReducer;
