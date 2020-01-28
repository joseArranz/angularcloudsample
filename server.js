var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(__dirname+'/dist'));
/* app.use (express.static ("angularcloudsample")) */
app.get('/*', function (req, res,next) {
 res.sendfile(path.join(__dirname+'/dist/angularcloudsample/index.html'));
 /* res.redirect ('/'); */
});
/* app.listen(8083, 'localhost'); */
app.listen(process.env.PORT || 8083);
console.log('MyProject Server is Listening on port 8080');