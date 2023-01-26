var express = require('express');
var router = express.Router();
//--------------------------------------------------------------------------------
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//--------------------------------------------------------------------------------
let carDtabase = [{
  "name": "pride",
  "year": 1986,
  "color": "red",
  "pric": Number(2400000000)
},
{
  "name": "mazda",
  "year": 1950,
  "color": "white",
  "pric": Number(10000000000)
},
{
  "name": "BMW",
  "year": 2020,
  "color": "black",
  "pric": Number(22000000000)
},
{
  "name": "BMW",
  "year": 2018,
  "color": "garay",
  "pric": Number(6500000000)
},
{
  "name": "dena",
  "year": 2021,
  "color": "blue",
"pric": Number(7500000000) }];
//--------------------------------------------------------------------------------

// GET cars list
router.get('/', function (req, res, next) {
  res.send(carDtabase)
});
//--------------------------------------------------------------------------------

//Information Car
router.get('/:carName', function(req , res){
  let requestCar = req.body ;
  // search
 var searchRequestCar = carDtabase.findIndex( item => item.name ===req.params.carName);
 res.send({ 'seach result' : carDtabase[searchRequestCar]})

})

//--------------------------------------------------------------------------------
// POST cars add new car
router.post('/' ,function(req, res, next){
  let newCar = req.body;
  if(newCar.name ==="") {
    res.send({status:false ,
      error_code : 2056 ,
      message : "Name of car is requierd for add list"
     });
     } 
    carDtabase.push(newCar);
    res.status(201);
     res.send ({status: true ,
       message: "add new car to list"
      });
     
});
//--------------------------------------------------------------------------------
//Change existing Car-PUT
router.put('/' , function(req, res){
  let changCar= req.body;
  // search & check 
  var foundCar = carDtabase.findIndex(item =>item.name === changCar.name);
  // change
  carDtabase[foundCar]={
  ...changCar
   }
 res.send({stutus :true , message :"chenge sucsessfully "});
});
//--------------------------------------------------------------------------------
//Particially Change existing Car-PATCH 
router.patch('/' , function(req, res, next){
 let PartChange= req.body;
  // search & check 
  var sherchChang = carDtabase.findIndex(itemSerch=>itemSerch.name === PartChange.name);
   // change
  carDtabase[sherchChang]={
    ...carDtabase[sherchChang],
    ...PartChange
  }
  res.send({status: true, message:"chenge patch succsessuly"});
  
})
//--------------------------------------------------------------------------------
//delete
router.delete('/' , function(req, res){
let reqUserDelete = req.body;
var deletItem = carDtabase.filter(item => item.name === reqUserDelete.name);
res.send({  status:true, 
  message:"Change succussfully deleted"})
})
module.exports = router;
//--------------------------------------------------------------------------------
