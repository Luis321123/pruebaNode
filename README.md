Sellervate Backend

🚀 Descripción General

prueba tecnica de una api que es el componente del lado del servidor, desarrollado con Node.js y TypeScript. Proporciona APIs robustas y servicios para gestionar las operaciones de servicio al cliente de vendedores de Amazon.

🛠 Tecnologías Principales

Node.js - Entorno de ejecución de JavaScript

TypeScript - Superset tipado de JavaScript

Express.js - Framework web para Node.js

MongoDB - Base de datos NoSQL

Mongoose - ODM para MongoDB


📋 Requisitos Previos

Node.js >= 16.x

npm >= 8.x

MongoDB >= 5.x

Git

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
│   ├── controllers   # Manejadores de rutas
│   ├── db            # Esquemas de base de datos
│   ├── helpers       # Archivos auxiliares
│   ├── routes        # Rutas de Express
│   ├── index.ts      # Instancia de Express
├── .env              # Variables de entorno
├── package.json      # Dependencias del proyecto
├── tsconfig.json     # Configuración de TypeScript
