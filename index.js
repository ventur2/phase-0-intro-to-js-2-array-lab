const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(bob){
    return cats.push(bob)
}
console.log(cats)

function destructivelyPrependCat(mike){
    return cats.unshift(mike)
}

function destructivelyRemoveLastCat(garfield){
    return cats.pop(garfield)
}

function destructivelyRemoveFirstCat(milo){
    return cats.shift(milo)
}

function appendCat(george){
    // return cats.slice().push(george)
let copyCats = cats.slice()
copyCats.push(george)
return copyCats
}

function prependCat(frank){
    let copyCats = cats.slice()
    copyCats.unshift(frank)
    return copyCats
}

function removeLastCat(george){
    let copyCats = cats.slice()
    copyCats.pop (george)
    return copyCats
}

function removeFirstCat(mike){
    let copyCats = cats.slice()
    copyCats.shift(mike)
    return copyCats
}