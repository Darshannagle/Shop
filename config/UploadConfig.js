const multer = require('multer');
const path = require('path');

const storageConfig = multer.diskStorage({
    destination: path.join(__dirname, 'uploads'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const fileFilterConfig = function (req, file, cb) {
    console.log(JSON.stringify(file));
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg") {
        cb(null, true);

    } else {
        cb(new Error("only JPG/JPEG file are allowed"), false);
    }
};

const upload = multer({
    storage: storageConfig,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: fileFilterConfig
});

module.exports = upload;
