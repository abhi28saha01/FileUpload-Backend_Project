const File = require('../models/FileModel');
const cloudinary = require('cloudinary').v2;

async function uploadToCloudinary(file,folder){
    const options = {folder};
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

exports.ImageUpload = async(req,res) => {
    try{
        //Fetch Information
        const {name,tags,email} = req.body;
        const file = req.files.imageFile;
        //Validation
        const supportedTypes = ['jpg','png','jpeg'];
        const fileType = file.name.split('.')[1].toLowerCase();
        if(!supportedTypes.includes(fileType)){
            return res.status(400).json({
                success : false,
                message : 'File Format is Not Supported'
            })
        }
        //File Format Supported
        const response = await uploadToCloudinary(file,'AbhiFolder');
        console.log(response);
        //Save Entry into DB
        const saveFile = await File.create({name,fileUrl : response.secure_url,fileType : 'Image',tags,email})
        res.status(200).json({
            success : true,
            saveFile,
            message : 'Image Uploaded Successfully',
        })
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success : false,
            message : 'Something went wrong in ImageUpload Function'
        })
    }
};