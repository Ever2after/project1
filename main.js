const express = require('express');
const fs = require('fs');
const path = require('path');
const qs = require('qs');
const bodyParser = require('body-parser');
const template = require('./template.js');

const app = express();

app.use(express.static('public'));

var cnt=0;
var time="10시~19시";
var price = "120,000원";

app.get('/', function(request, response){
    fs.readFile('./index', 'utf8', function(err, description){
        var html = `${description}`;
        response.send(`${description}`);
    });
});

app.get('/index2/:days', function(request, response){
    const daynum = request.params.days;
    console.log(daynum);
    cnt=daynum;
    response.redirect('/index2');
});

app.get('/index2', function(request, response){
    var html = template.html(`${cnt}`, `${time}`, `${price}`);
    response.send(html);
});

app.get('/update', function(req,res){
  time = req.param("time");
  price = req.param("price");
  res.redirect('/index2');
});


app.listen(8080);
