const express = require('express');
const router = express.Router();

const serverFunctions = require("../controllers/server.js");

router.get('/', serverFunctions.get);
router.post('/', serverFunctions.post);
router.put('/', serverFunctions.put);
router.delete('/', serverFunctions.deletee);

module.exports = router; 
