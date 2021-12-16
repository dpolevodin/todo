export const getAffairs = (state) =>
  [...new Set(state.affairs.todo)].filter((item) => item !== null);
export const getDoneAffairs = (state) => state.affairs.done;

export * as selectors from "./index";
