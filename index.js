 
 const returnFirstTwoDrivers = function (array) {
 return array.slice(0,2)
 
 }

 const returnLastTwoDrivers = function (){['Antonia', 'Nuru', 'Amari', 'Mo']
return ['Amari', 'Mo']
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

  function createFareMultiplier(x = 5){
    return function abc (y = 5){return x * y}
  }

const fareDoubler = createFareMultiplier(2)

const  fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfNames ,eitherOr ){  
     return eitherOr(arrayOfNames)
}


   
    
 
