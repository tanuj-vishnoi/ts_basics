console.log(b) // var can be declared and assigned later us no strict
var b ="add"

/** 
 * var scope is function level
 */
function gello(){
   for(var i= 0 ; i < 5; i++){
    console.log(i)
   }
   console.log(i)
    
}
/**
 * Let scope is block level
 */
function gello(){
    for(let i= 0 ; i < 5; i++){
     console.log(i)
    }
    console.log(i)
     
 }

gello()