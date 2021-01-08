import "../css/app.css";
import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game("canvas", "title");
  game.init();
});
