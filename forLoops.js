// initialize, test, increment
console.log("Print all Numbers Between -10 and 19");

for (count = -10; count <= 19; count++) {
    console.log(count);
    
}

console.log("Print all Even Numbers Between 10 and 40");

for (count = 10; count <= 40; count++) 
{
    if (count % 2 === 0) {
        console.log(count);
    }
     
}

console.log("Print all Odd Numbers Between 300 and 333");

for (count = 300; count <= 333; count++) 
{
    if (count % 2 !== 0) {
        console.log(count);
    }
     
}


console.log("Print all Numbers divisible between 5 and 3 Between 5 and 50");

for (count = 5; count <= 50; count++) 
{
    if (count % 5 === 0 && count % 3 === 0) {
        console.log(count);
    }
     
}