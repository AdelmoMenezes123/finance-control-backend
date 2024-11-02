import Redis from "ioredis";

const redisClient = new Redis({
  host: "localhost", // ou a URL do Redis se for em produção
  port: 6379, // porta padrão do Redis
  // Você pode adicionar autenticação, se necessário, ex: password: 'sua_senha'
});

redisClient.on("connect", () => {
  console.log("Conectado ao Redis");
});

redisClient.on("error", (error) => {
  console.error("Erro de conexão com Redis:", error);
});

export default redisClient;
