const {update,create,fetch,Delete,getById}=require('./controller/Itemcontrol')
const express = require('express')
const route = express.Router();

route.post('/create',create);
route.put('/update/:id',update);
route.get('/fetch',fetch);
route.get('/fetch/:id',getById);
route.delete('/delete/:id',Delete);
module.exports=route    