-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 10, 2023 at 09:11 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `welfare`
--

-- --------------------------------------------------------

--
-- Table structure for table `action`
--

CREATE TABLE `action` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description` char(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `action`
--

INSERT INTO `action` (`id`, `description`) VALUES
(1, 'deposit'),
(2, 'deposit-share'),
(3, 'deposit-installment'),
(4, 'withdraw'),
(5, 'withdraw-loan'),
(6, 'withdraw-revoked'),
(7, 'consummable'),
(8, 'consummable-guard'),
(9, 'consummable-water'),
(10, 'consummable-security'),
(11, 'consummable-option1'),
(12, 'consummable-option2'),
(13, 'consummable-option3'),
(14, 'unknown'),
(15, 'debugging'),
(16, 'testing sql');

-- --------------------------------------------------------

--
-- Table structure for table `candidate`
--

CREATE TABLE `candidate` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `hidden` enum('yes','no') NOT NULL DEFAULT 'no',
  `inactive` enum('yes','no') NOT NULL DEFAULT 'no',
  `mode` enum('unknown','admin','regular','revoked') NOT NULL DEFAULT 'regular',
  `phone` varchar(20) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `bankdetails` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `candidate`
--

INSERT INTO `candidate` (`id`, `name`, `hidden`, `inactive`, `mode`, `phone`, `address`, `bankdetails`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Sajjad', 'no', '', 'admin', '+923342881402', 'Sanghar', 'ASkari Bank', 'sajjad', 'Sajjad@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(2, 'Sajjad2', 'no', 'no', 'admin', '+923342881402', 'Sanghar', 'ASkari Bank', 'sajjad2', 'Sajjad2@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(3, 'Anees', 'no', 'no', 'admin', '+923342881403', 'Muzafabad', 'Meezan Bank', 'anees', 'Anees@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(4, 'Anees2', 'no', 'no', 'admin', '+923342881403', 'Muzafabad', 'Meezan Bank', 'anees2', 'Anees2@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(5, 'Mohsin', 'no', 'no', 'admin', '+923342881404', 'Peshawar', 'Allied Bank', 'mohsin', 'Mohsin@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(6, 'Mohsin2', 'no', 'no', 'admin', '+923342881404', 'Peshawar', 'Allied Bank', 'mohsin2', 'Mohsin2@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(7, 'Tanveer', 'no', 'no', 'regular', '+923342881405', 'Sawat', 'Habib Bank', 'tanveer', 'Tanveer@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(8, 'Tanveer2', 'no', 'no', 'regular', '+923342881405', 'Sawat', 'Habib Bank', 'tanveer2', 'Tanveer2@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(9, 'Tajdar', 'no', 'no', 'regular', '+923342881407', 'Sawabi', 'Easypaisa Bank', 'tajdar', 'Tajdar@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(10, 'Subhan', 'no', 'no', 'regular', '+923342881406', 'Sawat', 'National Bank', 'subhan', 'Subhan@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(11, 'Sarfraz', 'no', 'no', 'regular', '+923342881414', 'Sanghar', 'ASkari Bank', 'sarfraz', 'Sarfraz@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(12, 'Saeed', 'no', 'no', 'regular', '+923342881412', 'Sanghar', 'Soneri Bank', 'saeed', 'Saeed@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(13, 'Shahzaib', 'no', 'no', 'regular', '+923342881411', 'Sanghar', 'Jazz Bank', 'sanghar', 'Shahzaib@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(14, 'Nouman', 'no', 'no', 'regular', '+923342881410', 'Sanghar', 'ASkari Bank', 'nouman', 'Nouman@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(15, 'Babar', 'no', 'no', 'regular', '+923342881409', 'Soan Garden', 'Meezan Bank', 'babar', 'Babar@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(16, 'Ahmad', 'no', 'no', 'regular', '+923342881418', 'Sanghar', 'ASkari Bank', 'ahmad', 'Ahmad@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(17, 'Moaz', 'no', 'no', 'regular', '+923342881413', 'Sanghar', 'ASkari Bank', 'moaz', 'Moaz@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(18, 'Mughal', 'no', 'no', 'regular', '+923342881415', 'Sanghar', 'ASkari Bank', 'mughal', 'Mughal@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(19, 'Waseem', 'no', 'no', 'regular', '+923342881408', 'Rawalpindi', 'ASkari Bank', 'waseem', 'Waseem@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(20, 'Murtaza', 'no', 'no', 'regular', '+49100100123', 'Bruchsal', 'Sparkasse', 'murtaza', 'murtaza@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-03 06:24:33', '2023-04-03 06:24:33'),
(21, 'Amjad', 'no', 'no', 'regular', '+923342881416', 'Sanghar', 'ASkari Bank', 'amjad', 'Amjad@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(22, 'Qazi', 'no', 'no', 'regular', '+923342881417', 'Muzafarabad', 'Habib Bank', 'qazi', 'Qazi@gmail.com', '$2a$08$eXrW/6EDjuTL.3V7g1MIjexk6lUOB2Upz5NMZMT6Ye5z0lSewpGSC', '2023-04-01 13:18:52', '2023-04-01 11:55:34'),
(25, 'admin', 'no', 'no', 'regular', '0908088800', 'Pakistan', 'Askari', 'admin', 'admin@gmail.com', '$2a$08$v6d6STQ8rUjdI0fraJXN8..qBViYSc8F8pCnbWBgmfHHTtD00ouRe', '2023-04-01 11:55:34', '2023-04-01 11:55:34');

-- --------------------------------------------------------

--
-- Table structure for table `candidates_old`
--

CREATE TABLE `candidates_old` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `hidden` varchar(255) DEFAULT NULL,
  `inactive` varchar(255) DEFAULT NULL,
  `mode` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `bankdetails` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `candidates_old`
--

INSERT INTO `candidates_old` (`id`, `name`, `hidden`, `inactive`, `mode`, `phone`, `address`, `bankdetails`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'abc2', NULL, NULL, NULL, '0908088800', 'Pakistan', 'Askari', 'adminabc2', 'adminabc2@gmail.com', '$2a$08$hZZ/Kmyn34W7/qZqK2utAeq3gutu3MgYelikwE3W0kuPzGCKrfNvS', '2023-04-01 11:41:53', '2023-04-01 11:41:53');

-- --------------------------------------------------------

--
-- Table structure for table `committee`
--

CREATE TABLE `committee` (
  `cid` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `duration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `committee`
