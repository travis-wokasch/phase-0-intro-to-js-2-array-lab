const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(){
    cats.push('Ralph')
}

function destructivelyPrependCat(){
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const newCats = [...cats, 'Broom']
    return newCats
}

function prependCat(name){
    const newCats = ['Arnold', ...cats]
    return newCats
}

function removeLastCat(){
    const newerCats = [...cats]
    newerCats.pop()
    return newerCats
}

function removeFirstCat(){
    const newerCats = [...cats]
    newerCats.shift()
    return newerCats
}