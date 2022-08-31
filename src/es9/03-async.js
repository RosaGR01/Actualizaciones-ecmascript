async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}
const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('hello');

async function arryOfName(arr){
    for await(let value of arr){
        console.log(value)
    }
}
const names = arryOfName(['Rosa','Perla','Sandia']);
console.log('after');