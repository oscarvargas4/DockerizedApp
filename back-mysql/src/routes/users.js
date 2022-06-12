const express = require('express');
const router = express.Router();
const User = require('../models/user');
const logger = require('../middleware/logger');

router.get('/getAllUsers', logger, async (req, res) => {
    try {
        let allUsers = await User.findAll();

        if (allUsers.length > 0) {
            res.json({ allUsers });
        } else {
            res.status(404).json({ message: 'Usuarios no encontrados' });
        }
    } catch (e) {
        console.log(e);
        res.status(400).json({ message: 'Ocurrio un error en el servidor' });
    }
});

router.post('/createUser', async (req, res) => {
    try {
        let newUser = await User.create({
            name: req.body.name,
            age: req.body.age,
        });
        res.status(201).json({ message: 'User created', newUser });
    } catch (e) {
        console.log(e);
        res.status(400).json({ message: 'Ocurrio un error en el servidor' });
    }
});

module.exports = router;