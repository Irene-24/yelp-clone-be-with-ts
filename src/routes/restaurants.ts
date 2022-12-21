import { Request, Response, Router } from "express";

export default (app: Router) => {
  app.get("/rest", (req: Request, res: Response) => {
    return res.json({ message: "Restaurants" });
  });
};
