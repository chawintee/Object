let user = {
    name: `chawintee` ,
    "computer skill": "Javascript",
    age: 25 ,
    lastname: `Muennarong` ,
    email: `chawintee`
}

console.log(user);

user.height = 168;
user.weight = 68;

console.log(user);

console.log(user["computer skill"]);

delete user.age;
console.log(user)