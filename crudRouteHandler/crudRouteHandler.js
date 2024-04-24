const express=require('express')
const mongoose = require('mongoose')

const CrudSchema=require('../Schemas/crudSchema')

const Crud = new mongoose.model('Crud',CrudSchema)
const router= express.Router()

//Read all Data
router.get('/read-all',async(req,res)=>{
    res.send('read all data');
})

//Read one Data
router.get('/read/:id',async(req,res)=>{
    res.send('read by id');
})

//Post Data
router.post('/create',async(req,res)=>{

const newCrud= new Crud(req.body)
// Inside your route handler where you're saving a document
try {
    // Assuming "document" is an instance of a Mongoose model
    const result = await newCrud.save();
    // Handle success - "result" contains the saved document
    res.send(result);
  } catch (error) {
    // Handle error
    res.status(500).send(error.message);
  }
  

})
//put Data
router.put('/update/:id',async(req,res)=>{
    res.send('update by id');
})
//deleted Data
router.delete('/delete/:id',async(req,res)=>{
    res.send('deleted by id');
})
module.exports=router;