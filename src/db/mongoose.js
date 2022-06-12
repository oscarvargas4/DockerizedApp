const mongoose = require('mongoose');

async function connection() {
    try {
        await mongoose.connect('mongodb://mongo:27017/test', {
            useNewUrlParser: true,
        });
        console.log('MongoDB connected');
    } catch (e) {
        console.log(e);
    }
}

module.exports = connection;