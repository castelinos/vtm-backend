import express from 'express';
import config from './config.js';
import { connectDB } from './lib/db.js';
import driverRouter from './routes/driver.js';
import vehicleRouter from './routes/vehicle.js'

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended:false }));

server.use('/catalog/drivers', driverRouter);
server.use('/catalog/vehicles', vehicleRouter);

server.listen( config.server.port, ()=>{
    console.log('Server listening on port', config.server.port);
})