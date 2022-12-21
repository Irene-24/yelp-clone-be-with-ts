import { restaurantsController } from "@controllers/restaurants.controller";
import { Request, Response, Router } from "express";

const route = Router();

const fake = async (req: Request, res: Response) => {
  return res.json({ message: `${req.method} for ${req.originalUrl}` });
};

export default (app: Router) => {
  app.use("/restaurants", route);

  //create
  route.post("/", fake);

  //get all
  route.get("/", restaurantsController.getRestaurants);

  //get one
  route.get("/:id", fake);

  //update
  route.put("/:id", fake);

  //delete
  route.delete("/:id", fake);
};
