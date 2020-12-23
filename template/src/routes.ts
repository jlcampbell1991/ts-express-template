import express from "express";
import {Request, Response, Router} from "express";

class Routes {
  public router: Router;

  constructor() {
    this.router = express.Router();

    this.router.get('/ping', (_: Request, res: Response) => {
      res.send('pong');
    });
  }
}

export default Routes;
