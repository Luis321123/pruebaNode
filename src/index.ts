import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';
import connectDB from './config/db';
import router from './router';

dotenv.config();

if (!process.env.PORT || !process.env.MONGODB_URI) {
    console.error("Faltan variables de entorno requeridas.");
    process.exit(1);
}

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

connectDB();

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${process.env.PORT}`);
});

app.use('/', router);
