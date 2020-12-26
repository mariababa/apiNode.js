// load up the express framework and body-parser helper
const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
// create an instance of express to serve our end points
const app = express();
app.use(cors());
// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//write your code 
app.get('/user',(req,res)=>{
  res.json({name:"maria", age:21 , year:"2020" });
})
app.post('/user',(req,res)=>{
    const data = req.body;
    console.log(data);
    res.json({success:true});
    
})
/*
app.post('/user',function(req,res){
  console.log('i am in app post', req.body);
  res.json({"name" : req.body.year +' '+req.body.age});
})
*/
app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});


