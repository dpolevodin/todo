export const affairsActionTypes = {
  SET_AFFAIRS: "AFFAIRS.SET_AFFAIRS",
  DONE_AFFAIR: "AFFAIRS.DONE_AFFAIR",
  CLEAR: "AFFAIRS.CLEAR",
  DELETE_AFFAIR: "AFFAIRS.DELETE_AFFAIR",
};

export const affairsActions = {
  setAffairs: (payload) => ({
    type: affairsActionTypes.SET_AFFAIRS,
    payload,
  }),
  doneAffair: (payload) => ({
    type: affairsActionTypes.DONE_AFFAIR,
    payload,
  }),
  deleteAffair: (payload) => ({
    type: affairsActionTypes.DELETE_AFFAIR,
    payload,
  }),
  clear: () => ({
    type: affairsActionTypes.CLEAR,
  }),
};
