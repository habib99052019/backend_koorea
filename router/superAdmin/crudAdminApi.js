const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const adminSchema = require('./../../models/adminSchema')

const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
// async function func(){
//     var admin = await adminSchema.findOne({_id:"6512b96920f1d3f79218cfdb"})
//     const saltRounds = 10;
//     const salt = bcrypt.genSalt(saltRounds)
//    admin.password = await bcrypt.hash(admin.password, saltRounds);// pour crypter password
//     admin.isSuperAdmin=true
//    await  admin.save();
//     console.log(admin)

// }
// func()
console.log("declarer super admin")
router.get('/', async (req, res) => {
  
    var admins = await adminSchema.find()
    
        res.send(admins)
})
router.get('/vv', async (req, res) => {
  
    var admins = await adminSchema.find()
    
        res.send(admins)
})
router.get('/:id', async (req, res) => {
    var admin=  await adminSchema.findById(req.params.id).populate('Listejoueurs').populate('admins');
    res.send(admin)
})
router.get('/joueurs/:id', async (req, res) => {
    var joueurs= await adminSchema.findById(req.params.id).findById(req.params.id).populate('Listejoueurs');
    res.send(joueurs)
  
})
router.post('/addAdmin', async (req, res) => {
    try{
        var admin = await adminSchema.findOne({login:req.body.login});


    if(!admin)
       
   { 
    var admin =  await  adminSchema.create(req.body)
    await adminSchema.findByIdAndUpdate(admin._id,{hist:[],resultatRoulette:0}, { new: true })
    const saltRounds = 10;
    const salt = bcrypt.genSalt(saltRounds)
   admin.password = await bcrypt.hash(admin.password, saltRounds);// pour crypter password

   await  admin.save();
   if(admin.role=="admin"){

   
   await adminSchema.findByIdAndUpdate({ _id:req.body.superAdmin }, { $push: { admins: admin._id } })
   }
   return res.send({
       message: true,
       id: admin._id
    })
    }
    else{
        return res.send({message:false})
    }
   
 /*var  user  =new userSchema({
           nom:req.params.nom,
         age:req.params.age     //tu peut creer d'apres les parametres /:nom/:age en api de poste
      
   })    
    /*  user = await userSchema.create(user);*/
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});
router.put('/:id', async (req, res) => {
    try{
        var  admin = await adminSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
        res.send({message:true})
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});
router.delete('/:id', async (req, res) => {
    try{
        const adminDelete = await adminSchema.deleteOne({ _id: req.params.id }).then(async (group) => {
            var admins = await   adminSchema.find();
            res.send(admins)
          })
        
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});


module.exports = router;
