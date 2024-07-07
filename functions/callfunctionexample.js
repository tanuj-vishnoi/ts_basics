let obj = {
    name: "tanuj",
    last: "Vishnoi"
}

function print(greeting){
    console.log(greeting+ "" +this.name+ " "+ this.last)
}

print.call(obj, "hello")