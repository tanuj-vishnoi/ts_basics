function hello(a, secondFunction){
    setTimeout(secondFunction, 5000);
    console.log("hello")
}

hello("sds", ()=>{
    console.log("hellodasdasd ")
});