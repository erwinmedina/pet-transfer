const Pet = require('../../models/pet');

module.exports = {
    petCreate,
    getAll,
    // myPets,
}

async function petCreate(req, res) {
    const newPet = await Pet.create({...req.body, user: req.user._id})
    res.json(newPet);
}

async function getAll(req, res) {
    const animals = await Pet.find({});
    res.json(animals);
}

// async function myPets(req, res) {
//     const mine = await Pet.find({'user': user_id})
//     res.json(mine);
// }