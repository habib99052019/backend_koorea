const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const joueurSchema = require('./../../models/joueurSchema')
const adminSchema = require('./../../models/adminSchema')
const ticketSchema=require('./../../models/tiket')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
var cron = require('node-cron');
var  test=false
var testExcution=false
var temps=0
var tabJoueurGan=[]
var porc=0
var tob=[]
var solde1=0
var tabf2=[]
var tableConditionFilcitation=[]
setInterval( function affiche() {
   
 
//  console.log(temps,'reel2')
  
 
}, 3000)
// //add ticket
//  async function func(){
//      var tickets = await ticketSchema.find()
//       var admins=await adminSchema.findById("6522b1c69e7bcde5b852d14e").populate("tickets")
//       console.log(admins.tickets)
//     //  for (let i = 0; i < tickets.length; i++) {
        
//     //     await ticketSchema.deleteOne({ _id:tickets[i]._id })
       
//     //  }
//     //  for (let i = 1; i < joueurs.length; i++) 
//     //  {
//     //     joueurs[i].tikets=[]
//     //     await joueurs[i].save()
//     //          }
// // //              var tickets1 = await ticketSchema.find()
// // //              var joueurs1 = await joueurSchema.find(); 
// //             //  console.log(tickets1,"12")
// //     //   console.log(tickets1)
// // //     // try{
// // //     //     var obj  = {
// // //     //         joueur:{
// // //     //         id: "651ee759305ce08dada296b3",
// // //     //         solde: 125
// // //     //             } ,
        
// // //     //         ticket:{  
// // //     //              numero:123589,
// // //     //              condition:[{
// // //     //             condition_id: 'TLyoF12', 
// // //     //         condition: [20,19],
// // //     //          soldeJouer: 0.5, 
// // //     //         soldeGagner: 18, 
// // //     //         coefficient: 36 
// // //     //                        }],
// // //     //         solde:50,
// // //     //         soldeMax:3,
// // //     //         SoldeMin:0,
// // //     //         gagnion:false,
// // //     //         realTime:true,
// // //     //         valide:false,
// // //     //         joueur:"651ee759305ce08dada296b3"}
// // //     //     }
// // //     //     var ticket =  await  ticketSchema.create(obj.ticket)
        
    
       
        
// // //     //     await joueurSchema.findByIdAndUpdate({ _id:obj.joueur.id}, { $push: { tikets: ticket._id } })
// // //     //    var joueur = await joueurSchema.findByIdAndUpdate(obj.joueur.id,obj.joueur, { new: true })
// // //     //     console.log({message:true,
// // //     //               ticket:ticket,
// // //     //               solde:joueur.solde
// // //     //             })   
    
// // //     // }
// // //     // catch(error){
// // //     //     console.log(error.message)   
// // //     // }
// // var joueurs = await joueurSchema.find();
// // for (let i = 0; i < joueurs.length; i++) 
// // {
// //    joueurs[i].tikets=[]
// //    await joueurs[i].save()
// //         }
// //     var tickets = await ticketSchema.find()
    
// //         console.log(tickets,"tickets")
// // var joueurs1 = await joueurSchema.find();
// console.log(admins,"ee")  
//    }
// func()
// temps=90

  function TimePause() {
    test=true
  //  console.log( test)
  }
  
