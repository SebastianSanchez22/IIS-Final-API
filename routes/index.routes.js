import express from 'express';

import { encontrar_Batallas, guardar_Batalla, eliminar_Batalla } from '../controllers/batallasController.js';
import { encontrar_Celulas_Malignas, guardar_Celula_Maligna, eliminar_Celula_Maligna} from '../controllers/celulasMalignasControlller.js';
import { encontrar_Comidas, guardar_Comida, eliminar_Comida } from '../controllers/comidasController.js';
import { encontrar_Heroes, top10Heroes, guardar_Heroe, actualizar_Heroe, eliminar_Heroe } from '../controllers/heroesController.js';
import { encontrar_Monstruos, guardar_Monstruo, eliminar_Monstruo } from '../controllers/monstruosController.js';
import { encontrar_Partidos, guardar_Partido, eliminar_Partido } from '../controllers/partidosController.js';
import { encontrar_Patrocinadores, encontrar_Patrocinadores_Heroe, guardar_Patrocinador, guardar_Patrocinio_Heroe, guardar_Patrocinio_Monstruo, eliminar_Patrocinador,
      eliminar_Patrocinio_Heroe, eliminar_Patrocinio_Monstruo } from '../controllers/patrocinadoresController.js';
import { encontrar_Videojuegos, guardar_Videojuego, eliminar_Videojuego } from '../controllers/videojuegosController.js';

const router = express.Router();

router.get('/batallas', encontrar_Batallas);
router.get('/celulasmalignas', encontrar_Celulas_Malignas);
router.get('/comidas', encontrar_Comidas);
router.get('/heroes', encontrar_Heroes);
router.get('/monstruos', encontrar_Monstruos);
router.get('/partidos', encontrar_Partidos);
router.get('/patrocinadores', encontrar_Patrocinadores);
router.get('/patrocinadores/patrocinio_Heroe/:id_heroe', encontrar_Patrocinadores_Heroe);
router.get('/videojuegos', encontrar_Videojuegos);

router.get('/top10', top10Heroes)

router.post('/batallas', guardar_Batalla);
router.post('/celulasmalignas', guardar_Celula_Maligna);
router.post('/comidas', guardar_Comida);
router.post('/heroes', guardar_Heroe);
router.post('/monstruos', guardar_Monstruo);
router.post('/partidos', guardar_Partido);
router.post('/patrocinadores', guardar_Patrocinador);
router.post('/patrocinadores/patrocinio_Heroe', guardar_Patrocinio_Heroe);
router.post('/patrocinadores/patrocinio_Monstruo', guardar_Patrocinio_Monstruo);
router.post('/videojuegos', guardar_Videojuego);

router.patch('/heroes/:id_heroe', actualizar_Heroe);

router.delete('/batallas/:id_batalla', eliminar_Batalla);
router.delete('/celulasmalignas/:id_celula', eliminar_Celula_Maligna);
router.delete('/comidas/:id_comida', eliminar_Comida);
router.delete('/heroes/:id_heroe', eliminar_Heroe);
router.delete('/monstruos/:id_monstruo', eliminar_Monstruo);
router.delete('/partidos/:id_partido', eliminar_Partido);
router.delete('/patrocinadores/:id_patrocinador', eliminar_Patrocinador);
router.delete('/patrocinadores/patrocinio_Heroe/:id_patrocinio', eliminar_Patrocinio_Heroe);
router.delete('/patrocinadores/patrocinio_Monstruo/:id_patrocinio', eliminar_Patrocinio_Monstruo);
router.delete('/videojuegos/:id_videojuego', eliminar_Videojuego);

//router.get('/', p_home);

export default router;