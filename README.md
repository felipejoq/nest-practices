# Repositorio de ejercicios usando Nest.js

Este repositorio contiene ejercicios realizados con Nest.js

> 1. [Simple CRUD en memoria](./01-simple-crud-memory/)

- Simple ejercicio para refrescar conceptos sobre Nest.js

> 2. [TypeScript para Nestjs - Repaso](./02-repaso-typescript/)

- Conceptos de TypeScript que sirven para profundizar en Nest.js

> 3. [Automotora - Práctica Nestjs](./03-nest-car-dealership/)

- Incluye desarrollo básico con Nest.js repasando los siguientes conceptos:
  - DTOs, Interfaces, Anotaciones, Exception filters, Validations and Parse Pipes, HTTP Requests (GET, POST, PATCH, PUT, DELETE).

>4. [Pokedex - Nestjs + Mongo](./04-nest-pokedex/)

- Forma rápida para conectar la aplicación de Nest.js con un SGDB como Mongo en este caso.
- Usa la implementación propia de Nest.js para trabajar con mongoose como ORM
- La base de datos es proveida por un Docker Container configurado en el archivo [Docker](./04-nest-pokedex/docker-compose.yaml)
- Sirve contenido estático y añade un prefijo a la URL global del API RESTful

>5. [TESTlo Shop - Nestjs + Postgres](./05-nest-teslo-shop/)

- Uso de base de datos relacional (PostgreSQL + TypeORM)
- Subida de archivos
- Creación de guards y decoradores, agrupación de los mismos.
- Autenticación y Autorización de usuarios con JWT usando Passport.
- Introducción a los websockets (Pequeño chat).
