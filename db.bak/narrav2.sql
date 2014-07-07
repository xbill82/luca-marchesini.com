-- phpMyAdmin SQL Dump
-- version 4.0.6
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Lun 17 Mars 2014 à 00:04
-- Version du serveur: 5.5.33
-- Version de PHP: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `narrav2`
--

-- --------------------------------------------------------

--
-- Structure de la table `gigs`
--

CREATE TABLE `gigs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `time` time DEFAULT NULL,
  `show_name` varchar(250) DEFAULT NULL,
  `title` varchar(250) NOT NULL,
  `location` varchar(250) NOT NULL,
  `address` text,
  `price` varchar(50) DEFAULT NULL,
  `parent_event` varchar(250) DEFAULT NULL,
  `parent_event_url` varchar(500) DEFAULT NULL,
  `booking_mail` varchar(250) DEFAULT NULL,
  `booking_phone` varchar(20) DEFAULT NULL,
  `tech_email` varchar(250) DEFAULT NULL,
  `tech_phone` varchar(20) DEFAULT NULL,
  `lat` float DEFAULT NULL,
  `lng` float DEFAULT NULL,
  `z` int(11) DEFAULT NULL,
  `published` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Contenu de la table `gigs`
--
SET NAMES utf8;
INSERT INTO `gigs` (`id`, `date`, `time`, `show_name`, `title`, `location`, `address`, `price`, `parent_event`, `parent_event_url`, `booking_mail`, `booking_phone`, `tech_email`, `tech_phone`, `lat`, `lng`, `z`, `published`) VALUES
(1, '2014-03-21', NULL, NULL, 'Duo avec Hervé Le Jacq', 'Montpellier', NULL, 'Au chapeau', 'Les Contes à la Coloc', NULL, 'contesalacoloc@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, 1),
(3, '2014-03-26', NULL, NULL, 'Balade Contée avec Léa Chikitou', 'Montpellier', 'Jardin des Plantes,\r\nBoulevard Henry IV', NULL, 'La Semaine de l''Environnement', 'http://www.ouvre-tete.fr/', NULL, NULL, NULL, NULL, 43.6142, 3.87338, 17, 1),
(4, '2014-02-21', '20:30:00', 'abrazos', 'Abrazos', 'Montpellier', NULL, 'Au chapeau', 'Les Contes à la Coloc', NULL, 'contesalacoloc@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, 1),
(5, '2014-03-27', '20:15:00', 'sorcieres', 'La Danse des Sorcières', 'Marvejols', 'Théâtre de la Mauvaise Tête', NULL, 'Festival ¡Vamos!', NULL, NULL, NULL, NULL, NULL, 44.555, 3.28783, 9, 1),
(6, '2014-07-11', NULL, 'abrazos', 'Extrait de Abrazos', 'Gagnières', NULL, NULL, 'Festival Contes sous le Tilleul', 'http://festivalcontessousletilleul.blogspot.fr', NULL, '06 86 40 19 17', NULL, NULL, 44.3081, 4.13086, 9, 1);

--
-- Structure de la table `claims`
--

CREATE TABLE `claims` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `txt` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `position` varchar(255) DEFAULT 'Non renseigné',
  `location` varchar(255) DEFAULT NULL,
  `show_name` varchar(255) DEFAULT NULL,
  `featured` tinyint(1) DEFAULT '0',
  `published` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `claims`
--
SET NAMES utf8;
INSERT INTO `claims` (`id`, `txt`, `author`, `position`, `location`, `show_name`, `featured`, `published`) VALUES
(1, 'Delightful italian touch', 'Barack Obama', 'President of the United States', 'Washington', NULL, 1, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
