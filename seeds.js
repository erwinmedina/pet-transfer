require('dotenv').config();
require('./config/database');

const User = require("./models/user");
const Pet = require("./models/pet");

(async function() {
    await User.deleteMany({});
    await Pet.deleteMany({});
}
)()