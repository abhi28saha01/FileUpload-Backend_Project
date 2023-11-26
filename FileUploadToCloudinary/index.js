const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 8000;

app.use(express.json());
const fileUpload = require('express-fileupload');
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

require('./config/database').connect();
require('./config/cloudinary').cloudConnect();

//API MOUNT
const router = require('./routes/route');
app.use('/api/v1',router);

app.listen(port , () => {
    console.log('APP Running Successfully in Port : ',port);
})
 