var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 9501);

app.get('/', (req, res) => res.json('Hello World!'))

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});