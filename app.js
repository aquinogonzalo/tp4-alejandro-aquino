const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

const routes = require("./routes/index.js");
app.use("/", routes);

const port = 6000; //Cabe aclarar que esto no funciona en windows

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

