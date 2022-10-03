USE [master]
GO
/****** Object:  Database [ETransportationSystem]    Script Date: 03/10/2022 7:52:44 PM ******/
CREATE DATABASE [ETransportationSystem]
GO
ALTER DATABASE [ETransportationSystem] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ETransportationSystem].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ETransportationSystem] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ETransportationSystem] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ETransportationSystem] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ETransportationSystem] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ETransportationSystem] SET ARITHABORT OFF 
GO
ALTER DATABASE [ETransportationSystem] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ETransportationSystem] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ETransportationSystem] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ETransportationSystem] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ETransportationSystem] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ETransportationSystem] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ETransportationSystem] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ETransportationSystem] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ETransportationSystem] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ETransportationSystem] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ETransportationSystem] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ETransportationSystem] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ETransportationSystem] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ETransportationSystem] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ETransportationSystem] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ETransportationSystem] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ETransportationSystem] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ETransportationSystem] SET RECOVERY FULL 
GO
ALTER DATABASE [ETransportationSystem] SET  MULTI_USER 
GO
ALTER DATABASE [ETransportationSystem] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ETransportationSystem] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ETransportationSystem] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ETransportationSystem] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ETransportationSystem] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ETransportationSystem] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'ETransportationSystem', N'ON'
GO
ALTER DATABASE [ETransportationSystem] SET QUERY_STORE = OFF
GO
USE [ETransportationSystem]
GO
USE [ETransportationSystem]
GO
/****** Object:  Sequence [dbo].[hibernate_sequence]    Script Date: 03/10/2022 7:52:44 PM ******/
CREATE SEQUENCE [dbo].[hibernate_sequence] 
 AS [bigint]
 START WITH 1
 INCREMENT BY 1
 MINVALUE -9223372036854775808
 MAXVALUE 9223372036854775807
 CACHE 
