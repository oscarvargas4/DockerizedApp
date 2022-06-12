const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./db/mongoose');
const port = process.env.PORT || 3000;

connection().catch(e => console.log(e));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Hello World from ${port}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});