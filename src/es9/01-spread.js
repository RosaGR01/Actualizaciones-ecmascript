const user = {
    userName : 'Rosa',
    age : '23',
    country: 'CO'
};
const {userName, ...values} = user;
console.log(userName);
console.log(values);