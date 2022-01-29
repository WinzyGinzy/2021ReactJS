import * as actionTypes from "../store/actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      return {
        ...state,
        notes: state.notes.concat({
          id: new Date(),
          text: action.data,
          complete: false,
        }),
      };
    case actionTypes.DELETE_NOTE:
      const updateNotes = state.notes.filter((item) => item.id !== action.item);
      return {
        ...state,
        notes: updateNotes,
      };
    case actionTypes.COMPLETE_NOTE:
      const completed = state.notes.map((item) => {
        return item.id === action.completedID
          ? { ...item, complete: !item.complete }
          : { ...item };
      });
      return {
        ...state,
        notes: completed,
      };
    default:
      return state;
  }
};

const initialState = {
  notes: [],
};

export default reducer;
