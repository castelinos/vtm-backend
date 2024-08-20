import express from 'express';
import multer from 'multer';
import { storage } from '../middlewares/fileUploads.js';
import { createVehicle, deleteVehicleByID, findVehicleByID, getVehicleByID, getVehicles } from '../plugins/vehicles.js';

const router = express.Router();
const upload = multer({ storage });

router.get('/', getVehicles);

router.post('/', upload.fields([{ name:'cert_puc', maxCount:1 },{ name:'cert_insurance', maxCount:1 }]), createVehicle);

router.get('/:id', findVehicleByID, getVehicleByID);

router.delete('/:id', findVehicleByID, deleteVehicleByID);

export default router;