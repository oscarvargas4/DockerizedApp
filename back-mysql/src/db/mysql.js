const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://root:root@mysql:3306/test');

async function connection() {
    try {        
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (e) {
        console.log(e);
    }
}
connection();

module.exports = sequelize;