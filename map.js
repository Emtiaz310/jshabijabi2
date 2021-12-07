var arr = [ 1,2,3,4]

var sqArr = arr.map(function (value) {
    // return Math.random() *100;
    return value * value ;
})
console.log(arr);
console.log(sqArr);

// Our map function 
function myMap(arr ,cb) {
    newArr = []
     for(let i = 0; i < arr.length ; i++){
        var temp = cb(arr[i]);
        newArr.push(temp);
     }
     return newArr
}
// console.log(myMap(arr)); 

var sqr = myMap(arr, function (value) {
    return value * value 
});

var qub = myMap(arr, function (value) {
    return value * value * value
});

var qten = myMap(arr, function (value) {
    return value * 10
});

console.log(arr, qub,qten);
