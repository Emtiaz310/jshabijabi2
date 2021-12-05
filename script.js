// // Reverse Method  
// let arr = [ 1,2,3,4,5,6,7,8,9,10] ;
// let leng = arr.length;
// for ( let i =  0; i < (leng / 2 ); i++){
//     let temp = arr [i] ;
//     arr[i] = arr [ leng - 1 - i];
//     arr [ leng - 1 - i] =  temp;
// }
// console.log(arr);
// console.log(arr.reverse());
// console.log(arr.reverse());

let person = {
    name : 'Emon',
    cls : 12,
    home : 'rangpur'
}
console.log(person);  

// object comparing  
var obj1 = {
    a : 30,
    b :40
}
var obj2 = {
    a : 30,
    b : 40
}

if( obj1.a === obj2.a && obj1.b === obj2.b){
    console.log(true);
}else{
    console.log(false);
}