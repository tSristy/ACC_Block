const mySql = require("mysql2");

const config = mySql.createConnection({
    host: 'localhost',  
    user: 'greayjqf_greatwall',
    password: 'GreatWall1@3', 
    database: 'greayjqf_aac_db', 
    port: 3306,
    multipleStatements: true,
})


// const config = mySql.createConnection({
//     host: 'localhost',  
//     user: 'root',
//     password: '', 
//     database: 'aac_block_greatwall', 
//     port: 3306,
//     multipleStatements: true,
// })

module.exports = config;

