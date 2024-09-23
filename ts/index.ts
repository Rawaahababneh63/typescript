let num: number = 8; 
if (num % 2 === 0) {
    console.log(`${num} is Even`);
} else {
    console.log(`${num} is Odd`);
}

/////////////////////////////////////
let prices: number[] = [150, 90, 300, 75, 250];
let threshold: number = 100;

for (let i = 0; i < prices.length; i++) {
    if (prices[i] > threshold) {
        console.log(prices[i]);
    }
}
///////////////////////////////////

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
}

let users: User[] = [
    { name: "raawaa", age: 28, isAdmin: true },
    { name: "Sarah", age: 35, isAdmin: false },
    { name: "Eman", age: 45, isAdmin: true },
    { name: "Malik", age: 40, isAdmin: true }
];

let oldestAdmin: User | null = null;

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin) {
        if (oldestAdmin === null || users[i].age > oldestAdmin.age) {
            oldestAdmin = users[i];
        }
    }
}

if (oldestAdmin !== null) {
    console.log(`The oldest admin is ${oldestAdmin.name}`);
} else {
    console.log("No admin found");
}