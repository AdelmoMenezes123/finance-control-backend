import express from "express";
import "reflect-metadata";
import { authRoutes } from "./routes/auth.routes";
import { financesRoutes } from "./routes/finances.routes";
import { secureRoutes } from "./routes/secureRputes";
import "./shared/container";
import { rateLimiter } from "./shared/middlewares/rateLimiter";

const app = express();
app.use(express.json());
app.use(rateLimiter);
// app.use(express.static("public"));

app.use("/auth", authRoutes);
app.use("/secure", secureRoutes);
app.use("finances", financesRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started on port 3000!");
});
