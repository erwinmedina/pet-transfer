const Pet = require('../../models/pet');

module.exports = {
    petSave,
    petCreate,

}

async function petSave(req, res) {
    const savedPet = await Pet.getAll(req.user._id);
    res.json(savedPet);
}

async function petCreate(req, res) {
    // console.log(req.user);
    const newPet = await Pet.create({...req.body, user: req.user._id})
    res.json(newPet);
}