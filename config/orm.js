// This is our homemade ORM - should be hidden in a typical application but it's fine for this
// This helps keep our SQL commands secure, while also letting us write less code throughout the app

const connection = require('./connection.js');

var orm = {
    // This will select all burgers for display on the page
    selectAll: (callback) => {
        connection.query('SELECT * FROM burgers'), (err, res) => {
            if(err) throw err;
            callback(res);
        }
    }, 
    // Creates a new burger for the app     
    insert: (name, callback) => {
        connection.query('INSERT INTO burgers SET ?'), {
            burger_name: name,
            devoured: false,
        }, (err, res) => {
            if(err) throw err;
            callback(res);
        }
    },
    // Devours the burger - this does not remove it from the database, simply flags it as eaten
    devour: (id, callback) => {
        connection.query('UPDATE burgers SET ? WHERE ?',[
            {devoured: true},
            {id: id}
        ], (err, res) => {
            if(err) throw err;
            callback(res);
        })
    }

};
// Export - this should be pulled by the burger model and information should be sent through there
console.log("orm loaded")
module.exports = orm;