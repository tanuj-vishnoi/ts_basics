let a  = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("Done")
    }, 5000)
})

let b = new Promise(function(re, rej){
    setTimeout(()=>{
        rej("Failed")
    }, 5000)
})

b.catch(()=>
    {
        console.log("catched")
    }
)