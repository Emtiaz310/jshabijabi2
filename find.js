var arr = [ 2,4,5,6,2,7,9,20,10,40,24,52]

var result = arr.find(function (value) {
    return value === 9
})
console.log(result); 

var result = arr.findIndex(function (value) {
    return value === 9
})
console.log(result);

// Our Find method 
function myFind(arr , cb) {
    for(let i = 0 ; i < arr.length ; i++ ){
        if(cb(arr[i])){
            // return arr[i]
            return i 
        }
    }
}

var result = myFind(arr , function (value) {
    return value === 9
})
console.log(result);