import { Sequelize } from 'sequelize';
import config from '../config.js';

interface configDB {
    name: string,
    host: string,
    port: number,
    user: string,
    password:string,
}

const connectionURL = getConnectionString(config.db);

export const sequelize = new Sequelize(connectionURL,{
    dialect:'mysql',
    logging: true
});

export async function connectDB(){
    try {
        await sequelize.authenticate();
        console.log('Database connected!!!');
    } catch (error) {
        console.log('Err connecting DB', error);
        process.exit(0);
    }
}

function getConnectionString( configDB: configDB ){
    const { user, password, host, port, name } = configDB;
    return `mysql://${user}:${password}@${host}:${port}/${name}`
}

