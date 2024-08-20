import express from 'express';
import { createDriver, deleteDriverByID, findDriverByID, getDriverByID, getDrivers } from '../plugins/driver.js';
import { storage } from '../middlewares/fileUploads.js';
import multer from 'multer';

const upload = multer({ storage });
const router = express.Router();

router.get('/', getDrivers);

router.post('/', upload.single('avatar'), createDriver);

router.get('/:id', findDriverByID, getDriverByID);

router.delete('/:id', findDriverByID, deleteDriverByID)

export default router;