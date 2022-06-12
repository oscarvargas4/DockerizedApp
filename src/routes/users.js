const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/getAllUsers', async (req, res) => {
    let allUsers = await User.find({});

    if (allUsers.length > 0) {
        res.json({ allUsers });
    }

    res.status(404).json({ message: 'No users found' });
})

router.post('/createUser', (req, res) => {

});

module.exports = router;