function calcul(tab){
    tabSomme=[]
    for (let d =1 ; d < 37; d++) {
        somme=0
        for (let h =0;  h < tab.ticketReaTime.length; h++) {
           var ticket = tab.ticketReaTime[h]
            for (let k =0;  k < ticket.condition.length; k++) {
                var test2 = ticket.condition[k].condition.some(ele=> ele == d)
                    if(test2==true ){
                        somme =somme+condition[m].soldeGagner
                       
                    }        
            }       
        }
     tabSomme.push(somme)
    }
    
}
router.get('/', async (req, res) => {
   
    var tickets = await ticketSchema.find()

    
        res.send(tickets)
})
router.get('/exmain', async (req, res) => {
   
  res.send({name:"haj"})
})
router.get('/temp', async (req, res) => {
  res.send({
    temp:temps,
  tab:tabJoueurGan,
  tob:tob,
  solde:solde1,
porc:porc})
})
router.get('/re/:id', async (req, res) => {

var condition = tableConditionFilcitation.find(ele=>ele.admin==req.params.id)
if(condition){
  res.send({message:true,
    condition:condition.condition  }) 
}
else{
  res.send({message:false
      }) 
}

  
})
router.get('/:id', async (req, res) => {
    var ticket=  await ticketSchema.findById(req.params.id)
    res.send(ticket)
})
router.post('/addTicket/:id', async (req, res) => {
   
    try{
        if(test==true){ var ticket =  await  ticketSchema.create(req.body.ticket)
        
         //   console.log(ticket,"t1")       
                  
                  await joueurSchema.findByIdAndUpdate({ _id:req.params.id}, { $push: { tikets: ticket._id } })
                  await adminSchema.findByIdAndUpdate({ _id:req.body.joueur.admin}, { $push: { tickets: ticket._id } })
                 var joueur = await joueurSchema.findByIdAndUpdate(req.params.id,req.body.joueur, { new: true })
                  res.send({message:true,
                            ticket:ticket._id,
                            solde:joueur.solde
                          })   
          }
       else{
        res.send({message:false})
       }
    }
    catch(error){
        res.send(error.message)   
    }
    
});

router.post('/numeroGanyon/:id', async (req, res) => {
  
    
});

