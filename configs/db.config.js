import dotenv from 'dotenv';
import {Sequelize} from'sequelize';
import mysql from 'mysql2';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, {
        dialect: 'mysql',
        host: process.env.DB_HOST,
    });

export default sequelize;