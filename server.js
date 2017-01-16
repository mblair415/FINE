// SERVER-SIDE JAVASCRIPT

//require express in our app

// geolocation api key: AIzaSyBubDaOrMIAm627PQ5c_FKMQfFBqF5o-UQ
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
// need to add this so that we can accept request payloads
app.use(bodyParser.json());
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use('/vendor', express.static(__dirname + '/node_modules'));


// var controllers = require('./controllers');


/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



/* set up a route to get the templates. Templates are
 * blocks of HTML that Angular will use to render each
 * "view" or page of your app.
 */
app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});




// ALL OTHER ROUTES (ANGULAR HANDLES)
// redirect all other paths to index
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
