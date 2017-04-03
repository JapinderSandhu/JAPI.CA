var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/public_html');
app.use(express.static(staticPath));

app.listen(8080, function() {
  console.log('listening on port 8080');
});
