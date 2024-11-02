import express from "express";
import helmet from "helmet";

const app = express();

// Configuração do Helmet para proteger a aplicação
app.use(helmet());
