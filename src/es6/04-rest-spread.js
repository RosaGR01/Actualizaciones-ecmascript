//arrays decestructuracion
//la desestructuracion es obterner el valor del arreglo y asignarlo a una variable 
// let fruits = ['Apple', 'Banana'];
// let a= fruits[0];
// let b= fruits[1];


let fruits = ['Apple', 'Banana'];
let [a,b]= fruits;
console.log(a,b);

//decestructuracion de objetos 
let user={
    userName: 'Rosalba',
    age: 23
}

let {userName ,age }= user
console.log(userName,age)



//spread 

let persona = {name: 'Rosalba', age: 28}// creamos un bjeto con los atributos name, age
let country = 'Mx';// creamos una variable conutry
let data = {...persona , country};// creamos otro bjeto donde le asigmanos los datos del objeto persona y la variable coutry
console.log(data);

//rest