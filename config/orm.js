const connection = require('./connection/js');

var orm = {
    selectAll: (callback) => {
        connection.query('SELECT * FROM burgers'), (err, res) => {
            if(err) throw err;
            callback(res);
        }
    }, 
         
    insert: (name, callback) => {
        connection.query('INSERT INTO burgers SET ?'), {
            burger_name: name,
            devoured: false,
        }, (err, res) => {
            if(err) throw err;
            callback(res);
        }
    },
    
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

module.exports = orm;