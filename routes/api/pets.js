const express = require('express');
const router = express.Router();
const petsCtrl = require('../../controllers/api/pets');

router.get("/mypets", petsCtrl.petSave);
router.post("/", petsCtrl.petCreate);

module.exports = router;
