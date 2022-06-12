const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./db/mysql');
const port = process.env.PORT || 3000;
const users = require('./routes/users');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Hello World from ${port}`);
});

app.use('/users', users);

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`);

    try {
        await sequelize.sync({ force: true });
    } catch (e) {
        console.log(e);
    }
});