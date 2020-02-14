-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 14, 2020 at 04:56 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `parqueaderos`
--

-- --------------------------------------------------------

--
-- Table structure for table `empresas`
--

CREATE TABLE `empresas` (
  `id` int(6) NOT NULL,
  `nombre` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `direccion` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `latitud` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `longitud` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `num_espacios` int(50) NOT NULL,
  `fraccion` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `precio` double NOT NULL,
  `descuento` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `empresas`
--

INSERT INTO `empresas` (`id`, `nombre`, `direccion`, `latitud`, `longitud`, `num_espacios`, `fraccion`, `precio`, `descuento`) VALUES
(1, 'Parking Mercadillo', 'Mercadillo', '-4.017184', '-79.202588', 20, 'Por hora', 0.5, 2.5),
(2, 'ParkeaT', 'Sucre', '-4.008707', '-79.202331', 12, 'Por cuarto de hora', 0.25, 3.5),
(6, 'test', 'test', '123', '123123', 0, 'asdas', 12, 1);

-- --------------------------------------------------------

--
-- Table structure for table `espacios`
--

CREATE TABLE `espacios` (
  `id` int(11) NOT NULL,
  `empresaId` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `cubierto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `espacios`
--

INSERT INTO `espacios` (`id`, `empresaId`, `estado`, `cubierto`) VALUES
(1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `pagos`
--

CREATE TABLE `pagos` (
  `id` int(11) NOT NULL,
  `valor` double NOT NULL,
  `empresaId` int(11) NOT NULL,
  `tarjetaId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pagos`
--

INSERT INTO `pagos` (`id`, `valor`, `empresaId`, `tarjetaId`) VALUES
(1, 122, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `tarjetaId` int(11) NOT NULL,
  `horaInicio` date NOT NULL,
  `horaSalida` date NOT NULL,
  `empresaId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `servicios_adicionales`
--

CREATE TABLE `servicios_adicionales` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` double NOT NULL,
  `descuento` double NOT NULL,
  `empresaId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `servicios_adicionales`
--

INSERT INTO `servicios_adicionales` (`id`, `nombre`, `cantidad`, `precio`, `descuento`, `empresaId`) VALUES
(2, 'Limpieza', 1, 100, 10, 6);

-- --------------------------------------------------------

--
-- Table structure for table `tarjetas`
--

CREATE TABLE `tarjetas` (
  `id` int(11) NOT NULL,
  `saldo` double NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tarjetas`
--

INSERT INTO `tarjetas` (`id`, `saldo`, `estado`) VALUES
(1, 10000, 0),
(2, 500, 1);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `ip` varchar(50) NOT NULL,
  `tarjetaId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `ip`, `tarjetaId`) VALUES
(1, '12666', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `espacios`
--
ALTER TABLE `espacios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `espacios_ibfk_1` (`empresaId`);

--
-- Indexes for table `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pagos_ibfk_1` (`empresaId`),
  ADD KEY `pagos_ibfk_2` (`tarjetaId`);

--
-- Indexes for table `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `empresaId` (`empresaId`),
  ADD KEY `tarjetaId` (`tarjetaId`);

--
-- Indexes for table `servicios_adicionales`
--
ALTER TABLE `servicios_adicionales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `servicios_adicionales_ibfk_1` (`empresaId`);

--
-- Indexes for table `tarjetas`
--
ALTER TABLE `tarjetas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTarjeta` (`tarjetaId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `empresas`
--
ALTER TABLE `empresas`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `espacios`
--
ALTER TABLE `espacios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `servicios_adicionales`
--
ALTER TABLE `servicios_adicionales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tarjetas`
--
ALTER TABLE `tarjetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `espacios`
--
ALTER TABLE `espacios`
  ADD CONSTRAINT `espacios_ibfk_1` FOREIGN KEY (`empresaId`) REFERENCES `empresas` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `pagos_ibfk_1` FOREIGN KEY (`empresaId`) REFERENCES `empresas` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `pagos_ibfk_2` FOREIGN KEY (`tarjetaId`) REFERENCES `tarjetas` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`empresaId`) REFERENCES `empresas` (`id`),
  ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`tarjetaId`) REFERENCES `tarjetas` (`id`);

--
-- Constraints for table `servicios_adicionales`
--
ALTER TABLE `servicios_adicionales`
  ADD CONSTRAINT `servicios_adicionales_ibfk_1` FOREIGN KEY (`empresaId`) REFERENCES `empresas` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`tarjetaId`) REFERENCES `tarjetas` (`id`);
