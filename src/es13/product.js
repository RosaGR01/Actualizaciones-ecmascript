import fetch from "node-fetch";
const URL =' https://api.escuelajs.co/api/v1/products';
const response = await fetch(URL);//await espera a que realiza la ejecusion y regrese la informacion del servidor 
const products = await response.json();//lo que recibimos lo vamos a transformar a un objeto JSON

export {products};//exportamos el resultado