-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 01, 2023 at 03:42 PM
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
(1, 'Sajjad', 'no', 'no', 'admin', '+923342881402', 'Sanghar', 'ASkari Bank', '', 'Sajjad@gmail.com', 'password1', NULL, NULL),
(2, 'Sajjad2', 'no', 'no', 'admin', '+923342881402', 'Sanghar', 'ASkari Bank', '', 'Sajjad2@gmail.com', 'password2', NULL, NULL),
(3, 'Anees', 'no', 'no', 'admin', '+923342881403', 'Muzafabad', 'Meezan Bank', '', 'Anees@gmail.com', 'password3', NULL, NULL),
(4, 'Anees2', 'no', 'no', 'admin', '+923342881403', 'Muzafabad', 'Meezan Bank', '', 'Anees2@gmail.com', 'password4', NULL, NULL),
(5, 'Mohsin', 'no', 'no', 'admin', '+923342881404', 'Peshawar', 'Allied Bank', '', 'Mohsin@gmail.com', 'password5', NULL, NULL),
(6, 'Mohsin2', 'no', 'no', 'admin', '+923342881404', 'Peshawar', 'Allied Bank', '', 'Mohsin2@gmail.com', 'password6', NULL, NULL),
(7, 'Tanveer', 'no', 'no', 'regular', '+923342881405', 'Sawat', 'Habib Bank', '', 'Tanveer@gmail.com', 'password7', NULL, NULL),
(8, 'Tanveer2', 'no', 'no', 'regular', '+923342881405', 'Sawat', 'Habib Bank', '', 'Tanveer2@gmail.com', 'password8', NULL, NULL),
(9, 'Subhan', 'no', 'no', 'regular', '+923342881406', 'Sawat', 'National Bank', '', 'Subhan@gmail.com', 'password9', NULL, NULL),
(10, 'Tajdar', 'no', 'no', 'regular', '+923342881407', 'Sawabi', 'Easypaisa Bank', '', 'Tajdar@gmail.com', 'password10', NULL, NULL),
(11, 'Waseem', 'no', 'no', 'regular', '+923342881408', 'Rawalpindi', 'ASkari Bank', '', 'Waseem@gmail.com', 'password11', NULL, NULL),
(12, 'Babar', 'no', 'no', 'regular', '+923342881409', 'Soan Garden', 'Meezan Bank', '', 'Babar@gmail.com', 'password12', NULL, NULL),
(13, 'Nouman', 'no', 'no', 'regular', '+923342881410', 'Sanghar', 'ASkari Bank', '', 'Nouman@gmail.com', 'password13', NULL, NULL),
(14, 'Shahzaib', 'no', 'no', 'regular', '+923342881411', 'Sanghar', 'Jazz Bank', '', 'Shahzaib@gmail.com', 'password14', NULL, NULL),
(15, 'Saeed', 'no', 'no', 'regular', '+923342881412', 'Sanghar', 'Soneri Bank', '', 'Saeed@gmail.com', 'password15', NULL, NULL),
(16, 'Moaz', 'no', 'no', 'regular', '+923342881413', 'Sanghar', 'ASkari Bank', '', 'Moaz@gmail.com', 'password16', NULL, NULL),
(17, 'Sarfraz', 'no', 'no', 'regular', '+923342881414', 'Sanghar', 'ASkari Bank', '', 'Sarfraz@gmail.com', 'password17', NULL, NULL),
(18, 'Mughal', 'no', 'no', 'regular', '+923342881415', 'Sanghar', 'ASkari Bank', '', 'Mughal@gmail.com', 'password18', NULL, NULL),
(19, 'Amjad', 'no', 'no', 'regular', '+923342881416', 'Sanghar', 'ASkari Bank', '', 'Amjad@gmail.com', 'password19', NULL, NULL),
(20, 'Qazi', 'no', 'no', 'regular', '+923342881417', 'Sanghar', 'ASkari Bank', '', 'Qazi@gmail.com', 'password20', NULL, NULL),
(21, 'Ahmad', 'no', 'no', 'regular', '+923342881418', 'Sanghar', 'ASkari Bank', '', 'Ahmad@gmail.com', 'password21', NULL, NULL),
(23, 'Zubair', 'yes', 'no', 'regular', '+923342881402', 'chak-10', 'habib bank', '', 'Zubair@gmail.com', 'Zubair', NULL, NULL),
(24, 'faqir', 'yes', 'no', 'regular', '+923342881402', 'chak-10', 'habib bank', '', 'Zubair@gmail.com', 'Zubair', NULL, NULL),
(33, 'abc2', 'no', 'no', 'regular', '0908088800', 'Pakistan', 'Askari', 'adminabc2', 'adminabc2@gmail.com', '$2a$08$v6d6STQ8rUjdI0fraJXN8..qBViYSc8F8pCnbWBgmfHHTtD00ouRe', '2023-04-01 11:55:34', '2023-04-01 11:55:34'),
(37, 'Ajit', 'no', 'no', 'regular', '+432224343', 'Kalkutta South India', 'Commerzbank', 'ajit', 'ajit@gmail.com', '$2a$08$chEX4QXKDzLQk.FMzPTHwOy69Wz4mI0M7VKIPrq9HexsgyboGnrDG', '2023-04-01 13:18:52', '2023-04-01 13:18:52'),
(38, 'Nurbek', 'no', 'no', 'regular', '+91233323232', 'Turkia South Asia Istanbul', 'Commerzbank', 'nurbek', 'nurbek@gmail.com', '$2a$08$tJ77SX5DgrNJx.rrZFLUUOLDGxYcabqz3kpjrQE82A2Vr5BjF5bvy', '2023-04-01 13:41:00', '2023-04-01 13:41:00');

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
-- Table structure for table `cands`
--

