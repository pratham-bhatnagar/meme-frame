import { Frog } from "frog";
import swapFrame from "./frames/swap";
import { Home } from "./web/home";
import { Swaps } from "./web/swaps";

export const app = new Frog();

app.get("/", (ctx) => ctx.html(<Home />));

app.get("/swaps", (ctx) => ctx.html(<Swaps />));

app.route("/swap", swapFrame);

export default app;
