-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2025 at 08:28 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aac_block_greatwall`
--

-- --------------------------------------------------------

--
-- Table structure for table `project_blogs_article`
--

CREATE TABLE `project_blogs_article` (
  `id` bigint(20) NOT NULL,
  `content_type` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `initial_text` varchar(255) DEFAULT NULL,
  `detail_text` varchar(1000) DEFAULT NULL,
  `image_url` varchar(500) NOT NULL,
  `redirect_url` varchar(500) DEFAULT NULL,
  `position` int(11) DEFAULT 0,
  `is_active` tinyint(1) DEFAULT 1,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_blogs_article`
--

INSERT INTO `project_blogs_article` (`id`, `content_type`, `title`, `initial_text`, `detail_text`, `image_url`, `redirect_url`, `position`, `is_active`, `start_date`, `end_date`, `created_at`, `updated_at`) VALUES
(1, 'Projects', 'try', 'try', 'try', 'http://localhost:2000/Images/1759040922669.png', '', 1, 1, '2025-09-18 12:14:53', NULL, '2025-09-18 12:14:53', '2025-09-18 12:14:53'),
(2, 'News & Articles', 'h', 'h', 'h', 'http://localhost:2000/Images/1758553345721.png', '', 1, 1, '2025-09-18 12:17:07', NULL, '2025-09-18 12:17:07', '2025-09-18 12:17:07'),
(3, 'News & Articles', 'h', 'h', 'h', 'http://localhost:2000/Images/1758463164879.png', '', 1, 1, '2025-09-18 12:17:51', NULL, '2025-09-18 12:17:51', '2025-09-18 12:17:51');

-- --------------------------------------------------------

--
-- Table structure for table `website_banners`
--

CREATE TABLE `website_banners` (
  `id` bigint(20) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `page_name` varchar(50) NOT NULL,
  `img_url` varchar(500) NOT NULL,
  `img_name` varchar(50) DEFAULT NULL,
  `position` int(11) DEFAULT 0,
  `img_show` char(2) NOT NULL DEFAULT 'Y',
  `is_active` tinyint(1) DEFAULT 1,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `website_banners`
--

INSERT INTO `website_banners` (`id`, `type`, `page_name`, `img_url`, `img_name`, `position`, `img_show`, `is_active`, `start_date`, `end_date`, `created_at`, `updated_at`) VALUES
(1, 'Slide', 'Home', 'http://localhost:2000/Images/1758792418722.png', 'Home-B.png', 1, 'Y', 1, '2025-09-16 06:53:23', NULL, '2025-09-16 06:53:23', '2025-09-16 06:53:23'),
(2, 'Slide', 'Home', 'http://localhost:2000/Images/1758466483101.png', 'Home-A.png', 2, 'Y', 1, '2025-09-16 06:53:23', NULL, '2025-09-16 06:53:23', '2025-09-16 06:53:23'),
(3, 'Banner', 'About', 'http://localhost:2000/Images/1758153810830.png', 'S_c.png', 1, 'Y', 1, '2025-09-16 06:53:45', NULL, '2025-09-16 06:53:45', '2025-09-16 06:53:45'),
(4, 'Banner', 'ACC Blocks', 'http://localhost:2000/Images/1758490018732.png', 'jakaj.png', 1, 'N', 1, '2025-09-18 11:34:40', NULL, '2025-09-18 11:34:40', '2025-09-18 11:38:52'),
(5, 'Banner', 'ACC Blocks', 'http://localhost:2000/Images/1758625006853.png', 'banner3.png', 1, 'Y', 1, '2025-09-18 11:38:52', NULL, '2025-09-18 11:38:52', '2025-09-18 11:38:52'),
(6, 'Banner', 'ACC Panels', 'http://localhost:2000/Images/1758833969594.png', 'banner2.png', 1, 'Y', 1, '2025-09-18 11:40:14', NULL, '2025-09-18 11:40:14', '2025-09-18 11:40:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `project_blogs_article`
--
ALTER TABLE `project_blogs_article`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `website_banners`
--
ALTER TABLE `website_banners`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `project_blogs_article`
--
ALTER TABLE `project_blogs_article`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `website_banners`
--
ALTER TABLE `website_banners`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
