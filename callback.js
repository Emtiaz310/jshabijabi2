function sample(a, b, cb) {
    var c = a + b 
    var d = a - b 
    var result = cb(c, d )
    return result
}
// function sum(a,b) {
//     return a + b 
// }
// var result = sample(10,3, sum)
// console.log(result);
var result = sample(10,3, function (c,d) {
    return c + d
})
console.log(result);

var result2 = sample(10,3, function (c,d) {
    // console.log(c,d);
    return c- d 
})
console.log(result2);

var result3 = sample( 10,3 , function (c,d) {
    return c*d
})
console.log(result3);