import sequelize from "../configs/db.config.js";
import {dataTypes} from "sequelize";

export const career = sequelize.define("career", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    description: {
        type: sequelize.STRING,
        allowNull: false,
    },
    location: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
    jobType: {
        type: sequelize.STRING(255),
        allowNull: false,
    },
},
{
    tableName: "career",
    timestamps: false,
}
);