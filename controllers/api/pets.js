const Pet = require('../../models/pet');

module.exports = {
    petSave,
}

async function petSave(req, res) {
    const savedPet = await Pet.getAll(req.user._id);
    res.json(savedPet);
}