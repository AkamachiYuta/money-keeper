import "beercss";
import "material-dynamic-colors";
import "./style.scss"

document.querySelectorAll("#nav-drawer a[data-ui]").forEach(a => {
  a.addEventListener("click", () => {
    ui('#nav-drawer');
  });
});