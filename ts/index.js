var num = 8;
if (num % 2 === 0) {
    console.log("".concat(num, " is Even"));
}
else {
    console.log("".concat(num, " is Odd"));
}
/////////////////////////////////////
var prices = [150, 90, 300, 75, 250];
var threshold = 100;
for (var i = 0; i < prices.length; i++) {
    if (prices[i] > threshold) {
        console.log(prices[i]);
    }
}
var users = [
    { name: "raawaa", age: 28, isAdmin: true },
    { name: "Sarah", age: 35, isAdmin: false },
    { name: "Eman", age: 45, isAdmin: true },
    { name: "Malik", age: 40, isAdmin: true }
];
var oldestAdmin = null;
for (var i = 0; i < users.length; i++) {
    if (users[i].isAdmin) {
        if (oldestAdmin === null || users[i].age > oldestAdmin.age) {
            oldestAdmin = users[i];
        }
    }
}
if (oldestAdmin !== null) {
    console.log("The oldest admin is ".concat(oldestAdmin.name));
}
else {
    console.log("No admin found");
}
