PGDMP                         }            bingo     15.1 (Ubuntu 15.1-1.pgdg22.10+1)     15.1 (Ubuntu 15.1-1.pgdg22.10+1) 	    2           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            3           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            4           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            5           1262    16387    bingo    DATABASE     q   CREATE DATABASE bingo WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE bingo;
                postgres    false            �            1259    16398    bingo_article    TABLE     A  CREATE TABLE public.bingo_article (
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
       public         heap    postgres    false            �            1259    16397    bingo_article_article_id_seq    SEQUENCE     �   ALTER TABLE public.bingo_article ALTER COLUMN article_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.bingo_article_article_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 10000
    CACHE 1
    CYCLE
);
            public          postgres    false    216            /          0    16398    bingo_article 
   TABLE DATA           �   COPY public.bingo_article (article_id, article_uid, author, judul_article, description, image_thumb, created_at, update_at) FROM stdin;
    public          postgres    false    216   =
       6           0    0    bingo_article_article_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.bingo_article_article_id_seq', 1, false);
          public          postgres    false    215            �           2606    16405     bingo_article bingo_article_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.bingo_article
    ADD CONSTRAINT bingo_article_pkey PRIMARY KEY (article_id);
 J   ALTER TABLE ONLY public.bingo_article DROP CONSTRAINT bingo_article_pkey;
       public            postgres    false    216            /      x������ � �     