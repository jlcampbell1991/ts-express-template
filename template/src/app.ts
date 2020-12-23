import bodyParser from "body-parser";
import express from "express";
import {Application} from "express";
import Routes from './routes';
import Logger from './logger';


class App {
  public app: Application
  private port: number
  private logger: Logger;

  constructor(routes: Routes, port: number) {
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.port = port;

    this.app.use("/", routes.router);

    this.logger = new Logger("App");
  }

  listen(): void {
    this.app.listen(this.port, () => {
      this.logger.info(`Application listening on port ${this.port}`);
    })
  }
}

export default App;
