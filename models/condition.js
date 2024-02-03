// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const  adminSchema  = new mongoose.Schema({
//    numero:Number,
//    tiket:{ type: Schema.Types.ObjectId, ref:'ticketSchema'},
//    solde:Number,
//    type:String,
//    coefficient:Number,
//    gagnion:Boolean,
//    joueur:{ type: Schema.Types.ObjectId, ref:'joueurSchema'}
 
    
// });
// module.exports=mongoose.model('admin',ticketSchema);
// //aaa
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  pubSchema  = new mongoose.Schema({
   
    // title:String,
    // description:String,
    // images:[],
    // lien:String,
    // catigories:String jjjj jjjjjj;;
     //dynamicData: mongoose.Schema.Types.Mixed
   name:String,
   isFacebook:Boolean,
   isWebSite:Boolean,
   phone:String,
   statut:String,
   isNouveaux:Boolean,
   email:String,
   project:String
  });
module.exports=mongoose.model('pubSchema',pubSchema);
