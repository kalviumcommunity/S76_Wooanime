const {Update,create,fetch,Delete}=require('./controller/Itemcontrol')
const express = require('express')
const route = express.Router();

route.post('/create',create);
route.put('/update/:id',Update);
route.get('/fetch',fetch);
route.delete('/delete/:id',Delete);
module.exports=route    