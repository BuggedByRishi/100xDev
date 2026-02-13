const users = '{"name" : "Rishi", "age": 21, "gender":"male"}';

// JSON.parse
// JSON.stringify

const user = JSON.parse(users)
console.log(user["gender"]);