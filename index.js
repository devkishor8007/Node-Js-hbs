const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 5000

//initalize our folder
const main = path.join(__dirname,"./templates/view");
const secondary = path.join(__dirname,"./templates/partials");

//set the view engine
app.set("view engine","hbs");
app.set("views",main);
hbs.registerPartials(secondary);

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/contact",(req,res)=>{
    res.render("contact");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/more",(req,res)=>{
    res.render("more");
});
app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});