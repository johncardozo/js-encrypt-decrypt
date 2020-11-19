var CryptoJS = require("crypto-js");

const mensaje = "Star Wars - The Return of the Jedi";
const secretKey = "123ABC";

// Encripción
const encriptado = CryptoJS.AES.encrypt(mensaje, secretKey).toString();
console.log(encriptado);

// Desencripción
const bytes = CryptoJS.AES.decrypt(encriptado, secretKey);
const desencriptado = bytes.toString(CryptoJS.enc.Utf8);
console.log(desencriptado);
