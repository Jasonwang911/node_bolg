/*
Navicat MySQL Data Transfer

Source Server         : club
Source Server Version : 50536
Source Host           : localhost:3306
Source Database       : learn

Target Server Type    : MYSQL
Target Server Version : 50536
File Encoding         : 65001

Date: 2017-08-29 15:17:09
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
  `password` varchar(32) CHARACTER SET utf8mb4 NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner_table
-- ----------------------------
INSERT INTO `banner_table` VALUES ('1', '日本引进陆基“宙斯盾”面临三大难题 日媒：俄这关难过', '参考消息网8月29日报道 日本《朝日新闻》8月28日发表题为《引进陆基“宙斯盾”系统面临三大课题》的报道称，为对抗朝鲜的导弹试射，防卫省已经做出新的拦截态势，方针就是从美国引进陆基“宙斯盾”导弹拦截系统。如果实现，日本将成为全球第三个部署有该系统的国家。但除了导弹拦截技术原本存在的难度之外，还面临巨额成本以及来自周边国家的强烈反对。', 'http://www.dzwww.com/xinwen/shehuixinwen/201708/t20170829_16353562.htm');
INSERT INTO `banner_table` VALUES ('2', '俄向或阿联酋出售无人战车 已在叙利亚投入实战测试', '观察者网报道，俄罗斯塔斯社29日报道，俄联邦军事技术合作局局长迪米特里·谢戈耶夫表示，尽管尚未接到相关的官方采购请求，但来自多个国家的用户，尤其是阿联酋的代表已经与俄方接触，谈及“天王星9”无人战车。俄罗斯“天王星9”无人战车战斗全重10吨，控制员可在3000米外遥控该车进行作战，对于资金富裕而人力不足的一些国家来说，这似乎是一种很有诱惑力的新型武器。http://www.hkdq.net/ttpl/2017/0829/74806.html', 'http://www.hkdq.net/ttpl/2017/0829/74806.html');
INSERT INTO `banner_table` VALUES ('3', '美国最大死敌自研五代战机对付北约，外媒称歼31隐身技术或出口', '以提到第五代隐身战斗机，大家第一个想到的自然会是中国的歼-20、美国的F-22F35、俄罗斯的T-50，中美俄不仅军事实力长期保持快速增长，战斗机之间的代差上，中国已经从八十年代的完全落后的局面中走出来，中国不仅有歼-20，还有了歼-31这款外形非常漂亮帅气的隐身歼击机，然而最近从伊朗传来一个消息让中国网友乐了。', 'http://www.toutiao.com/a6459452425148301838/');

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
