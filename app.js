var express = require('express');
var path  = require('path');
var bodyParse = require('body-parser');
var app = express();

app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'views'));
app.get('/',function(req,res){
	// res.send("hello world");
	res.render('index');
})

app.post('/add',bodyParse.json(),function(req,res){
	var a =  req.body.a;
	var b =  req.body.b;

	var sum =  a + b;

	// console.log(sum);
	res.json(sum);
})
app.use(express.static(path.resolve(__dirname,'public')));
app.listen(1334);

