-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 16, 2023 at 12:44 AM
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
  `name` varchar(50) NOT NULL,
  `hidden` enum('yes','no') NOT NULL DEFAULT 'no',
  `inactive` enum('yes','no') NOT NULL DEFAULT 'no',
  `mode` enum('unknown','admin','regular','revoked') NOT NULL DEFAULT 'regular',
  `phone` varchar(20) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `bankdetails` varchar(100) DEFAULT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `candidate`
--

INSERT INTO `candidate` (`id`, `name`, `hidden`, `inactive`, `mode`, `phone`, `address`, `bankdetails`, `email`, `password`) VALUES
(1, 'Sajjad', 'no', 'no', 'admin', '+923342881402', 'Sanghar', 'ASkari Bank', 'Sajjad@gmail.com', 'password1'),
(2, 'Sajjad2', 'no', 'no', 'admin', '+923342881402', 'Sanghar', 'ASkari Bank', 'Sajjad2@gmail.com', 'password2'),
(3, 'Anees', 'no', 'no', 'admin', '+923342881403', 'Muzafabad', 'Meezan Bank', 'Anees@gmail.com', 'password3'),
(4, 'Anees2', 'no', 'no', 'admin', '+923342881403', 'Muzafabad', 'Meezan Bank', 'Anees2@gmail.com', 'password4'),
(5, 'Mohsin', 'no', 'no', 'admin', '+923342881404', 'Peshawar', 'Allied Bank', 'Mohsin@gmail.com', 'password5'),
(6, 'Mohsin2', 'no', 'no', 'admin', '+923342881404', 'Peshawar', 'Allied Bank', 'Mohsin2@gmail.com', 'password6'),
(7, 'Tanveer', 'no', 'no', 'regular', '+923342881405', 'Sawat', 'Habib Bank', 'Tanveer@gmail.com', 'password7'),
(8, 'Tanveer2', 'no', 'no', 'regular', '+923342881405', 'Sawat', 'Habib Bank', 'Tanveer2@gmail.com', 'password8'),
(9, 'Subhan', 'no', 'no', 'regular', '+923342881406', 'Sawat', 'National Bank', 'Subhan@gmail.com', 'password9'),
(10, 'Tajdar', 'no', 'no', 'regular', '+923342881407', 'Sawabi', 'Easypaisa Bank', 'Tajdar@gmail.com', 'password10'),
(11, 'Waseem', 'no', 'no', 'regular', '+923342881408', 'Rawalpindi', 'ASkari Bank', 'Waseem@gmail.com', 'password11'),
(12, 'Babar', 'no', 'no', 'regular', '+923342881409', 'Soan Garden', 'Meezan Bank', 'Babar@gmail.com', 'password12'),
(13, 'Nouman', 'no', 'no', 'regular', '+923342881410', 'Sanghar', 'ASkari Bank', 'Nouman@gmail.com', 'password13'),
(14, 'Shahzaib', 'no', 'no', 'regular', '+923342881411', 'Sanghar', 'Jazz Bank', 'Shahzaib@gmail.com', 'password14'),
(15, 'Saeed', 'no', 'no', 'regular', '+923342881412', 'Sanghar', 'Soneri Bank', 'Saeed@gmail.com', 'password15'),
(16, 'Moaz', 'no', 'no', 'regular', '+923342881413', 'Sanghar', 'ASkari Bank', 'Moaz@gmail.com', 'password16'),
(17, 'Sarfraz', 'no', 'no', 'regular', '+923342881414', 'Sanghar', 'ASkari Bank', 'Sarfraz@gmail.com', 'password17'),
(18, 'Mughal', 'no', 'no', 'regular', '+923342881415', 'Sanghar', 'ASkari Bank', 'Mughal@gmail.com', 'password18'),
(19, 'Amjad', 'no', 'no', 'regular', '+923342881416', 'Sanghar', 'ASkari Bank', 'Amjad@gmail.com', 'password19'),
(20, 'Qazi', 'no', 'no', 'regular', '+923342881417', 'Sanghar', 'ASkari Bank', 'Qazi@gmail.com', 'password20'),
(21, 'Ahmad', 'no', 'no', 'regular', '+923342881418', 'Sanghar', 'ASkari Bank', 'Ahmad@gmail.com', 'password21'),
(23, 'Zubair', 'yes', 'no', 'regular', '+923342881402', 'chak-10', 'habib bank', 'Zubair@gmail.com', 'Zubair'),
(24, 'faqir', 'yes', 'no', 'regular', '+923342881402', 'chak-10', 'habib bank', 'Zubair@gmail.com', 'Zubair');

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
  `preis` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `loanunit`
--

INSERT INTO `loanunit` (`id`, `timestamp`, `preis`) VALUES
(1, '2023-09-01 11:26:27', 150000),
(2, '2023-09-01 11:26:27', 100000);

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
  `actionid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `protokoll`
--

INSERT INTO `protokoll` (`id`, `userid`, `timestamp`, `value`, `kommentar`, `actionid`) VALUES
(2, 2, '2023-03-12 23:00:00', 52, 'regular loan', 2),
(3, 1, '2023-03-12 23:00:00', 50, ' deposits loan', 3),
(4, 12, '2023-03-12 23:00:00', 150, 'regular deposit', 1);

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
-- Table structure for table `shareunit`
--

CREATE TABLE `shareunit` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `preis` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shareunit`
--

INSERT INTO `shareunit` (`id`, `timestamp`, `preis`) VALUES
(1, '2022-09-01 11:26:27', 300000),
(2, '2023-09-01 11:26:27', 100000);

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
  `rfid` char(16) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `unknownrfid`
--

INSERT INTO `unknownrfid` (`rfid`, `timestamp`) VALUES
('123456', '2022-08-01 11:26:27'),
('7890ab', '2023-09-01 13:26:27'),
('098765', '2023-12-22 23:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `welfarestand`
--

CREATE TABLE `welfarestand` (
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `wert` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `welfarestand`
--

INSERT INTO `welfarestand` (`timestamp`, `wert`) VALUES
('2022-09-01 13:26:27', 0),
('2023-12-22 22:00:00', 110),
('2023-12-23 23:00:00', 200);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
