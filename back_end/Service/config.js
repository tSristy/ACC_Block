const mySql = require("mysql2");

// const config = mySql.createConnection({
//     host: 'localhost',  
//     user: 'greayjqf_greatwall',
//     password: 'GreatWall1@3', 
//     database: 'greayjqf_aac_db', 
//     port: 3306,
//     multipleStatements: true,
// })


const config = mySql.createConnection({
    host: 'localhost',  
    user: 'root',
    password: '', 
    database: 'great_wall_blocks', 
    port: 3306,
    multipleStatements: true,
})

module.exports = config;

