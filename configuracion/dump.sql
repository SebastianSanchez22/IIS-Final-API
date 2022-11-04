-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: finalapi
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `batallas`
--

DROP TABLE IF EXISTS `batallas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `batallas` (
  `id_heroe` int NOT NULL,
  `id_monstruo` int NOT NULL,
  PRIMARY KEY (`id_heroe`,`id_monstruo`),
  KEY `fk_id_monstruo` (`id_monstruo`),
  CONSTRAINT `fk_id_heroe` FOREIGN KEY (`id_heroe`) REFERENCES `heroes` (`id_heroe`) ON DELETE CASCADE,
  CONSTRAINT `fk_id_monstruo` FOREIGN KEY (`id_monstruo`) REFERENCES `monstruos` (`id_monstruo`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batallas`
--

LOCK TABLES `batallas` WRITE;
/*!40000 ALTER TABLE `batallas` DISABLE KEYS */;
/*!40000 ALTER TABLE `batallas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `celulasmalignas`
--

DROP TABLE IF EXISTS `celulasmalignas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `celulasmalignas` (
  `id_celula` int NOT NULL AUTO_INCREMENT,
  `nombreCelula` varchar(50) NOT NULL,
  `rangoLetalidad` varchar(2) NOT NULL,
  PRIMARY KEY (`id_celula`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `celulasmalignas`
--

LOCK TABLES `celulasmalignas` WRITE;
/*!40000 ALTER TABLE `celulasmalignas` DISABLE KEYS */;
INSERT INTO `celulasmalignas` VALUES (1,'Celula monstruosa','B'),(2,'Celula Letal 2','B');
/*!40000 ALTER TABLE `celulasmalignas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comidas`
--

DROP TABLE IF EXISTS `comidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comidas` (
  `id_comida` int NOT NULL AUTO_INCREMENT,
  `nombreComida` varchar(50) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`id_comida`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comidas`
--

LOCK TABLES `comidas` WRITE;
/*!40000 ALTER TABLE `comidas` DISABLE KEYS */;
/*!40000 ALTER TABLE `comidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `heroes`
--

DROP TABLE IF EXISTS `heroes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `heroes` (
  `id_heroe` int NOT NULL AUTO_INCREMENT,
  `nombreHeroe` varchar(50) NOT NULL,
  `rango` varchar(2) NOT NULL,
  `habilidad` varchar(50) NOT NULL,
  `lugarResidencia` varchar(70) NOT NULL,
  `telefono` bigint NOT NULL,
  `invitadoSaitama` varchar(2) NOT NULL DEFAULT 'NO',
  PRIMARY KEY (`id_heroe`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `heroes`
--

LOCK TABLES `heroes` WRITE;
/*!40000 ALTER TABLE `heroes` DISABLE KEYS */;
INSERT INTO `heroes` VALUES (1,'Saitama','A','Fuerza inconmesurable','Ciudad Z',3116326593,'NO'),(2,'Heroe 1','A','Super Habilidad 1','Residencia Heroe',3116326593,'NO'),(3,'Heroe 2','S','Super Habilidad 2','Residencia Heroe 2',3116326593,'NO'),(4,'Heroe 3','A','Super Habilidad 3','Residencia Heroe 3',3116326593,'NO'),(5,'Heroe 4','A','Super Habilidad 4','Residencia Heroe 4',3116326593,'NO'),(6,'Heroe 5','S','Super Habilidad 5','Residencia Heroe 5',3116326593,'NO'),(7,'Heroe 6','A','Super Habilidad 6','Residencia Heroe 6',3116326593,'NO'),(8,'Heroe 7','S','Super Habilidad 7','Residencia Heroe 7',3116326593,'NO'),(9,'Heroe 8','C','Super Habilidad 8','Residencia Heroe 8',3116326593,'NO'),(10,'Heroe 9','A','Super Habilidad 9','Residencia Heroe 9',3116326593,'NO'),(11,'Heroe 10','B','Super Habilidad 10','Residencia Heroe 10',3116326593,'NO'),(12,'Heroe 11','A','Super Habilidad 11','Residencia Heroe 11',3116326593,'NO'),(13,'Heroe 12','C','Super Habilidad 12','Residencia Heroe 12',3116326593,'NO'),(14,'Heroe 13','S','Super Habilidad 13','Residencia Heroe 13',3116326593,'NO');
/*!40000 ALTER TABLE `heroes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monstruos`
--

DROP TABLE IF EXISTS `monstruos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monstruos` (
  `id_monstruo` int NOT NULL AUTO_INCREMENT,
  `id_celula` int NOT NULL,
  `nombreMonstruo` varchar(50) NOT NULL,
  `nivelAmenaza` varchar(2) NOT NULL,
  PRIMARY KEY (`id_monstruo`),
  KEY `fk_id_celula` (`id_celula`),
  CONSTRAINT `fk_id_celula` FOREIGN KEY (`id_celula`) REFERENCES `celulasmalignas` (`id_celula`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monstruos`
--

LOCK TABLES `monstruos` WRITE;
/*!40000 ALTER TABLE `monstruos` DISABLE KEYS */;
/*!40000 ALTER TABLE `monstruos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partidos`
--

DROP TABLE IF EXISTS `partidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partidos` (
  `id_partido` int NOT NULL AUTO_INCREMENT,
  `nombrePartido` varchar(50) NOT NULL,
  PRIMARY KEY (`id_partido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partidos`
--

LOCK TABLES `partidos` WRITE;
/*!40000 ALTER TABLE `partidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `partidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patrocinadores`
--

DROP TABLE IF EXISTS `patrocinadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patrocinadores` (
  `id_patrocinador` int NOT NULL AUTO_INCREMENT,
  `nombrePatrocinador` varchar(50) NOT NULL,
  `tipo` varchar(8) NOT NULL,
  PRIMARY KEY (`id_patrocinador`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patrocinadores`
--

LOCK TABLES `patrocinadores` WRITE;
/*!40000 ALTER TABLE `patrocinadores` DISABLE KEYS */;
/*!40000 ALTER TABLE `patrocinadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patrocinadores_heroes`
--

DROP TABLE IF EXISTS `patrocinadores_heroes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patrocinadores_heroes` (
  `id_patrocinio` int NOT NULL AUTO_INCREMENT,
  `id_patrocinador` int NOT NULL,
  `id_heroe` int NOT NULL,
  PRIMARY KEY (`id_patrocinio`,`id_patrocinador`,`id_heroe`),
  KEY `fk_id_patrocinador` (`id_patrocinador`),
  KEY `fk2_id_heroe` (`id_heroe`),
  CONSTRAINT `fk2_id_heroe` FOREIGN KEY (`id_heroe`) REFERENCES `heroes` (`id_heroe`) ON DELETE CASCADE,
  CONSTRAINT `fk_id_patrocinador` FOREIGN KEY (`id_patrocinador`) REFERENCES `patrocinadores` (`id_patrocinador`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patrocinadores_heroes`
--

LOCK TABLES `patrocinadores_heroes` WRITE;
/*!40000 ALTER TABLE `patrocinadores_heroes` DISABLE KEYS */;
/*!40000 ALTER TABLE `patrocinadores_heroes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patrocinadores_monstruos`
--

DROP TABLE IF EXISTS `patrocinadores_monstruos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patrocinadores_monstruos` (
  `id_patrocinio` int NOT NULL AUTO_INCREMENT,
  `id_patrocinador` int NOT NULL,
  `id_monstruo` int NOT NULL,
  PRIMARY KEY (`id_patrocinio`,`id_patrocinador`,`id_monstruo`),
  KEY `fk2_id_patrocinador` (`id_patrocinador`),
  KEY `fk3_id_monstruo` (`id_monstruo`),
  CONSTRAINT `fk2_id_patrocinador` FOREIGN KEY (`id_patrocinador`) REFERENCES `patrocinadores` (`id_patrocinador`) ON DELETE CASCADE,
  CONSTRAINT `fk3_id_monstruo` FOREIGN KEY (`id_monstruo`) REFERENCES `monstruos` (`id_monstruo`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patrocinadores_monstruos`
--

LOCK TABLES `patrocinadores_monstruos` WRITE;
/*!40000 ALTER TABLE `patrocinadores_monstruos` DISABLE KEYS */;
/*!40000 ALTER TABLE `patrocinadores_monstruos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videojuegos`
--

DROP TABLE IF EXISTS `videojuegos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videojuegos` (
  `id_videojuego` int NOT NULL AUTO_INCREMENT,
  `nombreVideojuego` varchar(50) NOT NULL,
  PRIMARY KEY (`id_videojuego`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videojuegos`
--

LOCK TABLES `videojuegos` WRITE;
/*!40000 ALTER TABLE `videojuegos` DISABLE KEYS */;
/*!40000 ALTER TABLE `videojuegos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-04  7:09:18
