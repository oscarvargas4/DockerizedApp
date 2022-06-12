const mongoose = require('mongoose');

async function connection() {
    await mongoose.connect('mongodb://mongo:27017/test');
}

module.exports = connection;