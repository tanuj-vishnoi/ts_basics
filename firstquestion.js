function push(){
    const items = []
    return {
        add(item){
            items.push(item)
        },
        remove(){
            items.pop()
        },
        get(){
            return items
        }
    }
}

let f = push(1,2,3,4)
f.add(1)
f.items = [2,3,4,5]
console.log(f.get())