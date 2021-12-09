var friendList = [
    {
        name : 'Emtiaz'  ,
        age : 21 
    },
    {
        name : 'Nobita'  ,
        age : 22
    },
    {
        name : 'Doraemon'  ,
        age : 400
    },
    {
        name : 'Tom ',
        age : 100 
    },
    {
        name : 'Jerry' ,
        age : 50 
    }
]

var arr = [ 2,3,4,5,6,7,8,9,59,30,32,65, 23]

friendList.sort()
console.log(friendList);

arr.sort()
console.log(arr);

arr.sort(function (a,b) {
    if(a > b){
        return 1
        // return -1 ( return -1 will sort decending order )
    } 
    else if( a < b ){
        return -1
        // return 1 
    }
    else{
        return 0
    }
})
console.log(arr);

friendList.sort(function (a,b) {
    if(a.age > b.age  ){
        return 1 
        //  if I use a.name , b.name sort will perform alphabetically 
    }
    else if ( a.age < b.age ){
        return -1
    }
    else {
        return 0
    }
})
console.log(friendList);