let a  = new Promise(function(resolve, reject){
    setTimeout(()=>{
        a = "api response"
        resolve(a)
    }, 5000)
})

a.then((result)=>{
    console.log("resolved result "+result)
}, (error)=>{
    console.log("resolved error "+result)
})