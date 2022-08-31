const promise1 = new Promise((resolve, reject)=> reject('Reject1'));
const promise2 = new Promise((resolve, reject)=> resolve('Resolve1'));
const promise3 = new Promise((resolve, reject)=> resolve('Resolve2'));

Promise.any([promise1,promise2,promise3])//regresa el primer valor resulto
.then(response => console.log(response));
