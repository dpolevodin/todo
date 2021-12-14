export const affairsActionTypes = {
  SET_AFFAIRS: "AFFAIRS.SET_AFFAIRS",
  DELETE_AFFAIR: "AFFAIRS.DELETE_AFFAIR",
};

export const affairsActions = {
  setAffairs: (payload) => ({
    type: affairsActionTypes.SET_AFFAIRS,
    payload,
  }),
  deleteAffair: (payload) => ({
    type: affairsActionTypes.DELETE_AFFAIR,
    payload,
  }),
};
