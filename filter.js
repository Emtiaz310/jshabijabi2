var arr = [ 1,2,3,4,5,6,7,8,9,10]

var filterArr = arr.filter(function (value) {
    // return value % 2 === 0 
    // return value >5 
    return value % 2 === 1
})
console.log(filterArr);

// Our filter --------------

function myFilter(arr , cb) {
    var newArr = []
    for(let i = 0 ; i < arr.length ; i++ ){
        if(cb(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(myFilter(arr, function(value){
    return value % 2 === 1
}));
console.log(myFilter(arr, function(value){
    return value % 2 === 0
}));

