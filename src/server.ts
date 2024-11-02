import express from "express";
import "reflect-metadata";
import "./containers";
import { authRoutes } from "./routes/auth.routes";
import { secureRoutes } from "./routes/secureRputes";

const app = express();
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/secure", secureRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started on port 3000!");
});
