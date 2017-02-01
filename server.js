var express = require('express');
var bp = require('body-parser');
var path = require('path');
var cors = require('cors');

var app = express();

var root = __dirname;
var port = 8000;

// apply middlewear
app.use(express.static(path.join(root, './client')));
app.use(express.static(path.join(root, './bower_components')));
app.use(bp.json());
app.use(cors()); // reconciles CORS on server side

//mongoose before routes ALWAYS
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app); //app here refers to angular module in app.js

app.listen(port, function(){
  console.log('Server running on port ' + port);
})
