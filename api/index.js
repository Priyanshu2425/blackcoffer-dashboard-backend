const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Express on Vercel");
});

app.get("/hello", (req, res)=>{
    res.send("express saying hello");
})

app.get("/router", (req, res)=>{
    res.send("express hu bhai mai");
})

app.listen(5000, ()=>{ 
    console.log("Server ready on port 3000.");
});

module.exports = app;
