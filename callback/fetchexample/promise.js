let promise = new Promise(function(resolve, reject) {
     fetch("https://api.restful-api.dev/objects").then((res, error)=>{
        return resolve(res)
     })
  });
promise.then((res)=>{
    console.log(res)
})