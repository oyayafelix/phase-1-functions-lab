// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks < 42) {   
        return 42 - blocks;
    } 
    else  
     {
        return blocks - 42;
    } 
}



 function distanceFromHqInFeet (blocks) {
     return distanceFromHqInBlocks(blocks) * 264;
 }



function distanceTravelledInFeet(start,stop) {
   if (stop > start) {
       return (stop - start) * 264
   } 
   else 
   {
      return (start - stop) * 264
   }
}


function calculatesFarePrice(start, stop){
    const feetTravelled = distanceTravelledInFeet(start,stop);
    if(feetTravelled<=400){
      return 0;
    }else if(feetTravelled>400 && feetTravelled<=2000){
      return (feetTravelled-400) * 0.02;
    }else if(feetTravelled>2000 && feetTravelled<=2500){
      return 25;
    }else if(feetTravelled>2500){
      return "cannot travel that far";
    }
  }
    