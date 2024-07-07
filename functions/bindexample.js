let obj = {
    name: "Shikha",
    last: "Mudgal",
    arrowGreet: () => {
        // this in arrowd function refer to the global object not the object under
        // which this function is decalared
        console.log( this)
        console.log(Object.prototype.toString.call(this))
        console.log(this.name);
    },
    greet: function(greeting){
        console.log(this)
        console.log(greeting+ " " +this.name+ " "+ this.last)
    }
}

let obj2 = {
    name: "tanuj",
    last: "Vishnoi"
}
obj.arrowGreet();

let f = obj.greet.bind(obj2, "dsads");
f()