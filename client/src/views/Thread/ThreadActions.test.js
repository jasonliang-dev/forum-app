import * as actions from './ThreadActions';

describe('Thread Actions', () => {
  it('returns the correct type when adding reply', () => {
    const { ADD_REPLY, addReply } = actions;
    expect(addReply().type).toEqual(ADD_REPLY);
  });

  it('returns the correct data when adding reply', () => {
    const { addReply } = actions;
    expect(addReply([1, 2, 3]).payload).toEqual([1, 2, 3]);
  });

  it('returns the correct type for clear reply', () => {
    const { CLEAR_REPLIES, clearReplies } = actions;
    expect(clearReplies().type).toEqual(CLEAR_REPLIES);
  });
});
