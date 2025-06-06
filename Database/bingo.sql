toc.dat                                                                                             0000600 0004000 0002000 00000015227 15020557553 0014455 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        PGDMP   "                    }            bingo    17.5    17.5     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false         �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false         �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false         �           1262    16390    bingo    DATABASE     |   CREATE DATABASE bingo WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE bingo;
                     postgres    false                     2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                     pg_database_owner    false         �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                        pg_database_owner    false    4         �            1259    16448    bingo_analyze    TABLE     /  CREATE TABLE public.bingo_analyze (
    analyze_id bigint NOT NULL,
    analyze_uid character(255),
    user_uid character(255),
    ip_user bigint NOT NULL,
    description text,
    image character(500),
    created_at timestamp with time zone DEFAULT now(),
    update_at timestamp with time zone
);
 !   DROP TABLE public.bingo_analyze;
       public         heap r       postgres    false    4         �            1259    24638    bingo_analyze_analyze_id_seq    SEQUENCE     �   ALTER TABLE public.bingo_analyze ALTER COLUMN analyze_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.bingo_analyze_analyze_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 1000
    CACHE 1
);
            public               postgres    false    4    220         �            1259    16442    bingo_article    TABLE     A  CREATE TABLE public.bingo_article (
    article_id bigint NOT NULL,
    article_uid character(255),
    author character(255),
    judul_article character(150),
    description text,
    image_thumb character(255),
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    update_at timestamp with time zone
);
 !   DROP TABLE public.bingo_article;
       public         heap r       postgres    false    4         �            1259    24636    bingo_article_article_id_seq    SEQUENCE     �   ALTER TABLE public.bingo_article ALTER COLUMN article_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.bingo_article_article_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 1000
    CACHE 1
);
            public               postgres    false    4    219         �            1259    16391 
   bingo_user    TABLE     �  CREATE TABLE public.bingo_user (
    id bigint NOT NULL,
    user_uid character varying(255) NOT NULL,
    nama_lengkap character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password text NOT NULL,
    created_at date DEFAULT now() NOT NULL,
    update_at date DEFAULT now() NOT NULL,
    role character varying(50) DEFAULT 'user'::character varying NOT NULL,
    google_id character varying(255)
);
    DROP TABLE public.bingo_user;
       public         heap r       postgres    false    4         �            1259    16416    bingo_user_id_seq    SEQUENCE     �   ALTER TABLE public.bingo_user ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.bingo_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    217    4         �          0    16448    bingo_analyze 
   TABLE DATA           ~   COPY public.bingo_analyze (analyze_id, analyze_uid, user_uid, ip_user, description, image, created_at, update_at) FROM stdin;
    public               postgres    false    220       4812.dat �          0    16442    bingo_article 
   TABLE DATA           �   COPY public.bingo_article (article_id, article_uid, author, judul_article, description, image_thumb, created_at, update_at) FROM stdin;
    public               postgres    false    219       4811.dat �          0    16391 
   bingo_user 
   TABLE DATA           y   COPY public.bingo_user (id, user_uid, nama_lengkap, email, password, created_at, update_at, role, google_id) FROM stdin;
    public               postgres    false    217       4809.dat �           0    0    bingo_analyze_analyze_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.bingo_analyze_analyze_id_seq', 1, false);
          public               postgres    false    222         �           0    0    bingo_article_article_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.bingo_article_article_id_seq', 1, true);
          public               postgres    false    221         �           0    0    bingo_user_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.bingo_user_id_seq', 6, true);
          public               postgres    false    218         7           2606    24640     bingo_analyze bingo_analyze_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.bingo_analyze
    ADD CONSTRAINT bingo_analyze_pkey PRIMARY KEY (analyze_id);
 J   ALTER TABLE ONLY public.bingo_analyze DROP CONSTRAINT bingo_analyze_pkey;
       public                 postgres    false    220         5           2606    24635     bingo_article bingo_article_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.bingo_article
    ADD CONSTRAINT bingo_article_pkey PRIMARY KEY (article_id);
 J   ALTER TABLE ONLY public.bingo_article DROP CONSTRAINT bingo_article_pkey;
       public                 postgres    false    219         1           2606    16459 #   bingo_user bingo_user_google_id_key 
   CONSTRAINT     c   ALTER TABLE ONLY public.bingo_user
    ADD CONSTRAINT bingo_user_google_id_key UNIQUE (google_id);
 M   ALTER TABLE ONLY public.bingo_user DROP CONSTRAINT bingo_user_google_id_key;
       public                 postgres    false    217         3           2606    16397    bingo_user bingo_user_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.bingo_user
    ADD CONSTRAINT bingo_user_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.bingo_user DROP CONSTRAINT bingo_user_pkey;
       public                 postgres    false    217                                                                                                                                                                                                                                                                                                                                                                                 4812.dat                                                                                            0000600 0004000 0002000 00000000005 15020557553 0014252 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        \.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           4811.dat                                                                                            0000600 0004000 0002000 00000002024 15020557553 0014254 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        1	a532355d-cabe-4336-aa5a-5e11a0906f93                                                                                                                                                                                                                           	$2b$10$nm4ePgBC7/lDzyuP0AdLwe17QgglAoeemYju2sHih5vDlR2nrGMQa                                                                                                                                                                                                   	Artikel Dengan Gambar                                                                                                                                 	Ini adalah artikel yang menyertakan URL gambar thumbnail.	https://placehold.co/800x450/007bff/ffffff?text=ExpressJS_Tutorial                                                                                                                                                                                             	2025-06-06 19:27:51.101077+07	2025-06-06 19:27:51.101077+07
