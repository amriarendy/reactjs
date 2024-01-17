-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2022 at 10:29 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `gender`, `createdAt`, `updatedAt`) VALUES
(1, 'John Doe', 'john@gmail.com', 'Male', '2022-12-06 07:50:25', '2022-12-06 07:50:25'),
(2, 'Johny Cage', 'johnycage@gmail.com', 'Male', '2022-12-06 07:50:32', '2022-12-06 07:50:32'),
(3, 'Liu Kang', 'liukang@mortalcommbat.com', 'Male', '2022-12-06 07:51:30', '2022-12-06 07:51:30'),
(4, 'Kung Law', 'kunglaw@mortalcommbat.com', 'Male', '2022-12-06 07:51:42', '2022-12-06 07:51:42'),
(5, 'Rayden', 'lightrayden@mortalcommbat.com', 'Male', '2022-12-06 07:55:03', '2022-12-06 07:57:24'),
(7, 'Sub Zero', 'subzero@mortalcommbat.com', 'Male', '2022-12-07 09:10:37', '2022-12-07 09:19:28'),
(8, 'Sonya Blade', 'sonya@mortalcombat.com', 'female', '2022-12-07 09:25:26', '2022-12-07 09:25:26'),
(10, 'Kitana', 'kitana@mortalcombat.com', 'female', '2022-12-07 09:28:22', '2022-12-07 09:28:22'),
(11, 'Mileena', 'mileena@gmail.com', 'female', '2022-12-07 09:28:41', '2022-12-07 09:28:41'),
(12, 'Cassie Cage', 'cassiecage@mortalcombat.com', 'female', '2022-12-07 09:29:13', '2022-12-07 09:29:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
