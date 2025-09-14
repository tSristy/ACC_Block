const mySql = require("mysql2");

const config =  mySql.createConnection({
        user: "root",
        password: "",
        database: "aac_block_greatwall",
        multipleStatements: true,
    })
    
    
module.exports = config;