cron.schedule('*/3 * * * *', async () => {
  tabJoueurGan=[]
  testExcution=false
 
  test=true
  function diminuerTemps() {
   
    temps=temps +1
  //  console.log(temps)
  //  console.log(test,'real' )
   
  }
  let intervalID = setInterval(diminuerTemps, 1000)
   // console.log('chaque 30 seconde');
    ticketGlobale=[]
   
  // console.log(test,'one')
   //console.log(temps,"time")
   tabSomme=[]
       
   setTimeout(async function  redemarerChrono1() {
    test=false
  // console.log(test,'helloTest')
   },120000 )
        
        setTimeout(async function  excution() {
          tableConditionFilcitation=[]
          test=false
          var admins=  await adminSchema.find({role :"admin" }).populate('tickets')
        //  console.log(admins,'ronaldo' )
           var long = admins.length
          
        //  console.log(temps,'twoo')
            for (let i = 0; i < long; i++){  

                // console.log(1)
                
                var tab= await admins[i].tickets.filter((ele) =>ele.realTime==true)
                     if(tab.length ==0) {
                      var val=Math.floor(Math.random()*36)+1
                      admins[i].resultatRoulette=val
                      tableConditionFilcitation.push({condition:val,
                        admin:admins[i]._id  })
                   //   console.log(admins[i].resultatRoulette ,'rrruslt')
                      admins[i].hist.unshift(val)
                      await admins[i].save()
                     }
                if(tab.length >0){
              var objetTicketRealTime={
                admin:admins[i]._id,
                ticketReaTime: tab,
             soldeTicket:tab.map(item => item.solde).reduce((prev, curr) => prev + curr, 0),
             tabGagnion:[],
              condition:0

              }
              // await  ticketGlobale.push(objetTicketRealTime)
             // console.log(objetTicketRealTime,"aaaa")
              for (let d =0 ; d < 37; d++) {
                somme=0  
                solde1=200
                ////bbb 
                
                  var ticketsRelaTimes = objetTicketRealTime.ticketReaTime
                 
                  for (let h =0;  h < ticketsRelaTimes.length; h++) {
                     var ticket = ticketsRelaTimes[h]
                     ticket.realTime= false
                     await ticket.save()
                // console.log(ticket.condition,"length")
      
                      for (let x =0 ;  x < ticket.condition.length; x++) {
                    // console.log(ticket.condition[x].condition,'w' ,x)
                         var condition=ticket.condition[x]
                            
                            var  test2 =ticket.condition[x].condition.some(ele=> ele == d)
                           // console.log(ticket.condition[x].condition,'wwww' ,test2,d,objetTicketRealTime.admin,ticket._id)
                            //      console.log(d ,test2)
                              if(test2==true ){
                                  somme =somme+ticket.condition[x].soldeGagner
                                 
                           }        
                      }       
                  }
                 
                  objetTicketRealTime.tabGagnion.push({somme:somme,
                                                          condition:d})
              }
   
            //  console.log(admins[i].prencentage ,'prencentage')
          solde1=  objetTicketRealTime.soldeTicket
         
           /// tob=objetTicketRealTime.tabGagnion.sort((a, b) =>  b.somme-a.somme)
              var prencentage =objetTicketRealTime.soldeTicket - (objetTicketRealTime.soldeTicket * (admins[i].prencentage / 100));
          //  //   console.log(objetTicketRealTime.tabGagnion.sort((a, b) => b.somme - a.somme),'kk')
              
          var tabF=objetTicketRealTime.tabGagnion.sort((a, b) =>  b.somme-a.somme)
            
                // console.log(tabF.filter(ele=>ele.somme <= prencentage),"prt")
                 //
              if(tabF.some(ele=> ele.somme < prencentage)==true){
               
                 
               var tabF2 = tabF.filter(ele=>ele.somme <= prencentage)

                value1=Math.floor(Math.random()*tabF2.length)
               var conditionRouletteGagner=tabF2[value1]

               }
               if(tabF.some(ele=>ele.somme <= prencentage)==false){
                var conditionRouletteGagner=objetTicketRealTime.tabGagnion.sort((a, b) =>  a.somme-b.somme)[0]
                }
                value4 =Math.floor(Math.random()*objetTicketRealTime.tabGagnion.length)
                if(objetTicketRealTime.tabGagnion.filter(ele=>ele.somme == objetTicketRealTime.tabGagnion[value4].somme).length>35){
                  var conditionRouletteGagner=objetTicketRealTime.tabGagnion[value4]
                  }
                  if(admins[i].prencentage ==70){
                      
                     conditionRouletteGagner=objetTicketRealTime.tabGagnion[0]
                    }
                  if(admins[i].prencentage ==100){
                     conditionRouletteGagner=tabF[0]
                    }
                    
              admins[i].resultatRoulette= conditionRouletteGagner.condition;
              tableConditionFilcitation.push({condition:conditionRouletteGagner.condition,
                                               admin:admins[i]._id  })
              objetTicketRealTime.condition= conditionRouletteGagner.condition;

           //   admins[i].solde=admins[i].solde+(objetTicketRealTime.soldeTicket-conditionRouletteGagner.somme)
            admins[i].hist.unshift(conditionRouletteGagner.condition)
            
             await admins[i].save()             
           //  console.log( objetTicketRealTime.tabGagnion.sort((a, b) =>  b.somme-a.somme).find(ele=>ele.somme <= objetTicketRealTime.soldeTicket),'kk')
              ticketGlobale.push(objetTicketRealTime)
            }   
           
          
           
            }
         //  console.log(ticketGlobale,"bari")
           if(ticketGlobale.length>0){
            for (let h =0;  h < ticketGlobale.length; h++) {
              var ticketsRelaTimes = ticketGlobale[h].ticketReaTime
          //     console.log(ticketGlobale[1],"era",238)
          //  console.log(ticketGlobale[1].ticketReaTime,"er",239)   
              for (let k =0;  k < ticketsRelaTimes.length; k++) {
                
                var ticket=  await ticketSchema.findById(ticketsRelaTimes[k]._id)
               
          
                ticket.realTime= false
                await ticket.save()
                 for (let x =0 ;  x < ticket.condition.length; x++) {
               // console.log(ticket.condition[x].condition,'w' ,x)
                    var condition=ticket.condition[x]
                       
                       var  test2 =ticket.condition[x].condition.some(ele=> ele ==ticketGlobale[h].condition )
                           //  console.log(d ,test2)
                         if(test2==true ){
                          ticket.gagnion=true
                          await ticket.save()
                          var joueur=  await joueurSchema.findById(ticket.joueur)
                            joueur.solde=joueur.solde + ticket.condition[x].soldeGagner
                           tabJoueurGan.push(joueur.pseudoName)
                            await joueur.save()
                            
                      }        
                 }       
             }
            }
          }
          testExcution=true 
         // console.log(testExcution,"change")
        //  console.log(ticketGlobale ,'rr&&')
         //change Ticket
       ///change
         
         },135000);
         setTimeout(async function  redemarerChrono() {
        
          clearInterval(intervalID );
           temps=0
         }, 180000)
         
        //  console.log(ticketGlobale ,'somme')
      //   setTimeout(TimePause, 5000);
      //   console.log(test ,"registre")
      //   console.log(temp)
      //   console.log( ticketGlobale,"taab")
      //  calcul(ticketGlobale[3])
        // for (let d =1 ; d < 37; d++) {
        //       somme=0
        //     for (let h =0;  h <objetTicketRealTime.ticketReaTime.length; h++) {
        //       var real=objetTicketRealTime.ticketReaTime[h]
        //      console.log(real.condition ,'condition')
        //       var condition=real.condition
              
        //       for (let m =0 ;  m<condition.length; m++){
                
        //             var test2 = condition[m].condition.some(ele=> ele == d)
        //             if(test2==true ){
        //                 somme =somme+condition[m]. soldeGagner
                       
        //             }
        //       }
        //     }
        //     tabSomme.push({
        //         constion:d,
        //         somme:somme
        //     })
            
        //   //   if(somme1 > somme &&  somme1 < sommeTicketsPermanant)
        //   //   {
        //   //    somme=somme1 
        //   //    ticketsGagnon=ticketsGagnon1
        //   //    conditionGagnon=i
        //   //     admin.resultatRoulette=i
        //   //     await admin.save()
        //   //   } 
        //   }
       // console.log( tabSomme ,"somme")
              
    // await tickets.forEach( async (admin) => {
    //         // console.log(admin.Listejoueurs,12)
            
    //         var ticketsRealTime=[] 
    //         var sommeTicketsPermanant=0
         
    //         var somme =0
    //         var ticketsGagnon=[]
    //        var conditionGagnon=1
    //        Listejoueurs=admin.Listejoueurs
    //     //    console.log( Listejoueurs,'listJoueur')
    //     //    j=j+1
    //     //    console.log( j,'nombre de listes')
       
    // //   const objet = {
    // //           admin:admin._id,
    // //           ticket:ticketsRealTime
    // //                    }
    // // await ticketGlobale.push(objet)
    //             // console.log(ticketGlobale ,'objet')  

    // //     for (let i =1 ; i < 37; i++) {
    // //        somme1=0
    // //        var ticketsGagnon1=[]
    // //        tickets.forEach(async (ticket) => {
            
    // //          await   ticket.condition.forEach(async (condition) => {
             
    // // var test = condition.condition.some((element) => element == i);
  
    // //                if(test==true){
    // //                 somme1=somme1+ condition.soldeGagner
                    
    // //                 ticketsGagnon1.push(ticket)
                 
                    

    // //                }
                  

    // //                console.log(condition ,1)
    // //                console.log(ticketsGagnon ,2)
           
    // //           })
    // //           });
    // //           console.log(somme1)
    // //           if(somme1 > somme &&  somme1 < sommeTicketsPermanant)
    // //                 {
    // //                  somme=somme1 
    // //                  ticketsGagnon=ticketsGagnon1
    // //                  conditionGagnon=i
    // //                   admin.resultatRoulette=i
    // //                   await admin.save()
    // //                 }
    // //         }
    
    
    
    
    //         })  
             
         
   
  });
  router.get('/joueurGani', async (req, res) => {
     
    var tickets = await ticketSchema.find()

    res.send({yy:2,
             a:tickets })
});

module.exports = router;
