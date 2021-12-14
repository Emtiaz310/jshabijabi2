var rect = {
    width : 100 ,
    height : 200 ,
    draw : function () {
        console.log('This is Rectangle .  ');
        this.printProperties()
    },
    printProperties : function() {
        console.log('My width is ' + this.width);
        console.log('My height is ' + this.height);
    }
}
rect.draw()