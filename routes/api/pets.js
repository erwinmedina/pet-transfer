const express = require('express');
const router = express.Router();
const petsCtrl = require('../../controllers/api/pets');

router.get("/", petsCtrl.getAll);


module.exports = router;
