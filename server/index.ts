//* Express Setup
const express = require('express');
const app = express();
app.use(express.json());

//* CORS Setup
const cors = require('cors');
app.use(cors({
    //TODO: CORS Setup
}));

//* Dotenv Setup
require('dotenv').config({ path: "../.env" });

//* Databse Setup
const database = require('./models');

//* Server Startpoint
database.sequelize.sync().then(() => {
    //TODO: App Start
    app.listen(process.env.SERVER_PORT || 3010, () => {
        console.log("Server running");
    });
}).catch((error: string) => {
    console.log(error)
})