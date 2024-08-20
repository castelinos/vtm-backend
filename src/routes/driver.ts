import express from 'express';
import { createDriver, deleteDriverByID, findDriverByID, getDriverByID, getDrivers } from '../plugins/driver.js';

const router = express.Router();

router.get('/', getDrivers);

router.post('/', createDriver);

router.get('/:id', findDriverByID, getDriverByID);

router.delete('/:id', findDriverByID, deleteDriverByID)

export default router;