GO
/****** Object:  Table [dbo].[account]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[account](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[balance] [float] NULL,
	[email] [varchar](255) NULL,
	[glpx] [varchar](255) NULL,
	[image] [varchar](255) NULL,
	[name] [varchar](255) NULL,
	[password] [varchar](255) NULL,
	[phone] [varchar](255) NULL,
	[status] [varchar](255) NULL,
	[username] [varchar](255) NULL,
	[birth_date] [datetime2](7) NULL,
	[gender] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[account_role]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[account_role](
	[account_id] [bigint] NOT NULL,
	[role_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[account_id] ASC,
	[role_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[address]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[address](
	[car_id] [bigint] NOT NULL,
	[street] [varchar](255) NULL,
	[city_id] [bigint] NULL,
	[district_id] [bigint] NULL,
	[ward_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[car_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[book]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[book](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[book_date] [datetime2](7) NULL,
	[end_date] [datetime2](7) NULL,
	[price] [float] NOT NULL,
	[start_date] [datetime2](7) NULL,
	[status] [varchar](255) NULL,
	[total_price] [float] NOT NULL,
	[account_id] [bigint] NULL,
	[car_id] [bigint] NULL,
	[voucher_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[brand]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[brand](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[car]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[car](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[car_rental_terms] [varchar](255) NULL,
	[color] [varchar](255) NULL,
	[description] [varchar](255) NULL,
	[fuel] [varchar](255) NULL,
	[fuel_consumption] [varchar](255) NULL,
	[latitude] [float] NOT NULL,
	[license_plates] [varchar](255) NULL,
	[longitude] [float] NOT NULL,
	[modified_date] [datetime2](7) NULL,
	[price] [float] NOT NULL,
	[register_date] [datetime2](7) NULL,
	[sale_month] [int] NOT NULL,
	[sale_week] [int] NOT NULL,
	[seats] [int] NOT NULL,
	[status] [varchar](255) NULL,
	[transmission] [varchar](255) NULL,
	[year_of_manufacture] [varchar](255) NULL,
	[account_supplier_id] [bigint] NULL,
	[model_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[car_feature]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[car_feature](
	[car_id] [bigint] NOT NULL,
	[feature_id] [bigint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[car_image]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[car_image](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[image] [varchar](255) NULL,
	[car_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[city]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[city](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[image] [varchar](255) NULL,
	[name] [varchar](255) NULL,
	[code] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[district]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[district](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [varchar](255) NULL,
	[city_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[feature]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[feature](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [varchar](255) NULL,
	[icon] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[model]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[model](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [varchar](255) NULL,
	[brand_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[notification]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[notification](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_date] [datetime2](7) NULL,
	[discription] [varchar](255) NULL,
	[is_read] [bit] NOT NULL,
	[short_discription] [varchar](255) NULL,
	[title] [varchar](255) NULL,
	[account_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[review]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[review](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[content] [varchar](255) NULL,
	[review_date] [datetime2](7) NULL,
	[star_review] [int] NOT NULL,
	[status] [varchar](255) NULL,
	[account_id] [bigint] NULL,
	[car_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[role]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[role](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[voucher]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[voucher](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[code] [varchar](255) NULL,
	[discription] [varchar](255) NULL,
	[end_date] [datetime2](7) NULL,
	[max_discount] [int] NOT NULL,
	[percentage] [int] NOT NULL,
	[start_date] [datetime2](7) NULL,
	[image] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ward]    Script Date: 03/10/2022 7:52:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ward](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [varchar](255) NULL,
	[district_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[account] ON 
GO
INSERT [dbo].[account] ([id], [balance], [email], [glpx], [image], [name], [password], [phone], [status], [username], [birth_date], [gender]) VALUES (1, NULL, NULL, NULL, NULL, N'3', N'fgh123', NULL, NULL, N'test456441', NULL, NULL)
GO
INSERT [dbo].[account] ([id], [balance], [email], [glpx], [image], [name], [password], [phone], [status], [username], [birth_date], [gender]) VALUES (2, NULL, NULL, NULL, NULL, N'3', N'123456', NULL, NULL, N'test4564419', NULL, NULL)
GO
INSERT [dbo].[account] ([id], [balance], [email], [glpx], [image], [name], [password], [phone], [status], [username], [birth_date], [gender]) VALUES (3, NULL, NULL, NULL, NULL, NULL, N'123456', NULL, NULL, N'test4564419ssss', NULL, NULL)
GO
INSERT [dbo].[account] ([id], [balance], [email], [glpx], [image], [name], [password], [phone], [status], [username], [birth_date], [gender]) VALUES (4, NULL, NULL, NULL, NULL, N'triii', N'12346', NULL, NULL, N'tripor', NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[account] OFF
GO
INSERT [dbo].[account_role] ([account_id], [role_id]) VALUES (1, 2)
GO
INSERT [dbo].[account_role] ([account_id], [role_id]) VALUES (2, 1)
GO
INSERT [dbo].[account_role] ([account_id], [role_id]) VALUES (2, 2)
GO
INSERT [dbo].[account_role] ([account_id], [role_id]) VALUES (3, 2)
GO
INSERT [dbo].[account_role] ([account_id], [role_id]) VALUES (4, 2)
GO
SET IDENTITY_INSERT [dbo].[brand] ON 
GO
INSERT [dbo].[brand] ([id], [name]) VALUES (1, N'Audi')
GO
INSERT [dbo].[brand] ([id], [name]) VALUES (2, N'Baic')
GO
INSERT [dbo].[brand] ([id], [name]) VALUES (3, N'Bentley')
GO
INSERT [dbo].[brand] ([id], [name]) VALUES (4, N'BMW')
GO
INSERT [dbo].[brand] ([id], [name]) VALUES (5, N'Brilliance')
GO
SET IDENTITY_INSERT [dbo].[brand] OFF
GO
SET IDENTITY_INSERT [dbo].[city] ON 
GO
INSERT [dbo].[city] ([id], [image], [name], [code]) VALUES (1, N'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HoChiMinh_v2.jpg', N'Ho chi minh', N'd')
GO
INSERT [dbo].[city] ([id], [image], [name], [code]) VALUES (2, N'https://n1-cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HoChiMinh_v2.jpg', N'Ha noi', N'HANOI')
GO
INSERT [dbo].[city] ([id], [image], [name], [code]) VALUES (3, N'cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HoChiMinh_v2.jpg', N'An Giang', N'ANGIANG')
GO
INSERT [dbo].[city] ([id], [image], [name], [code]) VALUES (4, N'cstg.mioto.vn/1/cho_thue_xe_tu_lai_tphcm/hcm/p/m/cities/HoChiMinh_v2.jpg', N'Bà R?a - Vung Tàu', N'BARIA')
GO
SET IDENTITY_INSERT [dbo].[city] OFF
GO
SET IDENTITY_INSERT [dbo].[feature] ON 
GO
INSERT [dbo].[feature] ([id], [name], [icon]) VALUES (1, N'fe1', N'1')
GO
INSERT [dbo].[feature] ([id], [name], [icon]) VALUES (2, N'fe2', N'1')
GO
INSERT [dbo].[feature] ([id], [name], [icon]) VALUES (3, N'fe3', N'2')
GO
SET IDENTITY_INSERT [dbo].[feature] OFF
GO
SET IDENTITY_INSERT [dbo].[model] ON 
GO
INSERT [dbo].[model] ([id], [name], [brand_id]) VALUES (1, N'AUDI A1', 1)
GO
INSERT [dbo].[model] ([id], [name], [brand_id]) VALUES (2, N'AUDI A4 ', 1)
GO
INSERT [dbo].[model] ([id], [name], [brand_id]) VALUES (3, N'AUDI A5', 1)
GO
INSERT [dbo].[model] ([id], [name], [brand_id]) VALUES (4, N'AUDI A6', 1)
GO
INSERT [dbo].[model] ([id], [name], [brand_id]) VALUES (5, N'AUDI TTS', 1)
GO
INSERT [dbo].[model] ([id], [name], [brand_id]) VALUES (6, N'BAIC BEIJING U5 PLUS DELUXE', 2)
GO
INSERT [dbo].[model] ([id], [name], [brand_id]) VALUES (7, N'BAIC BEIJING U5 PLUS LUXURY', 2)
GO
INSERT [dbo].[model] ([id], [name], [brand_id]) VALUES (8, N'BAIC BEIJING U5 PLUS STANDARD', 2)
GO
INSERT [dbo].[model] ([id], [name], [brand_id]) VALUES (9, N'BAIC BEIJING X7', 2)
GO
INSERT [dbo].[model] ([id], [name], [brand_id]) VALUES (10, N'BAIC CHANGHE Q7', 2)
GO
INSERT [dbo].[model] ([id], [name], [brand_id]) VALUES (11, N'BAIC X55', 2)
GO
INSERT [dbo].[model] ([id], [name], [brand_id]) VALUES (12, N'BENTLEY CONTINENTAL', 3)
GO
INSERT [dbo].[model] ([id], [name], [brand_id]) VALUES (13, N'BENTLEY GT SPORT', 3)
GO
INSERT [dbo].[model] ([id], [name], [brand_id]) VALUES (14, N'BMW 320i ', 4)
GO
INSERT [dbo].[model] ([id], [name], [brand_id]) VALUES (15, N'BMW 325I', 4)
GO
INSERT [dbo].[model] ([id], [name], [brand_id]) VALUES (16, N'BRILLIANCE V7', 5)
GO
SET IDENTITY_INSERT [dbo].[model] OFF
GO
SET IDENTITY_INSERT [dbo].[role] ON 
GO
INSERT [dbo].[role] ([id], [name]) VALUES (1, N'AD')
GO
INSERT [dbo].[role] ([id], [name]) VALUES (2, N'US')
GO
SET IDENTITY_INSERT [dbo].[role] OFF
GO
ALTER TABLE [dbo].[account_role]  WITH CHECK ADD  CONSTRAINT [FK1f8y4iy71kb1arff79s71j0dh] FOREIGN KEY([account_id])
REFERENCES [dbo].[account] ([id])
GO
ALTER TABLE [dbo].[account_role] CHECK CONSTRAINT [FK1f8y4iy71kb1arff79s71j0dh]
GO
ALTER TABLE [dbo].[account_role]  WITH CHECK ADD  CONSTRAINT [FKrs2s3m3039h0xt8d5yhwbuyam] FOREIGN KEY([role_id])
REFERENCES [dbo].[role] ([id])
GO
ALTER TABLE [dbo].[account_role] CHECK CONSTRAINT [FKrs2s3m3039h0xt8d5yhwbuyam]
GO
ALTER TABLE [dbo].[address]  WITH CHECK ADD  CONSTRAINT [FKcllvptka2369erqg55ii5gs31] FOREIGN KEY([car_id])
REFERENCES [dbo].[car] ([id])
GO
ALTER TABLE [dbo].[address] CHECK CONSTRAINT [FKcllvptka2369erqg55ii5gs31]
GO
ALTER TABLE [dbo].[address]  WITH CHECK ADD  CONSTRAINT [FKpo044ng5x4gynb291cv24vtea] FOREIGN KEY([city_id])
REFERENCES [dbo].[city] ([id])
GO
ALTER TABLE [dbo].[address] CHECK CONSTRAINT [FKpo044ng5x4gynb291cv24vtea]
GO
ALTER TABLE [dbo].[address]  WITH CHECK ADD  CONSTRAINT [FKq7vspx6bqxq5lawbv2calw5lb] FOREIGN KEY([ward_id])
REFERENCES [dbo].[ward] ([id])
GO
ALTER TABLE [dbo].[address] CHECK CONSTRAINT [FKq7vspx6bqxq5lawbv2calw5lb]
GO
ALTER TABLE [dbo].[address]  WITH CHECK ADD  CONSTRAINT [FKqbjwfi50pdenou8j14knnffrh] FOREIGN KEY([district_id])
REFERENCES [dbo].[district] ([id])
GO
ALTER TABLE [dbo].[address] CHECK CONSTRAINT [FKqbjwfi50pdenou8j14knnffrh]
GO
ALTER TABLE [dbo].[book]  WITH CHECK ADD  CONSTRAINT [FK5ve989unrb6nk6duv2qt7hesc] FOREIGN KEY([car_id])
REFERENCES [dbo].[car] ([id])
GO
ALTER TABLE [dbo].[book] CHECK CONSTRAINT [FK5ve989unrb6nk6duv2qt7hesc]
GO
ALTER TABLE [dbo].[book]  WITH CHECK ADD  CONSTRAINT [FKhjcqnudfp654b9ox7msq8rrnn] FOREIGN KEY([voucher_id])
REFERENCES [dbo].[voucher] ([id])
GO
ALTER TABLE [dbo].[book] CHECK CONSTRAINT [FKhjcqnudfp654b9ox7msq8rrnn]
GO
ALTER TABLE [dbo].[book]  WITH CHECK ADD  CONSTRAINT [FKpio94h2hps4iu6xlqp05qnjtr] FOREIGN KEY([account_id])
REFERENCES [dbo].[account] ([id])
GO
ALTER TABLE [dbo].[book] CHECK CONSTRAINT [FKpio94h2hps4iu6xlqp05qnjtr]
GO
ALTER TABLE [dbo].[car]  WITH CHECK ADD  CONSTRAINT [FK772uqy9hm5yicyxh9t6x6vusr] FOREIGN KEY([model_id])
REFERENCES [dbo].[model] ([id])
GO
ALTER TABLE [dbo].[car] CHECK CONSTRAINT [FK772uqy9hm5yicyxh9t6x6vusr]
GO
ALTER TABLE [dbo].[car]  WITH CHECK ADD  CONSTRAINT [FKoh7l7b9gk8esqsyiy0i951t1n] FOREIGN KEY([account_supplier_id])
REFERENCES [dbo].[account] ([id])
GO
ALTER TABLE [dbo].[car] CHECK CONSTRAINT [FKoh7l7b9gk8esqsyiy0i951t1n]
GO
ALTER TABLE [dbo].[car_feature]  WITH CHECK ADD  CONSTRAINT [FKd86e0b4v70sx9onvqpf3hc81h] FOREIGN KEY([car_id])
REFERENCES [dbo].[car] ([id])
GO
ALTER TABLE [dbo].[car_feature] CHECK CONSTRAINT [FKd86e0b4v70sx9onvqpf3hc81h]
GO
ALTER TABLE [dbo].[car_feature]  WITH CHECK ADD  CONSTRAINT [FKgqgv3iyd1518909jkijos3tg3] FOREIGN KEY([feature_id])
REFERENCES [dbo].[feature] ([id])
GO
ALTER TABLE [dbo].[car_feature] CHECK CONSTRAINT [FKgqgv3iyd1518909jkijos3tg3]
GO
ALTER TABLE [dbo].[car_image]  WITH CHECK ADD  CONSTRAINT [FK91nl01tvyj0xus5j92voo4ht1] FOREIGN KEY([car_id])
REFERENCES [dbo].[car] ([id])
GO
ALTER TABLE [dbo].[car_image] CHECK CONSTRAINT [FK91nl01tvyj0xus5j92voo4ht1]
GO
ALTER TABLE [dbo].[district]  WITH CHECK ADD  CONSTRAINT [FKsgx09prp6sk2f0we38bf2dtal] FOREIGN KEY([city_id])
REFERENCES [dbo].[city] ([id])
GO
ALTER TABLE [dbo].[district] CHECK CONSTRAINT [FKsgx09prp6sk2f0we38bf2dtal]
GO
ALTER TABLE [dbo].[model]  WITH CHECK ADD  CONSTRAINT [FKhbgv4j3vpt308sepyq9q79mhu] FOREIGN KEY([brand_id])
REFERENCES [dbo].[brand] ([id])
GO
ALTER TABLE [dbo].[model] CHECK CONSTRAINT [FKhbgv4j3vpt308sepyq9q79mhu]
GO
ALTER TABLE [dbo].[notification]  WITH CHECK ADD  CONSTRAINT [FKj0b1ncedmpl7sx7t7o54t26v2] FOREIGN KEY([account_id])
REFERENCES [dbo].[account] ([id])
GO
ALTER TABLE [dbo].[notification] CHECK CONSTRAINT [FKj0b1ncedmpl7sx7t7o54t26v2]
GO
ALTER TABLE [dbo].[review]  WITH CHECK ADD  CONSTRAINT [FKbopwpfvcg5qsfrjtt9svofxg1] FOREIGN KEY([account_id])
REFERENCES [dbo].[account] ([id])
GO
ALTER TABLE [dbo].[review] CHECK CONSTRAINT [FKbopwpfvcg5qsfrjtt9svofxg1]
GO
ALTER TABLE [dbo].[review]  WITH CHECK ADD  CONSTRAINT [FKoie88l9xdqjv41ym8c1s7valq] FOREIGN KEY([car_id])
REFERENCES [dbo].[car] ([id])
GO
ALTER TABLE [dbo].[review] CHECK CONSTRAINT [FKoie88l9xdqjv41ym8c1s7valq]
GO
ALTER TABLE [dbo].[ward]  WITH CHECK ADD  CONSTRAINT [FKslko72wj5nauqvsgefqkvwpsb] FOREIGN KEY([district_id])
REFERENCES [dbo].[district] ([id])
GO
ALTER TABLE [dbo].[ward] CHECK CONSTRAINT [FKslko72wj5nauqvsgefqkvwpsb]
GO
USE [master]
GO
ALTER DATABASE [ETransportationSystem] SET  READ_WRITE 
GO
