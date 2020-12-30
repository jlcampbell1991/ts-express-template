import App from './app';
import Logger from './logger';
import Routes from "./routes";

const port = parseInt(process.env.PORT, 0);
const routes = new Routes();
const logger = new Logger();
const app = new App(routes, port, logger);

app.listen();