\.


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            4809.dat                                                                                            0000600 0004000 0002000 00000000305 15020557553 0014263 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        6	$2b$10$nm4ePgBC7/lDzyuP0AdLwe17QgglAoeemYju2sHih5vDlR2nrGMQa	Administrator	administrator@gmail.com	$2b$10$Fyu26zAuQQ3LXhDJMzCB/OQwtjTaCHcTIzC0mHFZMwmzfwb58oBrG	2025-06-05	2025-06-05	User	\N
\.


                                                                                                                                                                                                                                                                                                                           restore.sql                                                                                         0000600 0004000 0002000 00000014446 15020557553 0015404 0                                                                                                    ustar 00postgres                        postgres                        0000000 0000000                                                                                                                                                                        --
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE bingo;
--
-- Name: bingo; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE bingo WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';


ALTER DATABASE bingo OWNER TO postgres;

\connect bingo

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bingo_analyze; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bingo_analyze (
    analyze_id bigint NOT NULL,
    analyze_uid character(255),
    user_uid character(255),
    ip_user bigint NOT NULL,
    description text,
    image character(500),
    created_at timestamp with time zone DEFAULT now(),
    update_at timestamp with time zone
);


ALTER TABLE public.bingo_analyze OWNER TO postgres;

--
-- Name: bingo_analyze_analyze_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.bingo_analyze ALTER COLUMN analyze_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.bingo_analyze_analyze_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 1000
    CACHE 1
);


--
-- Name: bingo_article; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bingo_article (
    article_id bigint NOT NULL,
    article_uid character(255),
    author character(255),
    judul_article character(150),
    description text,
    image_thumb character(255),
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    update_at timestamp with time zone
);


ALTER TABLE public.bingo_article OWNER TO postgres;

--
-- Name: bingo_article_article_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.bingo_article ALTER COLUMN article_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.bingo_article_article_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 1000
    CACHE 1
);


--
-- Name: bingo_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bingo_user (
    id bigint NOT NULL,
    user_uid character varying(255) NOT NULL,
    nama_lengkap character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password text NOT NULL,
    created_at date DEFAULT now() NOT NULL,
    update_at date DEFAULT now() NOT NULL,
    role character varying(50) DEFAULT 'user'::character varying NOT NULL,
    google_id character varying(255)
);


ALTER TABLE public.bingo_user OWNER TO postgres;

--
-- Name: bingo_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.bingo_user ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.bingo_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: bingo_analyze; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bingo_analyze (analyze_id, analyze_uid, user_uid, ip_user, description, image, created_at, update_at) FROM stdin;
\.
COPY public.bingo_analyze (analyze_id, analyze_uid, user_uid, ip_user, description, image, created_at, update_at) FROM '$$PATH$$/4812.dat';

--
-- Data for Name: bingo_article; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bingo_article (article_id, article_uid, author, judul_article, description, image_thumb, created_at, update_at) FROM stdin;
\.
COPY public.bingo_article (article_id, article_uid, author, judul_article, description, image_thumb, created_at, update_at) FROM '$$PATH$$/4811.dat';

--
-- Data for Name: bingo_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bingo_user (id, user_uid, nama_lengkap, email, password, created_at, update_at, role, google_id) FROM stdin;
\.
COPY public.bingo_user (id, user_uid, nama_lengkap, email, password, created_at, update_at, role, google_id) FROM '$$PATH$$/4809.dat';

--
-- Name: bingo_analyze_analyze_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bingo_analyze_analyze_id_seq', 1, false);


--
-- Name: bingo_article_article_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bingo_article_article_id_seq', 1, true);


--
-- Name: bingo_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bingo_user_id_seq', 6, true);


--
-- Name: bingo_analyze bingo_analyze_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bingo_analyze
    ADD CONSTRAINT bingo_analyze_pkey PRIMARY KEY (analyze_id);


--
-- Name: bingo_article bingo_article_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bingo_article
    ADD CONSTRAINT bingo_article_pkey PRIMARY KEY (article_id);


--
-- Name: bingo_user bingo_user_google_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bingo_user
    ADD CONSTRAINT bingo_user_google_id_key UNIQUE (google_id);


--
-- Name: bingo_user bingo_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bingo_user
    ADD CONSTRAINT bingo_user_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          