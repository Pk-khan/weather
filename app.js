const express=require("express");
const hbs=require('hbs');
const app=express();
const path=require('path');
const static_path=path.join(__dirname,"..");
const hbs_path=path.join(__dirname,"../views");

app.set('view engine', 'hbs');
app.set("views",hbs_path);

app.use(express.static(static_path));
app.get("/",(req,res)=>
{
    res.render('index.hbs');     
});
app.get("/weather",(rseq,res)=>
{
    res.render('weather.hbs');     
});
app.get("/about",(req,res)=>
{
    res.render('about.hbs');     
});
app.listen(1000,()=>
console.log("connected...!")
);