--

INSERT INTO `committee` (`cid`, `description`, `duration`) VALUES
(1, 'akhuwat welfare', 0);

-- --------------------------------------------------------

--
-- Table structure for table `errorlog`
--

CREATE TABLE `errorlog` (
  `lastuserid` int(11) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `message` text DEFAULT NULL,
  `protokollid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `errorlog`
--

INSERT INTO `errorlog` (`lastuserid`, `timestamp`, `message`, `protokollid`) VALUES
(1, '2023-03-12 23:00:00', 'error due to admin', 1),
(2, '2023-03-12 23:00:00', 'error due to code samples', 3);

-- --------------------------------------------------------

--
-- Table structure for table `loanunit`
--

CREATE TABLE `loanunit` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `preis` int(11) NOT NULL,
  `maxinst` int(11) NOT NULL,
  `cid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `loanunit`
--

INSERT INTO `loanunit` (`id`, `timestamp`, `preis`, `maxinst`, `cid`) VALUES
(1, '2022-09-01 11:26:27', -250, 15, 1),
(2, '2023-09-01 11:26:27', -100, 12, 2),
(3, '2023-04-04 05:33:20', -300, 12, 1);

-- --------------------------------------------------------

--
-- Table structure for table `protokoll`
--

CREATE TABLE `protokoll` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userid` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `value` float(15,0) NOT NULL,
  `kommentar` char(100) NOT NULL,
  `actionid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `approved` tinyint(4) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `protokoll`
--

INSERT INTO `protokoll` (`id`, `userid`, `timestamp`, `value`, `kommentar`, `actionid`, `cid`, `approved`) VALUES
(1, 21, '2023-03-12 20:00:00', 5, 'regular share deposit', 2, 1, 1),
(2, 11, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(3, 5, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(4, 3, '2023-03-12 22:00:00', 15, 'regular share deposit', 2, 1, 0),
(5, 18, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(6, 20, '2023-03-12 22:00:00', 15, 'regular share deposit', 2, 1, 0),
(7, 10, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(8, 22, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(9, 7, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(10, 1, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(11, 12, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(12, 17, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(13, 11, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(14, 21, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(15, 10, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(16, 16, '2023-03-12 22:00:00', 30, 'regular share deposit', 2, 1, 0),
(17, 18, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(18, 22, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(19, 7, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(20, 25, '2023-03-12 22:00:00', 30, 'random deposit', 1, 1, 0),
(21, 5, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(22, 9, '2023-03-12 22:00:00', 10, 'regular share deposit', 2, 1, 0),
(23, 1, '2023-03-12 22:00:00', 10, 'regular share deposit', 2, 1, 0),
(24, 13, '2023-03-12 22:00:00', 15, 'regular share deposit', 2, 1, 0),
(25, 11, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(26, 21, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(27, 18, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(28, 10, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(29, 22, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(30, 5, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(31, 7, '2023-03-12 22:00:00', 10, 'regular share deposit', 2, 1, 0),
(32, 12, '2023-03-12 22:00:00', 10, 'regular share deposit', 2, 1, 0),
(33, 11, '2023-03-12 22:00:00', 10, 'regular share deposit', 2, 1, 0),
(34, 10, '2023-03-12 22:00:00', -15, 'revoked', 6, 1, 0),
(35, 25, '2023-03-12 22:00:00', -30, 'random withdraw', 4, 1, 0),
(36, 21, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(37, 25, '2023-03-12 22:00:00', 0, 'regular share deposit', 2, 1, 0),
(38, 22, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(39, 3, '2023-03-12 22:00:00', 15, 'regular share deposit', 2, 1, 0),
(40, 14, '2023-03-12 22:00:00', 40, 'regular share deposit', 2, 1, 0),
(41, 18, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(42, 1, '2023-03-12 22:00:00', 10, 'regular share deposit', 2, 1, 0),
(43, 5, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(44, 12, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(45, 20, '2023-03-12 22:00:00', 10, 'regular share deposit', 2, 1, 0),
(46, 22, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(47, 21, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(48, 7, '2023-03-12 22:00:00', 15, 'regular share deposit', 2, 1, 0),
(49, 18, '2023-03-12 22:00:00', 10, 'regular share deposit', 2, 1, 0),
(50, 12, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(51, 5, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(52, 11, '2023-03-12 22:00:00', 10, 'regular share deposit', 2, 1, 0),
(53, 13, '2023-02-12 22:00:00', -250, 'loan', 5, 1, 0),
(55, 13, '2023-03-12 22:00:00', 7, 'regular share deposit', 2, 1, 0),
(57, 13, '2023-03-12 22:00:00', 8, 'regular share deposit', 2, 1, 0),
(58, 21, '2023-03-12 22:00:00', 25, 'regular share deposit', 2, 1, 0),
(59, 5, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(60, 22, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(61, 1, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(62, 25, '2023-03-12 22:00:00', 30, 'regular share deposit', 2, 1, 0),
(63, 9, '2023-03-12 22:00:00', -10, 'revoked', 6, 1, 0),
(64, 20, '2023-03-12 22:00:00', 15, 'regular share deposit', 2, 1, 0),
(65, 22, '2023-03-12 22:00:00', -300, 'loan', 5, 1, 0),
(68, 22, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(69, 17, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(70, 1, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(71, 5, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(72, 16, '2023-03-12 22:00:00', 30, 'regular share deposit', 2, 1, 0),
(73, 11, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(74, 6, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(75, 4, '2023-03-12 22:00:00', 15, 'regular share deposit', 2, 1, 0),
(76, 8, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(77, 2, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(78, 8, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(79, 6, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(80, 2, '2023-03-12 22:00:00', 10, 'regular share deposit', 2, 1, 0),
(81, 6, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(82, 8, '2023-03-12 22:00:00', 10, 'regular share deposit', 2, 1, 0),
(83, 4, '2023-03-12 22:00:00', 15, 'regular share deposit', 2, 1, 0),
(84, 2, '2023-03-12 22:00:00', 10, 'regular share deposit', 2, 1, 0),
(85, 6, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(86, 8, '2023-03-12 22:00:00', 15, 'regular share deposit', 2, 1, 0),
(87, 6, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(88, 6, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(89, 2, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(90, 2, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(91, 6, '2023-03-12 22:00:00', 5, 'regular share deposit', 2, 1, 0),
(92, 22, '2023-04-04 04:58:01', 25, 'first loan installment', 3, 1, 0),
(93, 13, '2023-03-01 06:05:00', 21, 'first loan installment', 3, 1, 0),
(94, 13, '2023-04-04 06:24:14', 21, '2nd loan installments', 3, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `rfid`
--

CREATE TABLE `rfid` (
  `userid` int(11) NOT NULL,
  `rfid` char(16) NOT NULL,
  `email` char(30) NOT NULL,
  `pwd` char(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rfid`
--

INSERT INTO `rfid` (`userid`, `rfid`, `email`, `pwd`) VALUES
(12, '123456', 'admin@gmail.com', 'password12'),
(13, '7890ab', 'sajjad@gmail.com', 'password2');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'user', '2023-03-31 07:06:09', '2023-03-31 07:06:09'),
(2, 'moderator', '2023-03-31 07:06:34', '2023-03-31 07:06:34'),
(3, 'admin', '2023-03-31 07:06:34', '2023-03-31 07:06:34');

-- --------------------------------------------------------

--
-- Table structure for table `shareunit`
--

CREATE TABLE `shareunit` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `preis` int(11) NOT NULL,
  `cid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shareunit`
--

INSERT INTO `shareunit` (`id`, `timestamp`, `preis`, `cid`) VALUES
(1, '2021-09-01 11:26:27', 15, 1),
(2, '2023-09-01 11:26:27', 10, 2),
(3, '2022-09-01 11:26:27', 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `token`
--

CREATE TABLE `token` (
  `userid` int(11) NOT NULL,
  `token` char(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `token`
--

INSERT INTO `token` (`userid`, `token`) VALUES
(12, '12345'),
(13, '7890a'),
(14, 'COFFE');

-- --------------------------------------------------------

--
-- Table structure for table `unknownrfid`
--

CREATE TABLE `unknownrfid` (
  `id` int(11) NOT NULL,
  `rfid` char(16) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `unknownrfid`
--

INSERT INTO `unknownrfid` (`id`, `rfid`, `timestamp`) VALUES
(1, '123456', '2022-08-01 11:26:27'),
(2, '7890ab', '2023-09-01 13:26:27'),
(3, '098765', '2023-12-22 23:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users123`
--

CREATE TABLE `users123` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users123`
--

INSERT INTO `users123` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(8, 'Naveed', 'naveed@gmail.com', '$2a$08$.JiwZgzI4IqqwHUqftxsgelAGQ3pj4CUiqtU2Z44GSgPq6L7uz86e', '2023-04-01 07:15:11', '2023-04-01 07:15:11');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`createdAt`, `updatedAt`, `roleId`, `userId`) VALUES
('2023-04-01 10:16:01', '2023-04-01 10:16:01', 1, 2),
('2023-04-01 07:15:11', '2023-04-01 07:15:11', 1, 8),
('2023-04-01 11:03:44', '2023-04-01 11:03:44', 1, 26),
('2023-04-01 11:11:11', '2023-04-01 11:11:11', 1, 27),
('2023-04-01 11:15:12', '2023-04-01 11:15:12', 1, 28),
('2023-04-01 11:18:50', '2023-04-01 11:18:50', 1, 29),
('2023-04-01 11:27:43', '2023-04-01 11:27:43', 1, 30),
('2023-04-01 11:40:23', '2023-04-01 11:40:23', 1, 31),
('2023-04-01 11:50:08', '2023-04-01 11:50:08', 1, 32),
('2023-04-01 11:55:34', '2023-04-01 11:55:34', 1, 33),
('2023-04-01 12:44:07', '2023-04-01 12:44:07', 1, 34),
('2023-04-01 12:57:47', '2023-04-01 12:57:47', 1, 35),
('2023-04-01 13:11:47', '2023-04-01 13:11:47', 1, 36),
('2023-04-01 13:18:52', '2023-04-01 13:18:52', 1, 37),
('2023-04-01 13:41:00', '2023-04-01 13:41:00', 1, 38),
('2023-04-01 13:58:21', '2023-04-01 13:58:21', 1, 39),
('2023-04-09 16:51:47', '2023-04-09 00:51:47', 2, 1),
('2023-04-01 10:59:34', '2023-04-09 08:59:34', 2, 25),
('2023-04-01 11:03:44', '2023-04-01 11:03:44', 3, 26),
('2023-04-01 11:11:11', '2023-04-01 11:11:11', 3, 27),
('2023-04-01 11:15:12', '2023-04-01 11:15:12', 3, 28),
('2023-04-01 11:18:50', '2023-04-01 11:18:50', 3, 29),
('2023-04-01 11:27:43', '2023-04-01 11:27:43', 3, 30),
('2023-04-01 11:40:23', '2023-04-01 11:40:23', 3, 31),
('2023-04-01 11:50:08', '2023-04-01 11:50:08', 3, 32),
('2023-04-01 11:55:34', '2023-04-01 11:55:34', 3, 33),
('2023-04-01 16:00:40', '2023-04-01 16:00:40', 3, 39);

-- --------------------------------------------------------

--
-- Table structure for table `welfarestand`
--

CREATE TABLE `welfarestand` (
  `id` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `wert` int(11) NOT NULL,
  `cid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `welfarestand`
--

INSERT INTO `welfarestand` (`id`, `timestamp`, `wert`, `cid`) VALUES
(1, '2022-09-01 13:26:27', 0, 1),
(2, '2023-12-22 22:00:00', 110, 2),
(3, '2023-12-23 23:00:00', 200, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `action`
--
ALTER TABLE `action`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `candidate`
--
ALTER TABLE `candidate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `candidates_old`
--
ALTER TABLE `candidates_old`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `committee`
--
ALTER TABLE `committee`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `loanunit`
--
ALTER TABLE `loanunit`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `protokoll`
--
ALTER TABLE `protokoll`
  ADD PRIMARY KEY (`id`,`userid`,`actionid`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `rfid`
--
ALTER TABLE `rfid`
  ADD PRIMARY KEY (`userid`,`rfid`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shareunit`
--
ALTER TABLE `shareunit`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`userid`),
  ADD UNIQUE KEY `token` (`token`);

--
-- Indexes for table `unknownrfid`
--
ALTER TABLE `unknownrfid`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users123`
--
ALTER TABLE `users123`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`roleId`,`userId`);

--
-- Indexes for table `welfarestand`
--
ALTER TABLE `welfarestand`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `action`
--
ALTER TABLE `action`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `candidate`
--
ALTER TABLE `candidate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=213;

--
-- AUTO_INCREMENT for table `candidates_old`
--
ALTER TABLE `candidates_old`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `committee`
--
ALTER TABLE `committee`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `loanunit`
--
ALTER TABLE `loanunit`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `protokoll`
--
ALTER TABLE `protokoll`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT for table `shareunit`
--
ALTER TABLE `shareunit`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `unknownrfid`
--
ALTER TABLE `unknownrfid`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users123`
--
ALTER TABLE `users123`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `welfarestand`
--
ALTER TABLE `welfarestand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
