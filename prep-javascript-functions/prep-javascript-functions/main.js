function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var hours = convertHoursToMinutes(2);
console.log(hours);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var greeting = getGreeting('World');
console.log(greeting);

function addAndMuliplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var mul5 = addAndMuliplyBy5(10, 5);
console.log(mul5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var div5 = multiplyAndDivideBy5(35, 10);
console.log(div5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var sub2 = subtractTwoNumbers(22, 7);
console.log(sub2);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circum = getCircleCircumference(5);
console.log(circum);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(number) {
  return number ^ 3;
}
var cubed = cube(5);
console.log(cubed);
