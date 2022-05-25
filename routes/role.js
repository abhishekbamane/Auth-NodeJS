const express = require('express');

const { body } = require('express-validator');
const roleController = require('../controllers/role');

const router = express.Router();

router.get('/roles', roleController.getRole);


module.exports = router;