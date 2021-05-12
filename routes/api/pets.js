const express = require('express');
const router = express.Router();
const petsCtrl = require('../../controllers/api/pets');

router.get("/", petsCtrl.getAll);
// router.get("/", petsCtrl.myPets);
router.post("/", petsCtrl.petCreate);

module.exports = router;
