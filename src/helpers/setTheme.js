export const setTheme = (isDarkTheme) => {
  const bodyClass = document.body.classList;
  isDarkTheme ? bodyClass.add("dark") : bodyClass.remove("dark");
};
