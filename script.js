//sum up the values of an array recursively

const arr = [1,2,3,4,5,6,7]

const sumArr = array =>{
  //if the array has no values it will return zero
  if (array.length === 0){
    return 0
  //else we will start at first postition of the provided array and we will recursively work our way down the array with the slice method which is programatically reducing to one value
  }else{
    return array[0] + sumArr(array.slice(1))
  }
 

  
}


console.log(sumArr(arr))