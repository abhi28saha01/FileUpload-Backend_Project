const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    fileUrl : {
        type : String,
    },
    fileType : {
       type : String,
       enum : ['Image','Video'] 
    },
    tags : {
        type : String,
    },
    email : {
        type : String
    }
});

module.exports = mongoose.model('File',FileSchema);