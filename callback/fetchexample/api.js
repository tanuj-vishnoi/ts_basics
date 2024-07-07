
const requestOptions = {
    method: "GET",
    redirect: "follow"
};


async function nested() {
    await fetch("https://api.restful-api.dev/objects")
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            } else {
                    res.json().then((text) => {
                    let id = text[0]['id']
                    fetch("https://api.restful-api.dev/objects/" + id).then((res) => {
                        if (!res.ok)
                            new Error("Not a valid id")
                        else
                            res.json().then((json) => {
                                console.log(`Valid response for ${id}`);
                                console.log(json)
                            })
                    })
                })
            }
        }, (error) => {
            console.log("Big error")
            console.log(error)
        })
}

console.log(nested())
console.log('');


async function getCat() {
    const a = await fetch("https://api.restful-api.dev/objects")
        .then((res) => {
            return res.text()
        })
    console.log(a)
}
// getCat()