import { affairsActionTypes } from "./actions";

const initialState = {
  todo: [],
  done: [],
};

export const affairsReducer = (state = initialState, action) => {
  switch (action.type) {
    case affairsActionTypes.SET_AFFAIRS:
      return { ...state, todo: [...state.todo, action.payload] };
    case affairsActionTypes.DELETE_AFFAIR:
      return {
        ...state,
        todo: state.todo.filter((item) => item !== action.payload),
      };
    case affairsActionTypes.CLEAR:
      return initialState;
    case affairsActionTypes.DONE_AFFAIR:
      return {
        ...state,
        todo: [...state.todo.filter((item) => item !== action.payload)],
        done: [...state.done, action.payload],
      };
    default:
      return state;
  }
};
