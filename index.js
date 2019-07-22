const express=require('express');
const app=express();
const port=8080;


app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.log(`error entering port,Error:${err}`);
        return;
    }

    console.log('server is running on port: ', port);

}) 