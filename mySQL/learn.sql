/*
Navicat MySQL Data Transfer

Source Server         : club
Source Server Version : 50536
Source Host           : localhost:3306
Source Database       : learn

Target Server Type    : MYSQL
Target Server Version : 50536
File Encoding         : 65001

Date: 2017-08-28 14:34:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for aboutus_table
-- ----------------------------
DROP TABLE IF EXISTS `aboutus_table`;
CREATE TABLE `aboutus_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL COMMENT '关于我们的标题',
  `content` text NOT NULL COMMENT '关于我们的内容',
  `pic_src` varchar(300) NOT NULL COMMENT '关于我们的图片地址',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of aboutus_table
-- ----------------------------

-- ----------------------------
-- Table structure for admin_table
-- ----------------------------
DROP TABLE IF EXISTS `admin_table`;
CREATE TABLE `admin_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_table
-- ----------------------------
INSERT INTO `admin_table` VALUES ('1', 'jason', '4229da91e6f0f029d36774ec35057ffa');

-- ----------------------------
-- Table structure for banner_table
-- ----------------------------
DROP TABLE IF EXISTS `banner_table`;
CREATE TABLE `banner_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL COMMENT '首页banner的title',
  `description` varchar(300) NOT NULL COMMENT '首页banner的描述',
  `href` varchar(300) NOT NULL COMMENT '首页banner的跳转链接',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner_table
-- ----------------------------

-- ----------------------------
-- Table structure for bolg_table
-- ----------------------------
DROP TABLE IF EXISTS `bolg_table`;
CREATE TABLE `bolg_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL COMMENT '博客的标题',
  `pic_src` varchar(300) NOT NULL COMMENT '博客小图的图片地址',
  `pic_big_src` varchar(300) NOT NULL COMMENT '博客大图的图片地址',
  `summary` varchar(500) NOT NULL,
  `content` text NOT NULL COMMENT '博客的内容',
  `post_time` int(11) NOT NULL COMMENT '博客创建的时间',
  `auto` varchar(32) NOT NULL COMMENT '博客的作者',
  `n_view` int(11) NOT NULL COMMENT '喜欢按钮',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bolg_table
-- ----------------------------

-- ----------------------------
-- Table structure for contact_table
-- ----------------------------
DROP TABLE IF EXISTS `contact_table`;
CREATE TABLE `contact_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(50) NOT NULL COMMENT '地址---街道',
  `phone` varchar(20) NOT NULL COMMENT '联系我们--手机号',
  `fax` varchar(20) NOT NULL COMMENT '联系我们--座机号',
  `email` varchar(32) NOT NULL COMMENT '联系我们--邮件',
  `wx` varchar(40) NOT NULL COMMENT '联系我们--邮箱',
  `weibo` varchar(40) NOT NULL COMMENT '联系我们--微博',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of contact_table
-- ----------------------------

-- ----------------------------
-- Table structure for custom_evaluation_table
-- ----------------------------
DROP TABLE IF EXISTS `custom_evaluation_table`;
CREATE TABLE `custom_evaluation_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL COMMENT '用户评价的标题',
  `description` varchar(200) NOT NULL COMMENT '用户评价的详情',
  `src` varchar(300) NOT NULL COMMENT '用户评价的图片src',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of custom_evaluation_table
-- ----------------------------

-- ----------------------------
-- Table structure for intro_table
-- ----------------------------
DROP TABLE IF EXISTS `intro_table`;
CREATE TABLE `intro_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL COMMENT '产品介绍的标题',
  `description` varchar(200) NOT NULL COMMENT '产品介绍的描述',
  `href` varchar(200) NOT NULL COMMENT '产品介绍的跳转链接',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of intro_table
-- ----------------------------

-- ----------------------------
-- Table structure for msg_table
-- ----------------------------
DROP TABLE IF EXISTS `msg_table`;
CREATE TABLE `msg_table` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(32) NOT NULL,
  `hone` varchar(64) NOT NULL,
  `subject` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of msg_table
-- ----------------------------
