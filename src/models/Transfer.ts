import { DataTypes } from "sequelize";
import {sequelize} from '../lib/db.js';

const Transfer = sequelize.define('transfer',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    vehicleNumber:{
        type:DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    prevOwnerID:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    currentOwnerID:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    transferredAt:{
        type: DataTypes.DATE,
        allowNull:false,
        defaultValue: new Date(),
    }
},{
    timestamps:false
});

export default Transfer;