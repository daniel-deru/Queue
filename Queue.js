

class Queue {
    constructor(){
        this.store = []

    }

    add(item){
        this.store.push(item)
    }

    remove(){
        return this.store.shift()
    }

    front(){
        return this.store[0]
    }

    back(){
        return this.store[this.store.length - 1]
    }

    display(){
        let displayString = ''
        this.store.forEach((item) => displayString += `${item}\n`)
        return displayString
    }

    isEmpty(){
        return this.store.length == 0 ? true : false
    }
}