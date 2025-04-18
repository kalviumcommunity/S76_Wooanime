// const {update,create,fetch,Delete,getById,usercreatedby,users}=require('./controller/Itemcontrol')\
const {update,create,fetch,Delete,getById,usercreatedby,users}=require('./sqlcontroller/Itemcontrol')
const {signup,login,logout}=require('./sqlcontroller/Auth')
const express = require('express')
const route = express.Router();
const authenticate =require('./middleware/authMiddleware')
// const {login,signup,logout}=require('./controller/Auth')
route.post('/login',login);
route.post('/signup',signup);
route.post('/create',authenticate,create);
route.put('/update/:id',authenticate,update);
route.get('/fetch',authenticate,fetch);
route.get('/fetch/:id',authenticate,getById);
route.delete('/delete/:id',authenticate,Delete);
route.get('/usercreatedby/:userId',authenticate,usercreatedby);
route.get('/users',authenticate,users);
route.post('/logout',logout)
module.exports=route    