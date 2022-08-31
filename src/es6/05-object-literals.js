//enahced object literales
//
 function newUser (user, age, country){
    return {
        user: user ,
        age: age,
        country: country
    }
 }

 // la nueva actualizacion de ecmascript nos dice que si los parametros son iguales a las variables que vamos aretornar
 //solo basta con colocarlo solo una vez
 function newUser1( user,age, country){
    return {
        user,
        age,
        country
    }
 }

 console.log(newUser1('gnx',35,'mx'));
 console.log(newUser('gnx',35,'mx'));