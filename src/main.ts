import { mount } from 'svelte';
import "beercss";
import "material-dynamic-colors";
import "./style.scss";
import App from './App.svelte';
import { userTheme } from "./components/theme";

const app = mount(App, {
  target: document.getElementById('app')!,
})

// テーマカラー：初期値またはローカルストレージからセット
document.addEventListener("DOMContentLoaded", () => {
  userTheme(localStorage.getItem("userThemeColor") ?? undefined);
});

export default app