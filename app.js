const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(helmet()); // Configuración del middleware Helmet para la seguridad
app.use(cors()); // Configuración del middleware CORS para permitir solicitudes desde diferentes dominios
app.use(morgan("combined")); // Configuración del middleware Morgan para el registro de solicitudes
app.use(express.json()); // Configuración del middleware para analizar el cuerpo de la solicitud como JSON

const routes = require("./routes/index.js");
app.use("/", routes); // Configuración de las rutas en el punto de entrada '/'

const port = 5000;

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`); // Mensaje que se muestra cuando el servidor se inicia correctamente
});
