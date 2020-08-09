const CHANGE_NOTE_INPUT = "notes/CHANGE_NOTE_INPUT";

export const changeNoteInput = ({ value }) => ({
  type: CHANGE_NOTE_INPUT,
  payload: { value },
});

const initialState = {
  noteInput: "",
};

export const notes = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NOTE_INPUT:
      return {
        ...state,
        noteInput: action.payload.value,
      };
    default:
      return state;
  }
};
