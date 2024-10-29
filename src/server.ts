import express from "express";
import "reflect-metadata";
import "./containers";
import { authRoutes } from "./routes/authRoutes";

const app = express();
app.use(express.json());
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started on port 3000!");
});
