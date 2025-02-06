const express=require('express');
const connectDB=require('./database');
const app= express();
const port =3000;
app.get('/ping',(req,res)=>{
    res.send('Pong!');
})
connectDB();
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});