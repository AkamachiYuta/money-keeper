import "beercss";
import "material-dynamic-colors";
import "./style.scss"

// テーマカラー
const userTheme = (userThemeColor: string = "#000000") => {
  ui("theme", userThemeColor);
  localStorage.setItem("userThemeColor", userThemeColor);
}
// 初期値またはローカルストレージからセット
userTheme(localStorage.getItem("userThemeColor") ?? undefined);
// 設定：テーマカラー カラーピッカー
document.querySelector<HTMLInputElement>("#userColorPicker")?.addEventListener("input", (event) => {
  // const target = 
  const userColorPicker = (<HTMLInputElement>event.currentTarget).value;

  if (userColorPicker !== "") userTheme(userColorPicker);
});
// 設定：テーマカラー ファイル指定
// document.querySelector<HTMLInputElement>("#userColorFile")?.addEventListener("input", (e) => {
//   // const target = 
//   const files = (<HTMLInputElement>e.currentTarget).files;
//   const file = (files) ? files[0] : "";

//   if (file !== "") ui("theme", file);
// });

// テーマモード
document.querySelectorAll("[data-user=themeMode]").forEach((userThemeMode) => {
  // アイコンの初期値を設定
  const userThemeModeIcon = userThemeMode?.querySelector("i");
  if (userThemeModeIcon) userThemeModeIcon.textContent = `${ui("mode") == "dark" ? "light" : "dark"}_mode`;
  // テーマモードボタンを押されたとき
  userThemeMode?.addEventListener("click", () => {
    if (userThemeModeIcon) userThemeModeIcon.textContent = `${ui("mode")}_mode`;
    let newMode = ui("mode") == "dark" ? "light" : "dark";
    ui("mode", newMode);
  });
});

// ナビゲーションドロワー
document.querySelectorAll("#nav-drawer a[data-ui]").forEach(a => {
  a.addEventListener("click", () => {
    ui('#nav-drawer');
  });
});