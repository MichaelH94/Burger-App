// Setting up the MySQL database connection 
// If this were a proper application we would want to use secure connections

const mysql = require('mysql');
const config = require("./config.json");

const connection = mysql.createConnection({
    host: config.host,
    port: config.dbPort,
    user: config.dbUser,
    password: config.dbPass, 
    database: config.dbName
});

// Connection
connection.connect((err) => {
    if (err) {
        console.error("ERROR CONNECTIONG TO DATABASE " + err.stack);
        return;
    }
    console.log("Database Connection Established");
})
// Export
module.exports = connection;