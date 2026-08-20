//import { students } from "./studentObject.js"

//console.log(students[0].id);

// read json object 
import {readFileSync, writeFileSync} from "fs";
import path from "path"

//const filename = "jsonObject/user.json"; //filepath
const filename = path.join(process.cwd(), "jsonObject", "user.json") // process.cwd (current directory), then file path add
const users=JSON.parse(readFileSync(filename)); //read
console.log(users);

// now push a new user info
const newUser = {
    username: "user 07",
    password: "1234"
}

users.push(newUser);
console.log("after push: ",users); // move here, after push
// now we need to write inside the json file
writeFileSync(filename, JSON.stringify(users,null,2)) //write jokhn kortesi first ei object hisebe write hocche bt json file e String hisebe save hobe tai JSON.stringify use kora