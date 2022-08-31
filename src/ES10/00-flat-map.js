//flat
const arr= [1,2,3,4,[1,2,,3,4,[5,6,7]]];
console.log(arr.flat(3));

////flatmap
const arr2 = [1,2,3,4,5];
console.log(arr2.flatMap(v=>[v,v*2]))
console.log(arr2.flatMap(x => [x * 2])) 