CREATE TABLE `cands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
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
-- Dumping data for table `cands`
--

INSERT INTO `cands` (`id`, `name`, `phone`, `address`, `bankdetails`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'abc2', '0908088800', 'Pakistan', 'Askari', 'adminabc2', 'adminabc2@gmail.com', '$2a$08$MtcG8xuTYXkHXDYLLc75Z.PLv/o8NzhOusFVOifGuf/aZ1S8MdnBa', '2023-04-01 11:21:11', '2023-04-01 11:21:11');

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
(1, '2023-09-01 11:26:27', -150000, 12, 1),
(2, '2023-09-01 11:26:27', -100000, 12, 2);

-- --------------------------------------------------------

--
-- Table structure for table `protokoll`
--

CREATE TABLE `protokoll` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `userid` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `value` int(11) NOT NULL,
  `kommentar` char(100) NOT NULL,
  `actionid` int(11) NOT NULL,
  `cid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `protokoll`
--

INSERT INTO `protokoll` (`id`, `userid`, `timestamp`, `value`, `kommentar`, `actionid`, `cid`) VALUES
(2, 2, '2023-03-12 23:00:00', -50, 'regular loan', 2, 1),
(3, 1, '2023-03-12 23:00:00', 50, ' deposits loan', 3, 1),
(4, 3, '2023-03-12 23:00:00', 150, 'regular deposit', 1, 1);

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
(1, '2022-09-01 11:26:27', 300000, 1),
(2, '2023-09-01 11:26:27', 100000, 2),
(3, '2023-03-30 05:18:19', 250000, 1);

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
('2023-04-01 10:08:02', '2023-04-01 10:08:02', 1, 1),
('2023-04-01 10:16:01', '2023-04-01 10:16:01', 1, 2),
('2023-04-01 07:15:11', '2023-04-01 07:15:11', 1, 8),
('2023-04-01 10:59:34', '2023-04-01 10:59:34', 1, 25),
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
('2023-04-01 10:08:02', '2023-04-01 10:08:02', 3, 1),
('2023-04-01 10:16:01', '2023-04-01 10:16:01', 3, 2),
('2023-04-01 10:59:34', '2023-04-01 10:59:34', 3, 25),
('2023-04-01 11:03:44', '2023-04-01 11:03:44', 3, 26),
('2023-04-01 11:11:11', '2023-04-01 11:11:11', 3, 27),
('2023-04-01 11:15:12', '2023-04-01 11:15:12', 3, 28),
('2023-04-01 11:18:50', '2023-04-01 11:18:50', 3, 29),
('2023-04-01 11:27:43', '2023-04-01 11:27:43', 3, 30),
('2023-04-01 11:40:23', '2023-04-01 11:40:23', 3, 31),
('2023-04-01 11:50:08', '2023-04-01 11:50:08', 3, 32),
('2023-04-01 11:55:34', '2023-04-01 11:55:34', 3, 33);

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
-- Indexes for table `cands`
--
ALTER TABLE `cands`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `candidates_old`
--
ALTER TABLE `candidates_old`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cands`
--
ALTER TABLE `cands`
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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `protokoll`
--
ALTER TABLE `protokoll`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
