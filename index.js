import { startServer } from "./src/config/server.js";
import { connectDatabase } from "./src/config/database.js";

const startApp = async () => {
  await connectDatabase(); // Conectar a la base de datos
  startServer(); // Iniciar el servidor
};

startApp();
