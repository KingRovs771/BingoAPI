PGDMP                         }            bingo     15.1 (Ubuntu 15.1-1.pgdg22.10+1)     15.1 (Ubuntu 15.1-1.pgdg22.10+1) 	    6           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            7           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            8           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            9           1262    16387    bingo    DATABASE     q   CREATE DATABASE bingo WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE bingo;
                postgres    false            �            1259    16407    bingo_analyze    TABLE     /  CREATE TABLE public.bingo_analyze (
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
       public         heap    postgres    false            �            1259    16406    bingo_analyze_analyze_id_seq    SEQUENCE     �   ALTER TABLE public.bingo_analyze ALTER COLUMN analyze_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.bingo_analyze_analyze_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 10000
    CACHE 1
    CYCLE
);
            public          postgres    false    218            3          0    16407    bingo_analyze 
   TABLE DATA           ~   COPY public.bingo_analyze (analyze_id, analyze_uid, user_uid, ip_user, description, image, created_at, update_at) FROM stdin;
    public          postgres    false    218   !
       :           0    0    bingo_analyze_analyze_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.bingo_analyze_analyze_id_seq', 1, false);
          public          postgres    false    217            �           2606    16413     bingo_analyze bingo_analyze_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.bingo_analyze
    ADD CONSTRAINT bingo_analyze_pkey PRIMARY KEY (analyze_id);
 J   ALTER TABLE ONLY public.bingo_analyze DROP CONSTRAINT bingo_analyze_pkey;
       public            postgres    false    218            3      x������ � �     