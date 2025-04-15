const express=require('express');
const {connectDB,getConnection}=require('./database');
const app= express();
const cors = require("cors");
const cookieParser=require('cookie-parser')
app.use(express.json());
require('dotenv').config();
app.use(cors());
app.use(cookieParser())
const port =3000;
app.get('/ping',(req,res)=>{
    res.send('Pong!');
})
const db = require("./db");

db.getConnection()
  .then(() => console.log("✅ MySQL connected!"))
  .catch((err) => console.error("❌ MySQL connection failed:", err));

connectDB();
app.get('/',(req,res)=>{
    console.log("Connected");
    res.send(getConnection());
})
app.use('/api',require('./Routes'))
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});