const list = () => {
    let listHead = null
    let listTail = null

    const append = (value) => {
        if (value && listHead === null) {
            listHead = node(value)
        } else if (value && listTail === null) {
            listTail = node(value)
            listHead.nextNode = listTail
        } else if (value) {
            let cur = node(value)
            listTail.nextNode = cur
            listTail = listTail.nextNode
        }
        return toString()
    }
    const prepend = (value) => {
        if (value) {
            current = listHead
            listHead = node(value)
            listHead.nextNode = current
        }
        return toString()
    }

    function size() {
        let count = 0
        let current = listHead
        while (current !== null) {
            current = current.nextNode
            count += 1
        }
        return count
    }

    const head = () => {
        return listHead
    }

    const tail = () => {
        return listTail
    }

    const atIndex = (index) => {
        let x = size()
        let current = listHead
        if (index >= x) { return 'Index Value too big (starts with 0)' }
        while (current !== null) {
            if (index == 0) {
                return current
            }
            current = current.nextNode
            index -= 1
        }
    }

    const pop = () => {
        let x = size()
        let current = listHead
        if (x <= 0) { return 'add a node before trying to pop' }
        while (current !== null) {
            if (x == 2) {
                listTail = current
                listTail.nextNode = null
                return toString()
            }
            if (x == 1) {
                listHead = null
                return toString()
            }
            x -= 1
            current = current.nextNode
        }
    }

    const contains = (value) => {
        let current = listHead
        while (current !== null) {
            if (current.value === value) {
                return true
            }
            current = current.nextNode
        }
        return false
    }

    const toString = () => {
        let result = []
        let current = listHead
        while (current !== null) {
            result.push(current.value)
            current = current.nextNode
        }
        return result.join(' -> ')
    }

    const insertAt = (value, index) => {
        let x = size()
        let current = listHead
        if (index >= x || index == 0) {
            append(value)
            return toString()
        }
        while (current != null) {
            if (index == 0) {
                let next = current
                current = node(value)
                prev.nextNode = current
                current.nextNode = next
                return toString()
            }
            index -= 1
            prev = current
            current = current.nextNode
        }
    }

    const removeAt = (index) => {
        let current = listHead
        if (index == 0) {
            listHead = listHead.nextNode
            return toString()
        }
        while (current != null) {
            if (index == 0) {
                prev.nextNode = current.nextNode
                return toString()
            }
            index -= 1
            prev = current
            current = current.nextNode
        }
    }

    return {
        append,
        prepend,
        size,
        head,
        tail,
        atIndex,
        pop,
        contains,
        toString,
        insertAt,
        removeAt
    }
}

const node = (value) => {
    return {
        value: value || null,
        nextNode: null
    }
}

let x = list()
console.log(x.append(1)) //  1 //
console.log(x.append(2)) //  1 -> 2 //
console.log(x.append(3)) //  1 -> 2 -> 3 //
console.log(x.append(4)) //  1 -> 2 -> 3 -> 4 //
console.log(x.append(5)) //  1 -> 2 -> 3 -> 4 -> 5//
console.log(x.pop()) //  1 -> 2 -> 3 -> 4 //
console.log(x.prepend(20)) // 20 -> 1 -> 2 -> 3 -> 4 //
console.log(x.head()) // value: 20 nextNode: ... //
console.log(x.tail()) // value: 4 nextNode: null //
console.log(x.atIndex(3)) // value: 3 nextNode: ... //
console.log(x.contains(4)) // true //  
console.log(x.contains(100)) // false //
console.log(x.insertAt('new', 3)) // 20 -> 1 -> 2 -> new -> 3 -> 4//
console.log(x.removeAt(2)) // 20 -> 1 -> new -> 3 -> 4 //
console.log(x.toString()) // 20 -> 1 -> new -> 3 -> 4 //