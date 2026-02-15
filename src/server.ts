import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/dbConfig';
const taskRoute = require("./routes/taskRoute"); 
dotenv.config();
const app= express();
const port=process.env.PORT;
app.use(express.json());
app.use("/api", taskRoute); 
const initApp = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected");
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    } catch {
        console.error("Unable to connect to the database:");
    }
}  
initApp();