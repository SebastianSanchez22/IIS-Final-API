import express from "express";
import router from "./routes/index.routes.js";

const app = express();

// Puerto
const port = 4000;

// Leer formato JSON
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
