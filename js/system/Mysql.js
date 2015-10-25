var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_ktv'
});


connection.connect(function(err) {
    if(err){
        console.error(err);
    }
});


module.exports = function (sql, callback) {
    connection.query(sql, function (err, rows, fields) {
        
        if (err) throw err;

        callback(rows,fields);
    });
}