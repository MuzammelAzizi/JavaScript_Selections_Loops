console.log("Hello World!\n==========\n");

/* console.log("EXERCISE 1:\n==========\n");
// Exercise 1 Section
for(let i = 1; i <= 100; i += 2){
    console.log(i);
}


console.log("EXERCISE 2:\n==========\n");
// Exercise 2 Section
for(let i = 1; i <= 100; i ++){
    if (i % 3 == 0 && i % 5 === 0){
        console.log( i, "FIZZBUZZ")
    }else {
        if(i % 3 === 0){
            console.log(i, "FIZZ")
        }
        if( i % 5 === 0){
            console.log(i, "BUZZ")
        } else {
            console.log(i, "Not divisble by 3 or 5")
        }
    }
} */

console.log("EXERCISE 3:\n==========\n");
// Exercise 3 Section
/*   let i = 1 
 
while(i <= 100){
    if(i % 2 !==0){
        console.log(i)
    }
    i++
} */
 
/*  do {
    if(i % 2 !== 0) {
        console.log(i)
    }
    i++
}while(i <= 100)  */


/*  while(i = 100 ){
    if (i % 3 == 0 && i % 5 === 0){
        console.log( i, "FIZZBUZZ")
    }else {
        if(i % 3 === 0){
            console.log(i, "FIZZ")
        }
        if( i % 5 === 0){
            console.log(i, "BUZZ")
        } else {
            console.log(i, "Not divisble by 3 or 5")
        }
    }
}
 */

console.log("EXERCISE 4:\n==========\n");
// Exercise 4 Section//
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
let valueFound = false
for(let i = 0; i <= n; i++){
    if(i == value) {
        console.log(value, "found value")
        valueFound = true
        break
    }
}
    if(!valueFound){
        console.log(value, "not found")
    }
