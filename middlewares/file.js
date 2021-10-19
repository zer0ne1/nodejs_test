const multer = require('multer');
const upload = multer({dest: 'public/media/'});
const fs = require('fs');
const db = require('../utils/db');

// const uploads = upload.single('image');
const multipleUpload = upload.fields([{
    name: 'file'
}])

const checkFile = (req, res, next) => {
    const files = req.files;
    console.log(...files);
    if(!files){
        console.log('File not change');
        next();
    } else {
        console.log(req.files.mimetype)
        const tailFile = req.files.mimetype.split('/').slice(1);
        const addTail = req.files.path.concat('.', tailFile);
        console.log(addTail);
        fs.rename(req.files.path, addTail, (err) => {
            if(err) next(err);
            console.log('Uploaded file successfully');
            req.body.url = addTail.split('\\').slice(1).join("/");
            console.log(req.body.url);
            next();
        });
    }
}

module.exports = {
    // uploads,
    multipleUpload,
    checkFile
}