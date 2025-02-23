import express from "express";
import createHttpError from "http-errors";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

app.get("/", (req, res, next) => {
  //   throw new Error("something went wrong");
  const error = createHttpError(400, "something went wrong");
  throw error;
  res.json({ message: "Welcome to elibs apis" });
});

// Global error Handler
app.use(globalErrorHandler);

export default app;
