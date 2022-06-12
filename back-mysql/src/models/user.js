const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/mysql');

const User = sequelize.define('User', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
});


// const userSchema = new Schema({
//     name: String,
//     age: Number,
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     }
// });

// const User = mongoose.model('User', userSchema);

module.exports = User;