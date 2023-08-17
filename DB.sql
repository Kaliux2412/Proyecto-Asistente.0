PGDMP         7                {            postgres    15.3    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    5    postgres    DATABASE     �   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3353                        2615    2200    proyecto_asistente    SCHEMA     "   CREATE SCHEMA proyecto_asistente;
     DROP SCHEMA proyecto_asistente;
                pg_database_owner    false                       0    0    SCHEMA proyecto_asistente    COMMENT     B   COMMENT ON SCHEMA proyecto_asistente IS 'standard public schema';
                   pg_database_owner    false    6                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false                       0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    32836 
   dieta_desa    TABLE     C  CREATE TABLE proyecto_asistente.dieta_desa (
    ingredientes character varying NOT NULL,
    calorias character varying NOT NULL,
    horario character varying NOT NULL,
    imagen character varying NOT NULL,
    nombre character varying NOT NULL,
    descripcion character varying NOT NULL,
    calo character varying
);
 *   DROP TABLE proyecto_asistente.dieta_desa;
       proyecto_asistente         heap    postgres    false    6            �            1259    32856    ingredientes    TABLE     �   CREATE TABLE proyecto_asistente.ingredientes (
    nombre character varying NOT NULL,
    vitaminas character varying NOT NULL,
    calorias character varying NOT NULL,
    imagen character varying NOT NULL,
    calo character varying
);
 ,   DROP TABLE proyecto_asistente.ingredientes;
       proyecto_asistente         heap    postgres    false    6            �            1259    32851    instru_desa    TABLE     ^   CREATE TABLE proyecto_asistente.instru_desa (
    instrucciones character varying NOT NULL
);
 +   DROP TABLE proyecto_asistente.instru_desa;
       proyecto_asistente         heap    postgres    false    6            �            1259    32793    tablaejercicios    TABLE     �   CREATE TABLE proyecto_asistente.tablaejercicios (
    id_tipo smallint,
    nombre character varying,
    utilidad character varying,
    imagen character varying,
    calorias character varying,
    cantidad character varying
);
 /   DROP TABLE proyecto_asistente.tablaejercicios;
       proyecto_asistente         heap    postgres    false    6            �            1259    24581    tipovida    TABLE     �   CREATE TABLE proyecto_asistente.tipovida (
    id_vida smallint,
    activa character varying,
    tranquila character varying,
    estresante character varying
);
 (   DROP TABLE proyecto_asistente.tipovida;
       proyecto_asistente         heap    postgres    false    6            �            1259    32823    usuarios    TABLE     �   CREATE TABLE proyecto_asistente.usuarios (
    id_usuario bigint NOT NULL,
    nombre character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    password character varying(200) NOT NULL,
    id_tipovida smallint NOT NULL
);
 (   DROP TABLE proyecto_asistente.usuarios;
       proyecto_asistente         heap    postgres    false    6            �            1259    32822    usuarios_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE proyecto_asistente.usuarios_id_usuario_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE proyecto_asistente.usuarios_id_usuario_seq;
       proyecto_asistente          postgres    false    6    218                       0    0    usuarios_id_usuario_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE proyecto_asistente.usuarios_id_usuario_seq OWNED BY proyecto_asistente.usuarios.id_usuario;
          proyecto_asistente          postgres    false    217            z           2604    32826    usuarios id_usuario    DEFAULT     �   ALTER TABLE ONLY proyecto_asistente.usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('proyecto_asistente.usuarios_id_usuario_seq'::regclass);
 N   ALTER TABLE proyecto_asistente.usuarios ALTER COLUMN id_usuario DROP DEFAULT;
       proyecto_asistente          postgres    false    217    218    218                      0    32836 
   dieta_desa 
   TABLE DATA           t   COPY proyecto_asistente.dieta_desa (ingredientes, calorias, horario, imagen, nombre, descripcion, calo) FROM stdin;
    proyecto_asistente          postgres    false    219   �                 0    32856    ingredientes 
   TABLE DATA           ]   COPY proyecto_asistente.ingredientes (nombre, vitaminas, calorias, imagen, calo) FROM stdin;
    proyecto_asistente          postgres    false    221   �                 0    32851    instru_desa 
   TABLE DATA           @   COPY proyecto_asistente.instru_desa (instrucciones) FROM stdin;
    proyecto_asistente          postgres    false    220   �"                 0    32793    tablaejercicios 
   TABLE DATA           l   COPY proyecto_asistente.tablaejercicios (id_tipo, nombre, utilidad, imagen, calorias, cantidad) FROM stdin;
    proyecto_asistente          postgres    false    216   �%                 0    24581    tipovida 
   TABLE DATA           V   COPY proyecto_asistente.tipovida (id_vida, activa, tranquila, estresante) FROM stdin;
    proyecto_asistente          postgres    false    215   ,                 0    32823    usuarios 
   TABLE DATA           `   COPY proyecto_asistente.usuarios (id_usuario, nombre, email, password, id_tipovida) FROM stdin;
    proyecto_asistente          postgres    false    218   1,                  0    0    usuarios_id_usuario_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('proyecto_asistente.usuarios_id_usuario_seq', 32, true);
          proyecto_asistente          postgres    false    217            |           2606    32830    usuarios usuarios_email_key 
   CONSTRAINT     c   ALTER TABLE ONLY proyecto_asistente.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);
 Q   ALTER TABLE ONLY proyecto_asistente.usuarios DROP CONSTRAINT usuarios_email_key;
       proyecto_asistente            postgres    false    218            ~           2606    32828    usuarios usuarios_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY proyecto_asistente.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario);
 L   ALTER TABLE ONLY proyecto_asistente.usuarios DROP CONSTRAINT usuarios_pkey;
       proyecto_asistente            postgres    false    218                 x�5P1N�0��WHVGC{�E�����K�7�N�<�P ���������ٙ��x�[���N�d�`�`�H7��$�
��qȺ�W��g1�܈�T�����͒/� ��ׇ����cq?t�-'Z� ��b�7�@~j��\�)Z��:I�Ȗ��>edi^O���Hx�*�9t��SYm���	�_��v�2Yo���Q��
��/c���gЌ��4h��j����h����#�U�c���w:J�hx�_��(_��, �z_           x�uT=o�0��_qc���2Ʈ�퐡
t9I��D*�dT�7;d(�u��;�J�	d�����{���MVm�$�|+��
q���?�6���a�Ժ�QO��R��uTw=��1������،n�-L�U�
g[����t��*��l��ƈ�.�c@���;�M��p*�ĕ�RJ�q=�.����*���ׯ��l۬'XO�������b�TqJ�0?8�@�rO*�%��z�]�;�J�La\��}'�����x��\�?0s�񐄖Ϫ�X<WQa�k9(>JM��5.�58۸"҄4��C}<���O�����GT�|^f�O��A-�a;����˫�������U�٭;�jT���4+1�Dr�PI�#�w~H�98�&�F���b<
FE�%l�� � �=A���=jW�d�,ͦSH�zHJ�jP{}=�20�J^_'7ۘx޺!�x3��
��x(���x����R�8XA���t�V��@ixtGF7mz����L�s9���QW��T�h'�T�	�r��&�lc�����A����n#��-B��C$I��m��C3����I�Pi'���D�1b��2#X��g�1��0�uGA��#2L�9ŋ��mL�=������)���;�<���^��b
4rS��9��C+�1�d�|l/9:��_��f���a�̦�*4�� ��Ï����kł��� �����B��_6��i��#�S���f2��3ﰊ)J��#Ǩ`~�|ɒ$��*�         �  x�eT�n�0��+���$}�>� -Z$魗��H�ʇ �o�	Eo=�?�YʱS�b������R熾F?H4�1�`%R��u�9��&�L��b%������s������*#S�{��W�)�;o�2˂`K��|��6ͅ�w���E���#����� ��`l�]H<T��^ԍ�}�i���&���3�X2��$�KɉG��(6�O�@�K"̄�"�Y���m3�*����4/L5a�mŝ8q�����Rb�O�n�`ze��H�7�.z>�gV���i^�\��9���lmæC�K�&��-'��N���I�
�خ!4�N��bR������Ӽ�=�<�c�� J��#��z=���j�- �쪔MX��״�S^Ѷb�)�\���4��v:r]���ۧؓ�ڊ��o)�e�����cѰ{�>�v?k�a
���y���cI�F9�`�7�>�u ���K�W�
-�)�`�0�+O�s+��eY=(��0��Votb5`������<n��%��9��1�u-�D`���E<!��w��������KDP�>��G�F�:d���@h��pŉ8���Ҙu:xe�"��_�!�\�X#ѢԼjw�.�����y�tus��.������o���Ϟ��i��/⎥         �  x�}W�r7<S_�`1&e9���ĕT���W�*,vHA�k`���s�)7]�c�`�KIΉK�����M�=QZ��RtC�Xc����j��u�otTN�m�x�՞�M��^{�ׯ���TwxH&;<}Τ�m��vdȫ���x�j�OKu�&<�Nr�/&��hy	�ٹ��@!��u�t������_F������!{Jg�ť��\k�z�[2CP��s&�1���k��D�)�ڵz�zK�k��`K�_�����M�[�_	����(�GdP�Q����oF�qح5@K��%�TM�wr��H���jI��͝އ������:���b��8��H�2��������%�Y3�<�����z�6��_�]P]�+�Ǻo�%�<��@G���;�e����HA(ndP�o �>��<;i�f��+�C��=��:�P��q�75�b}�P�ë���v0��
S&���W��+��h�A���+��gYc�&t�#h��A
�����tL�ΝĀ�ù9�z��"Qd��Ĝ����%F���avI�I��,��Ew��m������15X��G;t��`�����}"ua����݃�Y�es�P5@�����x'��E�P5�q�:�	't q�a[��r��m���-�pv8�����	��@ϬrG;E��Zr�e..����'�Hgq�av�ME�}D6-
��M�os$c;�]ϝ���0k��S�������˸��!->i�/��r�^�R��\0�$�KDu�Ô���.��o�6���x���W�C
X��o�Xs�K��7z�h��K�>�.p�	߉J�����B���Yp���2RJb�Ռ&���[�hB���RE}H\F��&�Z�:��X�c_R�M,�="x��.��i�z&n���h�G�U:��qڨ�B06�=nI������X���t�Վ��L Ʉ�z]Yc';L���k�e�����pYA=��R�({�P�E��9���pQ�'UHw�:��S�T���x ��Q����架��(��}�P�Z`����">ڔ�8eY��+Yn5��zwl@|:70���i�}�c�bȊp���o��&��
�g�#4r}�~���m��M���q2�RY���^�&v{{wM�bPU�)B��*�؈4���d�B
���U���i�Dҋ(�N�I��ͥR�scz�j�.S@R���7�� ��r���G��hi�����ɉ;w<^�u���?)1Z��O�%�'T�R�$P��tv�S�C"�%��f"���O)�I�cI�|��1 ��y8�I�쨃?sQM���'S@���;��20Y�ڎ�v���I��>։�ũL7�E��}��Z�'���ƬL�嚿O�ù����N�(�����y��2�q8�l���:s�Q���}���]���/2��-���s��)�(",c��v��M�����g�>��퉷�������ߗƾ���UP��,��8�@t�E+��7�N��b�]y%��#�ǒ3vx�(7se�')�}��8�:�U��#P#��dA�U9��6�]��D+�Ö��������h5�_k�U� p�c�ח���>�8ʬ�=��u`<y�D��p�w��e|��p����gf�?Wggg�̽c|            x������ � �         K  x�u��֢����s�!A�٥T@i�u&	&��4�H��j���	����c�H@�e�����Ks�	�9�D�Y�7G�fv���~�(۾-��}k|~l�ܠ�����q�֌����[M0��������ѳ�+T���{l�@J+����f5�H�uO��4ꁔ$�i��d�m�.���:e.��*XA*��X��'7�_��kb��X�ۺ� �M�\u恱"Ch�ܣ����xS��Ҹ�W�W:@�����?��#)���
>��#�;j�]K�*3<̛����*rf<�P)l˨,p[R�l�h�������gmr42��OvD���Ńi�@�d"}�l�|�U}:>���
,E涋=!�dp>�/��4����m���J�ںo��T���~�>���!LSvt���:O�]��]��MTr�G}��A��Ʒz���i�0R�Aci��r}ӕ{􉯯�70����GZ�YIU���l4���3�>`U�<B�*4��TG�?�ȸ�:D���
�A�"����P�����'[~��͎��k���4*�}Օ��I���s�X��ef�6S�J���rܑ��_u���v%3m; �p�o�Ok��]��V�A�N�Da�Sf�_-����h��a�#*�u��8]w��u�~+I�w��j٩c��d���5��et���B�\�.`���R�İha��7�\�fЦP���oJB��"�Vǡ}{k��S��,�w|H{�|Ղ�(�P0���H<o6h�9��6]�Of���MW>�F�3��[̼+��u�V��f�O9�R�e�G��9����d�A�z��2�I�PR���i8'v��py�Z���#2�����пJb�`+������C��ͨ�]��呭
$��B����k*����נG�妽|Z+\�$��������J�jQn�'�UVj���%�p�
��ճ�8J�EO��s����	�:�0y���̱�F�$�-_�V��S򅽙�Quń5����v��>�zs��F�Vӻ�_���v��0Di�L�Rs������e���T&=&MY|158��n)��1�6�<�;f�Zs9�hا�m[\�0�e��c�����y�.)���7v�ޏ���������aK2��Wڂ��׶���$��\�����JA��lHM����Gf*="Q��duRec�i�c,�n�I.a���qr\���Y����Eu��$�?h����~�AЎ��z����$��G+�HW/�����$6�����9 ��她�����M���c> X�]���c'�c��7f�Q��ǂ���e_�lW�rxxQ<�Z졠��|\n��_�~���;     