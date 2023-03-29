CREATE DATABASE  IF NOT EXISTS `octa_agro` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `octa_agro`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: octa_agro
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
-- Table structure for table `avalia`
--

DROP TABLE IF EXISTS `avalia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avalia` (
  `FK_Usuario_Padrao_uso_cod` int DEFAULT NULL,
  `FK_Produto_id_produto` int DEFAULT NULL,
  KEY `FK_AVALIA_1` (`FK_Usuario_Padrao_uso_cod`),
  KEY `FK_AVALIA_2` (`FK_Produto_id_produto`),
  CONSTRAINT `FK_AVALIA_1` FOREIGN KEY (`FK_Usuario_Padrao_uso_cod`) REFERENCES `usuario_padrao` (`uso_cod`) ON DELETE RESTRICT,
  CONSTRAINT `FK_AVALIA_2` FOREIGN KEY (`FK_Produto_id_produto`) REFERENCES `produto` (`id_produto`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avalia`
--

LOCK TABLES `avalia` WRITE;
/*!40000 ALTER TABLE `avalia` DISABLE KEYS */;
/*!40000 ALTER TABLE `avalia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `criterio_de_avaliacao`
--

DROP TABLE IF EXISTS `criterio_de_avaliacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `criterio_de_avaliacao` (
  `id_criterio` int NOT NULL,
  `metodo_criterio` varchar(1000) NOT NULL,
  PRIMARY KEY (`id_criterio`),
  UNIQUE KEY `id_criterio` (`id_criterio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `criterio_de_avaliacao`
--

LOCK TABLES `criterio_de_avaliacao` WRITE;
/*!40000 ALTER TABLE `criterio_de_avaliacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `criterio_de_avaliacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crud_master_usuario_padrao_fornecedores_produto_estoque`
--

DROP TABLE IF EXISTS `crud_master_usuario_padrao_fornecedores_produto_estoque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crud_master_usuario_padrao_fornecedores_produto_estoque` (
  `fk_MASTER_ID_Master` int DEFAULT NULL,
  `fk_Usuario_Padrao_uso_cod` int DEFAULT NULL,
  `fk_FORNECEDORES_id_fornecedor` int DEFAULT NULL,
  `fk_Produto_id_produto` int DEFAULT NULL,
  `fk_ESTOQUE_id_estoque` int DEFAULT NULL,
  KEY `FK_CRUD_MASTER_Usuario_Padrao_FORNECEDORES_Produto_ESTOQUE_1` (`fk_MASTER_ID_Master`),
  KEY `FK_CRUD_MASTER_Usuario_Padrao_FORNECEDORES_Produto_ESTOQUE_2` (`fk_Usuario_Padrao_uso_cod`),
  KEY `FK_CRUD_MASTER_Usuario_Padrao_FORNECEDORES_Produto_ESTOQUE_3` (`fk_FORNECEDORES_id_fornecedor`),
  KEY `FK_CRUD_MASTER_Usuario_Padrao_FORNECEDORES_Produto_ESTOQUE_4` (`fk_Produto_id_produto`),
  KEY `FK_CRUD_MASTER_Usuario_Padrao_FORNECEDORES_Produto_ESTOQUE_5` (`fk_ESTOQUE_id_estoque`),
  CONSTRAINT `FK_CRUD_MASTER_Usuario_Padrao_FORNECEDORES_Produto_ESTOQUE_1` FOREIGN KEY (`fk_MASTER_ID_Master`) REFERENCES `master` (`ID_Master`) ON DELETE RESTRICT,
  CONSTRAINT `FK_CRUD_MASTER_Usuario_Padrao_FORNECEDORES_Produto_ESTOQUE_2` FOREIGN KEY (`fk_Usuario_Padrao_uso_cod`) REFERENCES `usuario_padrao` (`uso_cod`),
  CONSTRAINT `FK_CRUD_MASTER_Usuario_Padrao_FORNECEDORES_Produto_ESTOQUE_3` FOREIGN KEY (`fk_FORNECEDORES_id_fornecedor`) REFERENCES `fornecedores` (`id_fornecedor`),
  CONSTRAINT `FK_CRUD_MASTER_Usuario_Padrao_FORNECEDORES_Produto_ESTOQUE_4` FOREIGN KEY (`fk_Produto_id_produto`) REFERENCES `produto` (`id_produto`),
  CONSTRAINT `FK_CRUD_MASTER_Usuario_Padrao_FORNECEDORES_Produto_ESTOQUE_5` FOREIGN KEY (`fk_ESTOQUE_id_estoque`) REFERENCES `estoque` (`id_estoque`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crud_master_usuario_padrao_fornecedores_produto_estoque`
--

LOCK TABLES `crud_master_usuario_padrao_fornecedores_produto_estoque` WRITE;
/*!40000 ALTER TABLE `crud_master_usuario_padrao_fornecedores_produto_estoque` DISABLE KEYS */;
/*!40000 ALTER TABLE `crud_master_usuario_padrao_fornecedores_produto_estoque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estoque`
--

DROP TABLE IF EXISTS `estoque`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estoque` (
  `id_estoque` int NOT NULL,
  `estoca_produto` tinyint(1) NOT NULL,
  `quant_prod` double(20,2) NOT NULL,
  PRIMARY KEY (`id_estoque`),
  UNIQUE KEY `id_estoque` (`id_estoque`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estoque`
--

LOCK TABLES `estoque` WRITE;
/*!40000 ALTER TABLE `estoque` DISABLE KEYS */;
/*!40000 ALTER TABLE `estoque` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fornece`
--

DROP TABLE IF EXISTS `fornece`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fornece` (
  `FK_Produto_id_produto` int DEFAULT NULL,
  `FK_FORNECEDORES_id_fornecedor` int DEFAULT NULL,
  KEY `FK_FORNECE_1` (`FK_Produto_id_produto`),
  KEY `FK_FORNECE_2` (`FK_FORNECEDORES_id_fornecedor`),
  CONSTRAINT `FK_FORNECE_1` FOREIGN KEY (`FK_Produto_id_produto`) REFERENCES `produto` (`id_produto`) ON DELETE RESTRICT,
  CONSTRAINT `FK_FORNECE_2` FOREIGN KEY (`FK_FORNECEDORES_id_fornecedor`) REFERENCES `fornecedores` (`id_fornecedor`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fornece`
--

LOCK TABLES `fornece` WRITE;
/*!40000 ALTER TABLE `fornece` DISABLE KEYS */;
/*!40000 ALTER TABLE `fornece` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fornecedores`
--

DROP TABLE IF EXISTS `fornecedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fornecedores` (
  `id_fornecedor` int NOT NULL,
  `nome_fornecedor` char(30) NOT NULL,
  `data_cadastro` date NOT NULL,
  `status_fornecedor` tinyint(1) NOT NULL,
  `CNPJ` char(18) NOT NULL,
  PRIMARY KEY (`id_fornecedor`),
  UNIQUE KEY `id_fornecedor` (`id_fornecedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fornecedores`
--

LOCK TABLES `fornecedores` WRITE;
/*!40000 ALTER TABLE `fornecedores` DISABLE KEYS */;
/*!40000 ALTER TABLE `fornecedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `master`
--

DROP TABLE IF EXISTS `master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `master` (
  `ID_Master` int NOT NULL,
  PRIMARY KEY (`ID_Master`),
  UNIQUE KEY `ID_Master` (`ID_Master`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `master`
--

LOCK TABLES `master` WRITE;
/*!40000 ALTER TABLE `master` DISABLE KEYS */;
/*!40000 ALTER TABLE `master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `possui`
--

DROP TABLE IF EXISTS `possui`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `possui` (
  `fk_Produto_id_produto` int DEFAULT NULL,
  `fk_ESTOQUE_id_estoque` int DEFAULT NULL,
  KEY `FK_possui_1` (`fk_Produto_id_produto`),
  KEY `FK_possui_2` (`fk_ESTOQUE_id_estoque`),
  CONSTRAINT `FK_possui_1` FOREIGN KEY (`fk_Produto_id_produto`) REFERENCES `produto` (`id_produto`) ON DELETE RESTRICT,
  CONSTRAINT `FK_possui_2` FOREIGN KEY (`fk_ESTOQUE_id_estoque`) REFERENCES `estoque` (`id_estoque`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `possui`
--

LOCK TABLES `possui` WRITE;
/*!40000 ALTER TABLE `possui` DISABLE KEYS */;
/*!40000 ALTER TABLE `possui` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `id_produto` int NOT NULL,
  `nome_prod` char(30) NOT NULL,
  `data_entrada_empresa` date NOT NULL,
  `data_validade` date NOT NULL,
  `data_entrada_estoque` date NOT NULL,
  `data_saida_estoque_empresa` date NOT NULL,
  `quantidade` double(20,2) NOT NULL,
  PRIMARY KEY (`id_produto`),
  UNIQUE KEY `id_produto` (`id_produto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tem`
--

DROP TABLE IF EXISTS `tem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tem` (
  `fk_Produto_id_produto` int DEFAULT NULL,
  `fk_CRITERIO_DE_AVALIACAO_id_criterio` int DEFAULT NULL,
  KEY `FK_tem_1` (`fk_Produto_id_produto`),
  KEY `FK_tem_2` (`fk_CRITERIO_DE_AVALIACAO_id_criterio`),
  CONSTRAINT `FK_tem_1` FOREIGN KEY (`fk_Produto_id_produto`) REFERENCES `produto` (`id_produto`) ON DELETE RESTRICT,
  CONSTRAINT `FK_tem_2` FOREIGN KEY (`fk_CRITERIO_DE_AVALIACAO_id_criterio`) REFERENCES `criterio_de_avaliacao` (`id_criterio`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tem`
--

LOCK TABLES `tem` WRITE;
/*!40000 ALTER TABLE `tem` DISABLE KEYS */;
/*!40000 ALTER TABLE `tem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_padrao`
--

DROP TABLE IF EXISTS `usuario_padrao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_padrao` (
  `uso_cod` int NOT NULL,
  `uso_nome` char(50) NOT NULL,
  `uso_funcao` char(20) NOT NULL,
  `uso_senha` char(20) NOT NULL,
  PRIMARY KEY (`uso_cod`),
  UNIQUE KEY `uso_cod` (`uso_cod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_padrao`
--

LOCK TABLES `usuario_padrao` WRITE;
/*!40000 ALTER TABLE `usuario_padrao` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_padrao` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-27  8:05:59
