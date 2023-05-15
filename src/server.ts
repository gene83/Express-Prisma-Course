import express from "express";
import router from "./router";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("hellor from express");
  res.status(200);
  res.json({ message: "yo" });
});

app.use("/api", router);

export default app;
