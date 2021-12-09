//1.  program to display the sum of 1 to 100 

const number = parseInt(100);
// const number = parseInt(200);

let sum2 = 0;
for (let i = 1; i <= number; i++) {
    sum2 += i;
}

console.log('The sum of 1 to 100  is :', sum2);

//2.  program to display the sum of 1 to 100 Odd numbers 

let sum3 = 0;
for( let i = 0 ; i <= number ; i++ ){
    if(i % 2 === 1){
        sum3 += i ;
    }
}
console.log('The sum of 1 to 100 odd numbers is : ' , sum3); 

//3.  program to display the sum of 1 to 100 Even numbers 

let sum4 = 0;
for( let i = 0 ; i <= number ; i++ ){
    if(i % 2 === 0){
        sum4 += i ;
    }
}
console.log('The sum of 1 to 100 Even numbers is : ', sum4); 