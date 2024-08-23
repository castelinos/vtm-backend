import config from "../config.js";
import Vehicle from "../models/Vehicle.js";


export async function getVehicles(req,res) {
    try {
        let data = await Vehicle.findAll();
        res.status(200).json({ data });
    } catch (error) {
        console.log('Error fetching vehicles data', error.message);

        res.status(500).json({
            message:"Internal server error"
        })
    }
}

export async function createVehicle(req,res) {
    try {
        const { 
            vehicle_no: vehicleNumber, 
            vehicle_type: vehicleType,
            brand_name: brandName,
            owner_id: ownerID,
            owner_type: ownerType
        } = req.body;

        const { path: imageFilePath } = req.files['image'][0];
        const vehicleImagePath = imageFilePath ? new URL( imageFilePath, config.server.url).toString() : '';

        const { path: pucFilePath } = req.files['cert_puc'][0];
        const pucPath = pucFilePath ? new URL( pucFilePath, config.server.url).toString() : '';

        const { path: insuranceFilePath } = req.files['cert_insurance'][0];
        const insurancePath = insuranceFilePath ? new URL( insuranceFilePath, config.server.url).toString() : '';
        
        await Vehicle.create({
            image: vehicleImagePath, 
            vehicleNumber,
            vehicleType,
            brandName,
            ownerEntityID: ownerID,
            ownerEntityType: ownerType,
            certPUC: pucPath,
            certInsurance: insurancePath,
        });

        res.status(201).json({message:'Vehicle profile created!'});

    } catch (error) {
        console.log('Error creating vehicle profile', error.message)
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

export async function getVehicleByID(req,res) {
    try {
        res.status(200).json({ data:req.vehicle });
    } catch (error) {
        console.log('Error fetching vehicle by ID', error.message);

        res.status(500).json({
            message:"Internal server error"
        })
    }
}

export async function deleteVehicleByID(req, res, next){
    try {
        const vehicle = req.vehicle;
        await vehicle.destroy();
        res.status(200).json({
            message:"Vehicle profile deleted"
        })
    } catch (error) {
        console.log('Error deleting vehicle profile',error.message);
    }
}

export async function findVehicleByID(req,res,next){
    try {
        const id = req.params.id;
        let vehicle = await Vehicle.findByPk(id);

        if( !vehicle ) {
            return res.status(404).json({"message":"Vehicle data not found"});
        }
        
        req.vehicle = vehicle;
        next();
    } catch (error) {
        res.status(500).json({"message":"Vehicle data not found"});
    }
}