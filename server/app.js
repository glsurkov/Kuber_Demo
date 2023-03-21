const express = require("express");

const app = express();


app.get("/api/users", function(req, res){

    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.setHeader('Content-Type', 'application/json')

        res.send({message:"EVERYTHING IS FINE"})
    }catch (err){
        res.send(`GOT AN ERROR - ${err}`)
    }
});

app.listen(8080, function(){
    console.log("...SERVER IS RUNNING...");
});