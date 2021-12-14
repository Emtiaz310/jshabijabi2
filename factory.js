var createRect = function (width, height) {
    return  {
        width : width ,
        height : height ,
        draw : function () {
            console.log('Learning JavaScript .');
            this.printProperties
            console.log(this);
        },
        printProperties : function () {
            console.log('My width is ' + this.width);
            console.log('My height is ' + this.height);
        }

    }
}

var rect1 = createRect(800,4900)
rect1.draw() ;
