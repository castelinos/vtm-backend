import { DataTypes } from "sequelize";
import {sequelize} from '../lib/db.js';

const Vehicle = sequelize.define('vehicle',{
    vehicleNumber:{
        type:DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    brandName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    vehicleType:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    image:{
         type: DataTypes.STRING,
    },
    certPUC:{
        type: DataTypes.STRING,
    },
    certInsurance:{
        type: DataTypes.STRING,
    },
    ownerEntityID:{
        type: DataTypes.STRING,
    },
    ownerEntityType:{
        type: DataTypes.STRING,
    }
});

export default Vehicle;