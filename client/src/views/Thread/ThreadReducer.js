import {
  ADD_REPLY,
  OPEN_DELETE_DIALOG,
  CLOSE_DELETE_DIALOG,
  RESET_STATE,
} from './ThreadActions';

const initialState = {
  additionalReplies: [],
  deleteDialogOpenState: false,
};

const threadReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REPLY:
      return {
        ...state,
        additionalReplies: [...state.additionalReplies, action.payload],
      };
    case OPEN_DELETE_DIALOG:
      return { ...state, deleteDialogOpenState: true };
    case CLOSE_DELETE_DIALOG:
      return { ...state, deleteDialogOpenState: false };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

export default threadReducer;
