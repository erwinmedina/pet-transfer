const express = require('express');
const router = express.Router();
const petsCtrl = require('../../controllers/api/pets');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get("/", petsCtrl.getAll);
router.post("/", ensureLoggedIn, petsCtrl.petCreate);
router.delete("/:id", ensureLoggedIn, petsCtrl.petDelete);
router.put("/:id", ensureLoggedIn, petsCtrl.petUpdate);

module.exports = router;
