const mySql = require("mysql2");

const config =  mySql.createConnection({
        user: "root",
        password: "",
        database: "great_wall_blocks",
        multipleStatements: true,
    })
    
    
module.exports = config;
