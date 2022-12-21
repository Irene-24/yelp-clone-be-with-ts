import { Application } from "express";
import expressLoader from "./express";

export default async ({ expressApp }: { expressApp: Application }) => {
  //connect db

  //connect to express
  expressLoader({ app: expressApp });
  console.info("✌️ Express loaded");
};
