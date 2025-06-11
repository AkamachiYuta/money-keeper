// テーマカラー
export const userTheme = async (userThemeColor: string = "#804040") => {
  await ui("theme", userThemeColor);
  localStorage.setItem("userThemeColor", userThemeColor);
  metaTheme();
};

export const metaTheme = () => {
  const themeColorMeta = document.querySelector("meta[name=theme-color]");
  const color = document.body.style.getPropertyValue("--surface-container");

  themeColorMeta?.setAttribute('content', color);
};