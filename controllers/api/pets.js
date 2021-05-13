const Pet = require('../../models/pet');

module.exports = {
    getAll,
    petCreate,
    petDelete,
    petUpdate,
};

async function getAll(req, res) {
    const animals = await Pet.find({});
    res.json(animals);
}

async function petCreate(req, res) {
    const newPet = await Pet.create({...req.body, user: req.user._id})
    res.json(newPet);
}

async function petUpdate(req, res) {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(updatedPet);
}

async function petDelete(req, res) {
    console.log(req.params.id);
    await Pet.findOneAndDelete({ _id: req.params.id });
    res.json('');
}