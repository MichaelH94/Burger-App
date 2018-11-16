// Sends information to the ORM to be processed through the database - should be hidden, but kept available for this application

const orm = require('../config/orm.js');

var burger = {
    // This will select all burgers for display on the page
    selectAll: (callback) => {
        orm.selectAll((res) => {
            callback(res);
        });
    },
    // Create a new burger, simply flags it as eaten
    insert: (name, callback) => {
        orm.insert(name, (res) => {
            callback(res);
        });
    },
    // Devours the burger - this does not remove it from the database, simply flags it as eaten
    devour: (id, callback) => {
        orm.devour(id, (res) =>{
            callback(res);
        });
    }
};
// Export
module.exports = burger;
