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

  it('returns the correct type for opening dialog', () => {
    const { OPEN_DELETE_DIALOG, openDialog } = actions;
    expect(openDialog().type).toEqual(OPEN_DELETE_DIALOG);
  });

  it('returns the correct type for closing dialog', () => {
    const { CLOSE_DELETE_DIALOG, closeDialog } = actions;
    expect(closeDialog().type).toEqual(CLOSE_DELETE_DIALOG);
  });

  it('returns the correct type for state reset', () => {
    const { RESET_STATE, resetState } = actions;
    expect(resetState().type).toEqual(RESET_STATE);
  });
});
