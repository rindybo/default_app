var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_ktv'
});



module.exports = function (sql, callback) {
    connection.connect();

    connection.query(sql, function (err, rows, fields) {
        
        if (err) throw err;

        callback(rows,fields);
    });

    connection.end();
}