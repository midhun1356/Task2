const express = require("express");
const cors = require("cors");

const db = require("./db");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static(__dirname));

app.post("/register",(req,res)=>{

 const {name,email,password}=req.body;

 db.query(
 "INSERT INTO users(name,email,password) VALUES(?,?,?)",

 [name,email,password],

 err=>{

 if(err) throw err;

 res.send("Registered");

 });

});

app.post("/login",(req,res)=>{

 const {email,password}=req.body;

 db.query(

 "SELECT * FROM users WHERE email=? AND password=?",

 [email,password],

 (err,result)=>{

 if(result.length)

 res.send("Success");

 else

 res.send("Invalid");

 });

});

app.get("/tasks",(req,res)=>{

 db.query(

 "SELECT * FROM tasks",

 (err,result)=>{

 res.json(result);

 });

});

app.post("/tasks",(req,res)=>{

 db.query(

 "INSERT INTO tasks(title) VALUES(?)",

 [req.body.title],

 ()=>{

 res.send("Added");

 });

});

app.put("/tasks/:id",(req,res)=>{

 db.query(

 "UPDATE tasks SET status=? WHERE id=?",

 [req.body.status,req.params.id],

 ()=>{

 res.send("Updated");

 });

});

app.delete("/tasks/:id",(req,res)=>{

 db.query(

 "DELETE FROM tasks WHERE id=?",

 [req.params.id],

 ()=>{

 res.send("Deleted");

 });

});

app.listen(3000);
