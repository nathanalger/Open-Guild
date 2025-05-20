CREATE DATABASE openguild_test;

\connect openguild
\i /docker-entrypoint-initdb.d/base_schema.sql

\connect openguild_test
\i /docker-entrypoint-initdb.d/base_schema.sql