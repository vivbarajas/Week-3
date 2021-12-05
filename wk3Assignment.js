//Array called ages that contains the following values:
var ages = [3,9,23,64,2,8,28,93];
//printing the subtraction value of the first element in the array from the value in the last element
console.log (ages[ages.length-1]- ages[0]);
//add a new age to your array and repeat the step above to ensure it is dynamic 
ages.push(27);
//repeat the step above to ensure its dynamic
console.log (ages[ages.length-1]- ages[0]);
//use a loop to iterate through the array and calculate the average age. Pring the result in the console.
var i, sum=0;
for(i=0; i<ages.length;i++) 
{
    sum = sum+ages[i];
}
console.log(sum/ages.length);

//2. Create an array called names that contains the following values: Sam, Tommy, Tim, Sally, Buck and Bob
var names= ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//2a. Use a loop to iterate through the array and calculate the average number of letters per name. print the result to the console.
sum=0;

for(i=0; i<names.length; i++){
sum = sum + names[i].length;
}
console.log(sum/names.length);

//2b Use a loop to iterate through the array again and concatenate all the names together, separated by spaces and print the result to the console. 
var con=names[0];
for (i=1; i<names.length; i++) {
    con = con.concat(' ', names[i]);
}
console.log(con);
//3. How do you access the last element of any array?
//Use array slice() to return a specific element 
//Retrieve the last element using negative index ex: array.slice(-1)
//Save the last element in a variable 

//4. How do you access the first element of any array? 
//It is retrieved by accessing the element at the 0 index within the []

//5.Create a new array called nameLengths.
var nameLengths = [];
//Write a loop to iterate over the previously created names array
for (i=0; i < names.length; i++) {
    nameLengths[i] = names [i].length;
}
//and add the length of each name to the nameLengths array
//6.
sum = 0;
for (i=0; i<nameLengths.length; i++){
    sum = sum + nameLengths[i];
}
console.log(sum);

//7.
function concat_n_times(word,n) 
{
    var con=word
    for (i=1; i<=n; i++)
     {
        con = con.concat(word);
    }
    return con;

}
console.log(concat_n_times('Hello', 3));

//8.
function fullName(firstName, lastName) {
    return firstName.concat(' ',lastName);
}

console.log(fullName('Viviana','Barajas'));

//9
function isTotalGreaterThan100(arr)
    {
    sum=0;
    for(i=0;i<arr.length;i++) 
    {
    sum = sum + arr[i];
    }
    if (sum>100)
     {
    return true;
    }
    else {
    return false;
    }
    }

 //10
function compareAverage(arr1,arr2) {
    if(compareAverage(arr1) > compareAverage(arr2)) {
        return true;
    }
    else {
        return false;
    }
}

//11
var myArr = [2, 3, 4, 5, 6];
var myArr2 = [7, 8, 9];
console.log(isTotalGreaterThan100(myArr));
console.log(average(myArr));
console.log(compareAverage(myArr/myArr2.length));

//12
function willBuyDrink(isHotOutside,moneyInPocket) {
    if((isHotOutside)&& (moneyInPocket > 10.50)) {
        return true;
    }
    else {
        return false;
    }
}
var isHotOutside = true;
var moneyInPocket = 30.5;
console.log('Drink can be buy: ',willBuyDrink(isHotOutside,moneyInPocket));

//13: I chose to pick a function that converts celsius to farenheit! 
function convertToF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }
  
  convertToF(30);