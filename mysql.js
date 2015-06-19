var http = require('http'),
mysql = require("mysql"); 

var connection = mysql.createConnection({ 
	user: "root", 
	password: "", 
	database: "db_name"
}); 

// Create the http server. 
http.createServer(function (request, response) { 
	// Attach listener on end event. 
	request.on('end', function () { 
		// Query the database. 
		connection.query('SELECT * FROM your_table;', function (error, rows, fields) { 
			response.writeHead(200, { 
				'Content-Type': 'x-application/json' 
			}); 
			// Send data as JSON string. 
			// Rows variable holds the result of the query. 
			response.end(JSON.stringify(rows)); 
		}); 
	}); 
// Listen on the 8080 port. 
}).listen(8080);