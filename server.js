var express = require('express');
var app = express();
var path = require('path')
var converter = require('./my-folder/converter'); 

    app.use(express.static(path.join(__dirname, 'views')));

    app.get('/:path', function(req, res){
        var path = req.params.path;

        var callback = function(obj){
          res.send(obj);
        }
        converter(path, callback);

    });

app.listen(3000, console.log('Listeing on port 3000...'));
