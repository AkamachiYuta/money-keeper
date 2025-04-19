// テーマカラー
export const userTheme = (userThemeColor: string = "#000000") => {
  ui("theme", userThemeColor);
  localStorage.setItem("userThemeColor", userThemeColor);
};