const express = require('express');
const router = express.Router();
const petsCtrl = require('../../controllers/api/pets');

router.get("/mypets/save", petsCtrl.petSave);

module.exports = router;
