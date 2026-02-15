import { Sequelize } from "sequelize";
require('dotenv').config();
const sequelize = new Sequelize({
    dialect:"postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
     dialectOptions:{
      ssl:{
        require:true,
        rejectUnauthorized:false
      }
    }
});

export default sequelize;