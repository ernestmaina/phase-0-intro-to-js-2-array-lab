// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function  destructivelyAppendCat(name){
    cats.push(name);
    return cats.splice();
}


function  destructivelyPrependCat(name){
    cats.unshift(name);
    return cats.splice();
}


function  destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats.splice();
}

function  destructivelyRemoveFirstCat(name){
    cats.shift(name);
   
}










 
















