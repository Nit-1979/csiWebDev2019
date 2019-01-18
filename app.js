var express = require("express");
var app = express();
var bodyParser = require("body-parser");


var users = [
  {name:'nitin',
   age:'25',
   phoneNo:'9513831790'  
  },
  {name:'Rishit',
   age:'25',
   phoneNo:'9513831790'  
  },
  {name:'Aditya',
   age:'25',
   phoneNo:'9513831790'  
  }
];

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({limit: "50mb"}));
//for static files(html,css,frontend-javascript)
app.use(express.static(__dirname+"/public"));
// set up app views handling
app.set('view engine', 'ejs');
//GET
//POST


//CRUD operations


//GET
app.get('/',function(req,res){
  res.render('home',{users:users});
});


//POST
app.get('/register',function(req,res){
  res.render('userForm');
});

app.post('/formSubmit',function(req,res){
   users.push(req.body);
   res.redirect('/');
});


app.listen(7000,function(req,res){
  console.log('server running on port 7000');
});