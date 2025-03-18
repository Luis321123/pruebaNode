readme de github
ChatGPT dijo:
Aquí tienes el contenido listo para copiar y pegar en tu README de GitHub:

md
Copiar
Editar
<div align="center">

# Prueba Técnica: API para Prueba

</div>

## Descripción General

Esta API es el componente del lado del servidor, desarrollado con *Node.js* y *TypeScript*. API simple para gestionar personas y sus lugares de orígenes.

---

<div align="center">

## 🛠 Tecnologías Principales

</div>

- *Node.js*: Entorno de ejecución de JavaScript.
- *TypeScript*: Superset tipado de JavaScript.
- *Express.js*: Framework web para Node.js.
- *MongoDB*: Base de datos NoSQL.
- *Mongoose*: ODM (Object Data Modeling) para MongoDB.

---

<div align="center">

## 👋 Requisitos Previos

</div>

- *Node.js*: Versión >= 16.x.
- *npm*: Versión >= 8.x.
- *MongoDB*: Versión >= 5.x.
- *Git*: Sistema de control de versiones.

---

<div align="center">

## 🔧 Instalación

</div>

1. **Clonar el repositorio**

```bash

git clone https://github.com/Luis321123/pruebaNode.git
cd pruebaNode
Instalar dependencias
bash
Copiar
Editar
npm install
Configurar variables de entorno

Crear un archivo .env en la raíz del proyecto y agregar las variables de entorno necesarias.


Ejecutar el servidor
npm run dev  # Para desarrollo
npm start  

📌 Endpoints de la API

Método	          Endpoint                  	Descripción
POST	           /auth/register	          Crear un nuevo usuario
GET	           /users	                  Obtener todos los usuarios
GET	           /users/:id	              Obtener usuario por ID
GET	           /users/ciudad/:ciudad    	Obtener usuarios por ciudad
PUT	           /users/update/:id	        Actualizar información de usuario
DELETE	           /users/:id	              Eliminar un usuario



🏰 Estructura del Proyecto

├── src
│   ├── controllers   # Manejadores de rutas
│   ├── models        # Esquemas de base de datos
│   ├── routes        # Rutas de Express
│   ├── services      # Lógica de negocio
│   ├── utils         # Funciones auxiliares
│   ├── config        # Archivos de configuración
│   ├── middlewares   # Middlewares de Express
│   ├── app.ts        # Instancia de Express
│   ├── server.ts     # Punto de entrada del servidor
├── .env              # Variables de entorno
├── package.json      # Dependencias del proyecto
├── tsconfig.json     # Configuración de TypeScript






