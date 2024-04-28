const express=require('express')
const mongoose = require('mongoose')

const CrudSchema=require('../Schemas/crudSchema')

const Crud = new mongoose.model('Crud',CrudSchema)
const router= express.Router()

//Read all Data
router.get('/read-all',async(req,res)=>{
    try {
        const data = await Crud.find({}).select({
            _id:0,
            __v:0
        }).limit(2);
        res.status(200).json({ result: data });
    } catch (error) {
        res.status(500).send(error.message);
    }
})

//Read one Data
router.get('/read/:id',async(req,res)=>{
    try {
        const data = await Crud.find({_id:req.params.id}).select({
            _id:0,
            __v:0
        });
        res.status(200).json({ result: data });
    } catch (error) {
        res.status(500).send(error.message);
    }
})

//create one data in to the database
router.post('/create',async(req,res)=>{

const newCrud= new Crud(req.body)
try {
    const result = await newCrud.save();
    res.status(200).send(result);
  } catch (error) {
    // Handle error
    res.status(500).send(error.message);
  }
  
})

//create many data in to the database
router.post('/create-many',async(req,res)=>{
    try{
       await Crud.insertMany(req.body)
       res.status(200).send('success to upload many data');
    }catch(error){
        res.status(500).send(error.message);
    }
   
})


//Update one Data
router.put('/update/:id',async(req,res)=>{
try{
    await Crud.updateOne({_id:req.params.id},{
        $set:{
            status:'inactive'
        }
    })
    res.status(200).send('Success to update record');

}catch(error){
    res.status(500).send(error.message);

}
})

//Update many Data
router.put('/update-all',async(req,res)=>{
    try{
        await Crud.updateMany({status:'inactive'},{
            $set:{
                status:'active'
            }
        })
        res.send('Success to update many record');
    
    }catch(error){
        res.status(500).send(error.message);
    
    }
    })
//deleted Data
router.delete('/delete/:id',async(req,res)=>{
  try{
    await Crud.deleteOne({_id:req.params.id})
    res.status(200).send('Success to delete data')
  }catch(error){
    res.status(500).send('Failed to deleted data')

  }
})


//deleted Data
router.delete('/delete-all/',async(req,res)=>{
    try{
      await Crud.deleteMany({status:'inactive'})
      res.status(200).send('Success to delete all data')
    }catch(error){
      res.status(500).send('Failed to deleted all data')
  
    }
  })

module.exports=router;