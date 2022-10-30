import express from 'express';

import { encontrar_Batallas, guardar_Batalla, eliminar_Batalla } from '../controllers/batallasController.js';
import { encontrar_Celulas_Malignas, guardar_Celula_Maligna, eliminar_Celula_Maligna} from '../controllers/celulasMalignasControlller.js';
import { encontrar_Comidas, guardar_Comida, eliminar_Comida } from '../controllers/comidasController.js';
import { encontrar_Heroes, guardar_Heroe, actualizar_Heroe, eliminar_Heroe } from '../controllers/heroesController.js';
import { encontrar_Monstruos, guardar_Monstruo, eliminar_Monstruo } from '../controllers/monstruosController.js';
import { encontrar_Partidos, guardar_Partido, eliminar_Partido } from '../controllers/partidosController.js';
import { encontrar_Patrocinadores, guardar_Patrocinador, guardar_Patrocinio_Heroe,
     guardar_Patrocinio_Monstruo, eliminar_Patrocinador } from '../controllers/patrocinadoresController.js';
import { encontrar_Videojuegos, guardar_Videojuego, eliminar_Videojuego } from '../controllers/videojuegosController.js';

const router = express.Router();

router.get('/batallas', encontrar_Batallas);
router.get('/celulasmalignas', encontrar_Celulas_Malignas);
router.get('/comidas', encontrar_Comidas);
router.get('/heroes', encontrar_Heroes);
router.get('/monstruos', encontrar_Monstruos);
router.get('/partidos', encontrar_Partidos);
router.get('/patrocinadores', encontrar_Patrocinadores);
router.get('/videojuegos', encontrar_Videojuegos);

//router.get('/', p_home);

export default router;