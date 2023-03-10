import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config({
  path: __dirname + `/../.env.${process.env.NODE_ENV}`,
}); // change according to your need

if (envFound.error) {
  throw new Error("⚠️  Couldn't find any .env file  ⚠️");
}

export default {
  port: parseInt(process.env.PORT as string, 10),
  dbConfig: {},
  jwtConfig: {},
  emailConfig: {},
};
