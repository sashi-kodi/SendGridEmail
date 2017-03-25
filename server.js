var express= require('express');
var app = express();
var router= require('./routes');
app.use('/', router);
app.listen(3000);
console.log('server running at port 3000');