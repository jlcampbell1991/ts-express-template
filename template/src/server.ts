import App from './app';
import Routes from "./routes";

const port = parseInt(process.env.PORT, 0);
const routes = new Routes();
const app = new App(routes, port);

app.listen();
