//HARD EXERCISE
//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)


function onlyEvens(nums){
let evens=[]
nums.forEach( n => {
    if(n % 2 === 0){          //if is divided by 2 and is = 0 we know is even 
  evens.push(n)              // here we push the value into the array
    }
    
});
return evens
}
console.log(onlyEvens([1,2,3,4,5,6]))

//Wherever we see nums is an array with 6 elements in it.
//We setup an empty array called evens.
//Then we loop through our array.Each times it runs(.forEach loop will run 6 times because are 6 elements in the array)
//When n=1, 1%2? NO 
//n=2, 2%2? YES Since is a true statement,we do the next line evens.push(n) . What will do,will push the (n) that now is 2,and push it into that empty array called evens.
//Same goes for 4 and 6.
//Will return the even [2,4,6]
