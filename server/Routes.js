// const {update,create,fetch,Delete,getById,usercreatedby,users}=require('./controller/Itemcontrol')\
const {update,create,fetch,Delete,getById,usercreatedby,users}=require('./sqlcontroller/Itemcontrol')
const {signup,login,logout}=require('./sqlcontroller/Auth')
const express = require('express')
const route = express.Router();
// const {login,signup,logout}=require('./controller/Auth')
route.post('/login',login);
route.post('/signup',signup);
route.post('/create',create);
route.put('/update/:id',update);
route.get('/fetch',fetch);
route.get('/fetch/:id',getById);
route.delete('/delete/:id',Delete);
route.get('/usercreatedby/:userId',usercreatedby);
route.get('/users',users);
route.post('/logout',logout)
module.exports=route    