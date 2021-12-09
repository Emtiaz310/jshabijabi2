// inner function 
function morning (greet ,name ) {
    function getFirstName() {
        if(name){
            return name.split(' ')[0] ;
        }
        else {
            return ' Visitor' ;
        }
    }
    var message = greet + ' ' + getFirstName();
    document.getElementById('demo').innerHTML = message ;
}

morning('Good Morning ' , 'Myfriend');


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

// JSON (if one valur is false ruturn false ) 
console.log(JSON.stringify(obj1) === JSON.stringify(obj2) ) ;

// Function
function name(params) {
    
}

// how to call Function 

function myFunction() {
    console.log('I am Emtiaz Emon.I live in Rangpur City. I love to play cricket also football. My dream job is react native developer . ');
}
myFunction()

function add() {
    x= 10 ,
    y = 20
    console.log(x+y);
}
add ()

function sub() {
    x = 30,
    y = 10
    console.log(x-y);
}
sub()


//  Function with loop ,array 

var arr1 = [ 1,2,3,4,5,6,7,8,9,10]
var arr2 = [ 11,12,13,14,15,16,17,18,19,20]
var arr3 = [ 21,22,23,24,25,26,27,28,29,30]
var arr4 = [ 41,42,43,44,45,46,47,48,49,50]

function arrayOfSum(arr) {
    var sum = 0 ;
    for (var i = 0 ; i< arr.length  ; i++ ){
        sum += arr[i];
    }
    console.log(sum);
}
arrayOfSum(arr1)
arrayOfSum(arr2)
arrayOfSum(arr3)
arrayOfSum(arr4)


// JS arguments

function addAll() {
    var sum = 0;
    for( var i= 0; i< arguments.length ; i++){
        sum += arguments[i];
    }
    console.log(sum);
}
addAll(3,10,2002) ;
addAll(100,200,300,400,500,600,700,800,900,1000)


// First class function 

function add(a,b) {
    return a+b ;
}

// 1. A function can be  stored in a Variable .
var sum = add ;
console.log(typeof sum);
console.log(sum(3,10));

// 2. A function can be  stored in an Array .
var arr = [] 
arr.push(add)
console.log(arr)
console.log(arr[0](5,10));
console.log(typeof arr);

// 3. A function can be  stored in an Object .
var obj = {
    sum : add
}
console.log(obj);
console.log(obj.sum(5,20));

// 4. We can create function as  need  .
// setTimeout(function() {
//     console.log('I am enjoying javaScript');
// }, 1000);
// 4. We can pass  function as an arguments  . 
