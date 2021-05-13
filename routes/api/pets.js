const express = require('express');
const router = express.Router();
const petsCtrl = require('../../controllers/api/pets');

router.get("/", petsCtrl.getAll);
router.post("/", petsCtrl.petCreate);
router.delete("/:id", petsCtrl.petDelete);
router.put("/:id", petsCtrl.petUpdate);

module.exports = router;
