USE [master]
GO
/****** Object:  Database [ETransportationSystem]    Script Date: 08/10/2022 12:47:20 AM ******/
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
/****** Object:  Table [dbo].[account]    Script Date: 08/10/2022 12:47:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[account](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[avatar] [varchar](255) NULL,
	[balance] [float] NULL,
	[birth_date] [datetime2](7) NULL,
	[email] [varchar](30) NULL,
	[gender] [varchar](15) NULL,
	[glpx] [varchar](255) NULL,
	[join_date] [datetime2](7) NULL,
	[name] [nvarchar](50) NULL,
	[password] [varchar](100) NOT NULL,
	[phone] [varchar](20) NULL,
	[status] [varchar](15) NULL,
	[thumnail] [varchar](255) NULL,
	[username] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [UK_gex1lmaqpg0ir5g1f5eftyaa1] UNIQUE NONCLUSTERED 
(
	[username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[account_role]    Script Date: 08/10/2022 12:47:20 AM ******/
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
/****** Object:  Table [dbo].[address]    Script Date: 08/10/2022 12:47:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[address](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[street] [nvarchar](255) NULL,
	[city_id] [bigint] NOT NULL,
	[district_id] [bigint] NOT NULL,
	[ward_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[book]    Script Date: 08/10/2022 12:47:20 AM ******/
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
	[status] [varchar](15) NULL,
	[total_price] [float] NOT NULL,
	[account_id] [bigint] NOT NULL,
	[car_id] [bigint] NOT NULL,
	[voucher_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[brand]    Script Date: 08/10/2022 12:47:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[brand](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[car]    Script Date: 08/10/2022 12:47:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[car](
	[id] [bigint] NOT NULL,
	[car_rental_terms] [nvarchar](255) NULL,
	[color] [nvarchar](30) NULL,
	[description] [nvarchar](255) NULL,
	[fuel] [nvarchar](30) NULL,
	[fuel_consumption] [nvarchar](20) NULL,
	[latitude] [float] NOT NULL,
	[license_plates] [varchar](15) NULL,
	[longitude] [float] NOT NULL,
	[modified_date] [datetime2](7) NULL,
	[price] [float] NOT NULL,
	[register_date] [datetime2](7) NULL,
	[sale_month] [int] NOT NULL,
	[sale_week] [int] NOT NULL,
	[seats] [int] NOT NULL,
	[status] [varchar](20) NULL,
	[transmission] [nvarchar](50) NULL,
	[year_of_manufacture] [nvarchar](10) NULL,
	[account_supplier_id] [bigint] NOT NULL,
	[model_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[car_feature]    Script Date: 08/10/2022 12:47:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[car_feature](
	[car_id] [bigint] NOT NULL,
	[feature_id] [bigint] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[car_image]    Script Date: 08/10/2022 12:47:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[car_image](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[image] [varchar](255) NULL,
	[car_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[city]    Script Date: 08/10/2022 12:47:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[city](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[code] [varchar](50) NULL,
	[image] [varchar](255) NULL,
	[name] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[district]    Script Date: 08/10/2022 12:47:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[district](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[code] [varchar](50) NULL,
	[name] [nvarchar](100) NULL,
	[city_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[feature]    Script Date: 08/10/2022 12:47:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[feature](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[icon] [varchar](255) NULL,
	[name] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[model]    Script Date: 08/10/2022 12:47:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[model](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[brand_id] [bigint] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[notification]    Script Date: 08/10/2022 12:47:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[notification](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[created_date] [datetime2](7) NULL,
	[discription] [nvarchar](255) NULL,
	[is_read] [bit] NOT NULL,
	[short_discription] [nvarchar](255) NULL,
	[title] [nvarchar](255) NULL,
	[account_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[review]    Script Date: 08/10/2022 12:47:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[review](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[content] [nvarchar](255) NULL,
	[review_date] [datetime2](7) NULL,
	[star_review] [int] NOT NULL,
	[status] [varchar](50) NULL,
	[account_id] [bigint] NULL,
	[car_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[role]    Script Date: 08/10/2022 12:47:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[role](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[voucher]    Script Date: 08/10/2022 12:47:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[voucher](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[code] [varchar](50) NULL,
	[discription] [nvarchar](255) NULL,
	[end_date] [datetime2](7) NULL,
	[image] [varchar](255) NULL,
	[max_discount] [int] NOT NULL,
	[percentage] [int] NOT NULL,
	[start_date] [datetime2](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ward]    Script Date: 08/10/2022 12:47:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ward](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[code] [varchar](50) NULL,
	[name] [nvarchar](255) NULL,
	[district_id] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
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
ALTER TABLE [dbo].[car]  WITH CHECK ADD  CONSTRAINT [FK3sr9aje2ymv15iu0kar1idwyt] FOREIGN KEY([id])
REFERENCES [dbo].[address] ([id])
GO
ALTER TABLE [dbo].[car] CHECK CONSTRAINT [FK3sr9aje2ymv15iu0kar1idwyt]
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
