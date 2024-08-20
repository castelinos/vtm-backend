import Driver from "../models/Driver.js";


export async function getDrivers(req,res) {
    try {
        let data = await Driver.findAll();
        res.status(200).json({ data });
    } catch (error) {
        console.log('Error fetching drivers data', error.message);

        res.status(500).json({
            message:"Internal server error"
        })
    }
}

export async function createDriver(req,res) {
    try {
        const { name, contact } = req.body;
        const { filename } = req.file;

        await Driver.create({ avatar: filename, name, contact });
        res.status(201).json({message:'Driver profile created!'});

    } catch (error) {
        console.log('Error creating driver profile', error.message)
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

export async function getDriverByID(req,res) {
    try {
        res.status(200).json({ data:req.driver });
    } catch (error) {
        console.log('Error fetching driver by ID', error.message);

        res.status(500).json({
            message:"Internal server error"
        })
    }
}

export async function deleteDriverByID(req, res, next){
    try {
        const driver = req.driver;
        await driver.destroy();
        res.status(200).json({
            message:"Driver profile deleted"
        })
    } catch (error) {
        console.log('Error deleting driver',error.message);
    }
}

export async function findDriverByID(req,res,next){
    try {
        const id = req.params.id;
        let driver = await Driver.findByPk(id);

        if( !driver ) {
            return res.status(404).json({"message":"Driver data not found"});
        }
        
        req.driver = driver;
        next();
    } catch (error) {
        res.status(500).json({"message":"Driver data not found"});
    }
}