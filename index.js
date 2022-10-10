//Array iteration 
//1.Create an array of movie titles. Loop through the array and each element to the h2.

let movies=["fight", 'win', 'worldwide']
 for (let i=0; i<movies.length; i++){
   document.querrySelector('h2').innerText += movies[i]
 }

//2.Create an array of numbers. Loop throug{h the array and three to each number and replace the old number.

let nums =[10,20,30]
//nums[0] += 3 //or nums[0]= nums[0] +3
//nums[1] += 3
//nums[2] += 3
//OR SIMPLYFIED
nums.forEach((item, i) => {
  nums[i] = item +3
})

//3.Find the average of all the numbers from question two

let sum =0
//nums.forEach((num) => sum += num THE HARDEST WAY 

//THE EASIEST WAY : 
 for(let i=0; i < nums.lenght; i++){
  sum += nums[i]
}
  console.log(sum / nums.length)         
 
