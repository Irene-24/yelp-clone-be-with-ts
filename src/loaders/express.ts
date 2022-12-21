import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "@routes/index";

interface Err extends Error {
  status: number;
}

export default ({ app }: { app: express.Application }) => {
  app.get(["/", "/test", "/status"], async (req, res) => {
    res.json({ message: "Server is online!" });
  });

  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  app.enable("trust proxy");

  app.use(cors());

  app.use(express.json());

  app.use("/api", routes());

  app.use((req, res, next) => {
    const err: Err = new Error("Not Found") as Err;
    err["status"] = 404;
    next(err);
  });

  /// error handlers
  app.use((err: Err, req: Request, res: Response, next: NextFunction) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === "UnauthorizedError") {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((err: Err, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
