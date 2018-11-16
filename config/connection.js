// Setting up the MySQL database connection 
// If this were a proper application we would want to use secure connections

const mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
})

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