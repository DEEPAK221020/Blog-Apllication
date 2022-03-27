const express = require('express');
const app = express();
app.get('/' , (req,res)=>{
    res.send("hello world");
})
app.listen(8080 , (res)=>{
    console.log('port is listening');
});
