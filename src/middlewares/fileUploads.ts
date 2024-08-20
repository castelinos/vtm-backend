import multer from 'multer';
import path from 'node:path';

export const storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null, './storage/avatars');
    },
    filename: function(req, file, cb){
        let fileName = file.originalname.split('.')[0];
        fileName = fileName + '_' + Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
})