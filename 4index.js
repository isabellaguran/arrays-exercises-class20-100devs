//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
//.forEach loop

function multiNumsInArray(arr){
let product= 1          //because we know we will alert a product 
arr.forEach(num => product *= num)   //we don`t need to declare num from before
  alert(product)  
};
multiNumsInArray([10,2,3])

//This can also be done with a for loop:

function multiNumsInArray(arr){
let product=1
for(i=0; i < arr.legth; i++){
product *= arr[i]
}
alert (product)
}
multiNumsInArray([10,2,3])
