# Prueba Técnica: API para Prueba

## Descripción General

Esta API es el componente del lado del servidor, desarrollado con *Node.js* y *TypeScript*.  API simple para gestionar personas y sus lugares de origenes

---

## 🛠 Tecnologías Principales

- *Node.js*: Entorno de ejecución de JavaScript.
- *TypeScript*: Superset tipado de JavaScript.
- *Express.js*: Framework web para Node.js.
- *MongoDB*: Base de datos NoSQL.
- *Mongoose*: ODM (Object Data Modeling) para MongoDB.

---

## 📋 Requisitos Previos

- *Node.js*: Versión >= 16.x.
- *npm*: Versión >= 8.x.
- *MongoDB*: Versión >= 5.x.
- *Git*: Sistema de control de versiones.


🔧 Instalación

Clonar el repositorio

https://github.com/Luis321123/pruebaNode.git

Instalar dependencias

npm install

Configurar variables de entorno

Crear un archivo .env en la raiz del proyecto y agrega las variables de entorno necesarias.

Ejecutar el servidor

npm run dev  # Para desarrollo
npm start # 

📌 Endpoints de la API

Método              Endpoint                    Descripción

POST            /auth/register          Crear un nuevo usuario

GET             /users                  Obtener todos los usuarios

GET             /users/:id              Obtener usuario por ID

GET             /users/ciudad/:ciudad   obtener usuarios por ciudad

PUT             /users/update/:id       Actualizar información de usuario

DELETE          /users/:id              Eliminar un usuario

🏗 Estructura del Proyecto

├── src
│   ├── controllers       # Manejadores de rutas
│   ├── db                # Esquemas de base de datos
│   ├── routes            # Rutas de Express
│   ├── index.ts          # Instancia de Express
├── .env                  # Variables de entorno
├── package.json          # Dependencias del proyecto
├── tsconfig.json         # Configuración de TypeScript
