const express = require('express');
const router = express.Router();

const {ImageUpload} = require('../controllers/imageUpload');
const {VideoUpload} = require('../controllers/videoUpload');
const {ImageQualityUpload} = require('../controllers/imageQualityUpload');

router.post('/upload/image',ImageUpload);
router.post('/upload/video',VideoUpload);
router.post('/quality/upload/image',ImageQualityUpload);

module.exports = router;