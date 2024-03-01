const express = require('express');
const app = express();
const port = process.env.port||3001;
const fs = require('fs');
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.status(202).sendFile(__dirname+'/public/home.html');
})
app.get('*',(req,res)=>{
   res.status(404).send('This is a Error page Can you a play a game')
})
app.listen(port,(err)=>{
    if(err)
    console.log('unable to start server');
else
console.log('Server started...');
})