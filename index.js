var express = require('express')
var app = express();
var path = require('path');
var url = require('url');

app.use(express.static('public'));

//main site
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/self-service.html'));
});

// app.listen(8080);
app.listen(process.env.PORT || 80);







//pipedrive.Persons.getAll({}, function(err, deals) {
//    if (err) throw err;
//    for (var i = 0; i < deals.length; i++) {
//        console.log(deals[i].title + ' (worth ' + deals[i].value + ' ' + deals[i].currency + ')');
//    }
//});