const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();
const port = process.env.PORT || 3003;

//connect mongoose database
mongoose.connect(process.env.MONGO_URI, {useNewURLParser : true, useUnifiedTopology : true});
mongoose.connection.once('open',()=>{
    console.log('Connected to mongo');
});

//set views
app.set('view engine','jsx');

//initialize engine
app.engine('jsx',require('express-react-views').createEngine());

//data
const Pokemon = require("./models/Pokemon");

//routes
//index
app.get('/pokemon',(req,res)=>{
    Pokemon.find({},(error, allPoke)=>{
        res.render('Index',{pokemon : allPoke});
    });
});

//show

//new

//port
app.listen(port,()=>{
    console.log('Listening on port ', port);
});