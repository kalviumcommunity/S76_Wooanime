const item =require('../model/schema.js')
const create=async(req,res)=>{
 try{
    const { title, genre, year, description, studio ,imageurl} = req.body;
    if (!title || !genre || !year ||  !description ||  !studio || !imageurl) {
      return res.status(400).json({ message: "All fileds are required" });
    }
    const newItem = new item({
      title,
      genre,
      year,
      description,
      studio,
      imageurl,
    });
    await newItem.save();
    res.status(201).json(newItem)  
 }catch(error){
    res.status(500).json({message:"Internal server error"})
    console.error(error)
 }
 
}
const fetch =async(req,res)=>{
   const items = await item.find({});
   res.status(201).json({items});
}
const Update = async(req,res)=>{
    try{
        const id =req.params.id;
        const itemExist = await item.findOne({_id:id});
        if (!itemExist){
            return res.status(400).json('Item does not exists')
        }
        const items= await item.findByIdAndUpdate(id,req.body,{new:true})
        res.status(201).send(items)
    }catch(error){
        res.status(500).json({message:"Internal server error"})
        console.error(error)
     }
}
const Delete=async(req,res)=>{
    try{
        const id =req.params.id;
        const itemExist = await item.findOne({_id:id});
        if (!itemExist){
            return res.status(400).json({message:'Item does not exists'})
        }
       await item.findByIdAndDelete(id)
        res.status(201).json({message:"Item deted successfully"})
    }catch(error){
        res.status(500).json({message:"Internal server error"})
        console.error(error)
     }
}
module.exports={create,Update,Delete,fetch}