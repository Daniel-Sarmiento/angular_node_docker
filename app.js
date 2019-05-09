const express = require('express');
const app = express();
const path = require("path");

// Forma alternativa
//app.get("*", app.use(express.static(path.join (__dirname + '/fronted/dist/fronted'))))

// Forma principal
app.use(express.static(path.join (__dirname, '/fronted/dist/fronted')));

app.get('*', function(req, res) {
	res.sendfile('./fronted/dist/fronted/index.html'); 
});

app.listen(3000, function(){
	console.log("Server running")
})