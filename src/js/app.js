import { onInput, onSubmit } from "./cadastro.js";
import { getApp, navegar, render } from "./router.js";

var app = getApp();
if (!app) {
  throw new Error("Container #app não encontrado.");
}

document.body.addEventListener("click", function (event) {
  var link = event.target.closest("a[data-route]");
  if (!link) {
    return;
  }

  event.preventDefault();
  navegar(link.getAttribute("href"));
});

app.addEventListener("submit", onSubmit);
app.addEventListener("input", onInput);
window.addEventListener("popstate", function () {
  render({ focar: true });
});
render();
