const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/getAllUsers', async (req, res) => {
    try {
        let allUsers = await User.find({});

        if (allUsers.length > 0) {
            res.json({ allUsers });
        } else {
            res.status(404).json({ message: 'Usuarios no encontrados' });
        }
    } catch (e) {
        res.status(400).json({ message: 'Ocurrio un error en el servidor' });
    }
});

router.post('/createUser', async (req, res) => {
    try {
        let newUser = await new User({
            name: req.body.name,
            age: req.body.age,
        }).save();
        res.status(201).json({ message: 'User created', newUser });
    } catch (e) {
        res.status(400).json({ message: 'Ocurrio un error en el servidor' });
    }
});

module.exports = router;