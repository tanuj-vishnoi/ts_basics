let a  = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("Done")
    }, 5000)
})

let b = new Promise(function(re, rej){
    setTimeout(()=>{
        rej("passed")
    }, 5000)
})

b.then((res)=>{
    console.log(res)
}, (error)=>{
    console.log(error)
})