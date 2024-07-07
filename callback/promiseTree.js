const po = new Promise((res, rej) => {
    if (true) {
        setTimeout(() => {
            res("solved")
        }, 5000)
    } else {
        rej("Rejected")
    }    
})
po.then(() => {

}).catch(() => {

}).finally(() => {

})



