import bcrypt from "bcrypt";



const encryptPassword=bcrypt.hashSync("abc123",10);
const com =bcrypt.compareSync("abc123",encryptPassword);
console.log("passwword",com);

