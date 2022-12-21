import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { serializeError } from "serialize-error";
import omit from "lodash/omit";

import routes from "@routes/index";
import config from "@src/config";
import { ApiError, NotFoundError } from "@src/utils/APIError";

export default ({ app }: { app: express.Application }) => {
  app.use(morgan("tiny"));

  app.get(["/", "/test", "/status"], async (req, res) => {
    res.json({ message: `Server [${config.env}] is online!` });
  });

  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  app.enable("trust proxy");

  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api/v1", routes());

  app.use((req: Request, res: Response, next: NextFunction) =>
    next(new NotFoundError(req.path))
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500);
    const error = omit(
      serializeError(err),
      err.omitStack ? ["stack", "omitStack"] : "omitStack"
    );

    res.json({
      error,
    });
  });
};
