import { DataTypes, Sequelize } from "sequelize";
import {sequelize} from '../lib/db.js';

const Driver = sequelize.define('driver',{
    avatar:{
        type:DataTypes.STRING,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    contact:{
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default Driver;