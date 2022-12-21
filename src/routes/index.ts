import { Router } from "express";
import restaurants from "./restaurants.route";

export default () => {
  const app = Router();

  restaurants(app);

  return app;
};
