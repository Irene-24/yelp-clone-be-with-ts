import { Router } from "express";
import restaurants from "./restaurants";

export default () => {
  const app = Router();

  restaurants(app);

  return app;
};
