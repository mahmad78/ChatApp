var express = require('express');
var app = express();

app.get('/hello/:id/:name', (req, res)=>{
    res.send('The id is ' + req.params.id + ' and name is ' + req.params.name);
});

app.listen(8080);