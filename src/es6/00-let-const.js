//parametros por defaul 
//como se hacia antes:
// se creaba la funcion con los parametros y se creaban los variables con la asigancion de los parametrs
// recibidos y se les asigna un valor por defual
function newUser  (name, age, country){
    var name = name || 'Rosa';
    var age = age || 23;
    var country = country || 'MX';
    console.log(name,age,country);
}

newUser();
newUser('Rosalba',24,'CAN' );

function newAdmin(name = 'oscar', age= 32, country= 'CL'){
    console.log(name,age,country)
}
newAdmin();
newAdmin('Alejandro',23,'mx')

