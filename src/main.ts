import { mount } from 'svelte'
import "beercss";
import "material-dynamic-colors";
import "./style.scss"
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app