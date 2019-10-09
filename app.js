var express    = require('express'),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

  
    var port = process.env.PORT || 3000
    
    



app.use(bodyParser.urlencoded({extended: true}));
app.use( express.static( "public" ) );
app.set("view engine","ejs");



app.get("/",function(req, res) {
  res.render("landing");

});

//INDEX
app.get("/round1",function(req,res){
  
          res.render("round1")
    
});


//CREATE
app.post("/round1",function(req,res)
{
  var a=req.body.probA;
  var b=req.body.probB;
  var c=req.body.probC;
  var d = req.body.probD;
 

  var aa =2178309;
  var bb=925338;
  var cc =34 ;
  var dd =153;

  //NEW DISH TO DB
 
if(a==aa && b == bb && c==cc && d==dd)
  {
  res.redirect('/round3eyhu43')
  }
  else
  {
    res.redirect('/round1');
  }

});





app.get("/round3eyhu43",function(req,res){
  
  res.render("round3eyhu43");

});



app.get("/riddles",function(req,res){
  
  res.render("riddles");

});

app.get("/useide",function(req,res){
  
  res.render("useide");

});


app.post("/riddles",function(req,res)
{
  var a=req.body.ridA;
  var b=req.body.ridB;
  var c=req.body.ridC;
  var d=req.body.ridD;
  
 

  var aa =120;
  var bb=60;
  var cc =625 ;
  var dd=36;


  //NEW DISH TO DB
 
if(a==aa && b == bb && c==cc && d==dd)
  {
  res.redirect('/riddlessolved')
  }
  else
  {
    res.redirect('/riddles');
  }

});

app.get("/riddlessolved",function(req,res){
  
  res.render("riddlessolved");

});


app.listen(port,function()
{
  console.log("Server has started");
}
);

module.exports= app;
