// ---------- Operators ----------
let x = 20, y = 4;
const studentName = "Ammar Ahmed";

console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);
console.log("Comparison:", x > y, x === y);
console.log("Logical:", x > 10 && y < 10);

// ---------- Control flow ----------
let marks = 78;

if (marks >= 90)
    console.log("Grade: A");
else if (marks >= 75)
    console.log("Grade: B");
else if (marks >= 60)
    console.log("Grade: C");
else
    console.log("Grade: F");

let day = "Mon";

switch (day) {
    case "Mon": console.log("Start of the week"); break;
    case "Fri": console.log("Almost weekend"); break;
    default: console.log("Midweek");
}

for (let n = 1; n <= 5; n++)
    console.log("For loop:", n);

let count = 5;
while (count >= 1) {
    console.log("While loop:", count);
    count--;
}

// ---------- Arrays ----------
let projectList = ["Campus Connect", "TaskFlow", "WeatherNow"];

projectList.push("QuizMaster");
console.log("After push:", projectList);

projectList.pop();
console.log("After pop:", projectList);

let upperList = projectList.map(p => p.toUpperCase());
console.log("Map:", upperList);

let longNames = projectList.filter(p => p.length > 8);
console.log("Filter:", longNames);

projectList.forEach(p => console.log("Project:", p));

// ---------- Functions ----------
function averageOf(a, b, c) {
    return (a + b + c) / 3;
}

const averageOfArrow = (a, b, c) => (a + b + c) / 3;

console.log("Average:", averageOf(5, 4, 4));
console.log("Arrow Average:", averageOfArrow(5, 4, 4));

// ---------- Strings ----------
let rawText = "   Ammar Ahmed   ";

console.log("Concatenation:", "Hello, " + studentName);
console.log(`Template Literal: Welcome, ${studentName}`);
console.log("Trim:", rawText.trim());
console.log("Uppercase:", rawText.toUpperCase());
console.log("Split:", rawText.trim().split(" "));
console.log("Slice:", rawText.trim().slice(0, 5));

// ---------- Combined: array of skill objects ----------
const skillSet = [
    { name: "HTML & CSS", rating: 5 },
    { name: "JavaScript", rating: 4 },
    { name: "React.js", rating: 4 },
    { name: "MongoDB", rating: 3 }
];

skillSet.forEach(s => {
    console.log(`${s.name}: ${s.rating}/5`);
});
