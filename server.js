const express=require('express');
const {connectDB,getConnection}=require('./database');
const app= express();
const port =3000;
app.get('/ping',(req,res)=>{
    res.send('Pong!');
})
connectDB();
app.get('/',(req,res)=>{
    console.log("Connected");
    res.send(getConnection());
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});