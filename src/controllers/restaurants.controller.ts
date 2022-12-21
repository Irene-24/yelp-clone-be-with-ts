import restaurantsService from "@services/restaurants.service";
import { NextFunction, Request, Response } from "express";

import config from "@src/config";
import { errorHandler } from "@src/utils/errorHandler";

const getRestaurants = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const limit = +(req.query?.limit as string) || config.pageSize;
    const restaurants = await restaurantsService.getRestaurants(limit);
    return res.json({ data: restaurants });
  } catch (err: any) {
    next(errorHandler(500, err, true));
  }
};

export const restaurantsController = {
  getRestaurants,
};
