//* Express Setup
import express from 'express';
const app = express();
app.use(express.json());

//* CORS Setup
import cors from 'cors';
app.use(cors({
    //TODO: CORS Setup
}));

//* Dotenv Setup
import dotenv from 'dotenv';
dotenv.config();

//* Databse Setup
import database from './models';

//* Server Startpoint
database.sequelize.sync().then(() => {
    //TODO: App Start
    app.listen()
}).catch((error: string) => {
    //TODO: Error Handling
})