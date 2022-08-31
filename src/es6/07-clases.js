//declaracion de usuarios
// class User{
// }
// //instancia
// const newUser = new User();



/*
class user{
    //metodos 
    greeting(){
        return 'hello';
    }
}
const gx = new user();

console.log(gx.greeting());
*/


// constructor 
class user{
    constructor(){
        console.log('nuevo usuario');
    }
    greeting(){
        return 'hello';
    }
}

const nuevo= new user();

// this hace referencia al elemento padre que lo contiene 

class user{
    constructor(name){
        this.name = name
    }
    //metodos 
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}
const ana= new user('Ana');
console.log(ana.greeting());


//setters and getters

class user{
    //constructor
    constructor(name, age){
        this.name= name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak} ${this.name}`
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age= n;
    }

}