function* iterate(arr){
    for( let value of arr){
        yield value;
    }
}

const it = iterate(['Rosa','David','Jennifer','Oscar']);
console.log(it.next().value);
console.log(it.next().value);