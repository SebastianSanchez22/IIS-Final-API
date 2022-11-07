import express from "express";
import router from "./routes/index.routes.js";
import db from "./configuracion/db.js";

const app = express();

// Chequear base de datos
db.authenticate()
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.log(err));

// Puerto
const port = 4000;

// Leer formato JSON
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/', router);
app.use('/batallas', router);
app.use('/celulasmalignas', router);
app.use('/comidas', router);
app.use('/heroes', router);
app.use('/monstruos', router);
app.use('/partidos', router);
app.use('/patrocinadores', router);
app.use('/videojuegos', router);
app.use('/top10', router);
app.use('/datosHeroe', router);
app.use('/invitadosCasa', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
