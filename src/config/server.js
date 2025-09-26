import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import productRoutes from "../product/product.routes.js";
import { PORT } from "./appConfig.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://react-technicaltesting.s3-website-us-west-2.amazonaws.com", // tu frontend
    credentials: true,
  })
);
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/products", productRoutes);
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

export const startServer = () => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en ${`http://localhost:${PORT}`}`);
  });
};
