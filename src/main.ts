import "the-new-css-reset/css/reset.css"
import "./app.css";
import App from "./App.svelte";

var app = new App({
  target: document.body,
});

export default app;
