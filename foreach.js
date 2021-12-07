var arr = [ 1,2,3,4,5,6,7,8,9,10]

var sum = 0
arr.forEach(function (value, index, arr) {
    console.log(value, index, arr);
    sum += value 
})
console.log(sum);


// Our cb
function forEach(arr ,cb) {
    for( let i = 0; i< arr.length ; i++){
        // console.log(arr[i]);
        cb(arr[i] ,i ,arr)
    }
}
var sum = 0
forEach(arr, function (value, index, arr ) {
    console.log(value,index,arr);
    sum += value 
})
console.log(sum);

forEach(arr, function (value, index, arr) {
    arr[index] = value * 5
})
console.log(arr);

forEach(arr, function (value, index, arr) {
    arr[index] = value / 2
})
console.log(arr);



