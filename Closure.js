// function test() {

//     var msg = 'I am learning JavaScript Closure and Scope .' 

//     function sayMsg() {
//         console.log(msg);
//     }
//     sayMsg()
// }
// test()

function test() {

    var msg = 'I am learning JavaScript Closure and Scope .' 

    return function() {
        console.log(msg);
    }
}
var sayMsg = test()
sayMsg();
