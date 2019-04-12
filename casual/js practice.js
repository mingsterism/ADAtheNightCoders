//this is a js practice
/* This is a
js practice */

function dayToBe(day) {
	switch (day) {
		case 1:
			console.log('Monday');
			break;
		case 2:
			console.log('Tuesday');
			break;
		case 3:
			console.log('Wednesday');
			break;
		default:
			console.log('Another day');
	}
}

dayToBe(x);

var x = 2;
switch (x) {
	case 1:
		console.log(x);
		break;
	case 2:
		console.log(x + 2);
		break;
	default:
		console.log(x + 5);

var melissaProfile = {
	name: 'Melissa',
	age: 27,
	height: 155,
	hobbies: [ 'tv', 'laptop' ],
	family: [
		{ name: 'Jimmy', age: 56, height: 165, hobbies: [ 'badminton', 'tv' ] },
		{ name: 'Jacqueline', age: 56, height: 165, hobbies: [ 'cooking', 'reading' ] },
		{ name: 'Jeremy', age: 31, height: 171, hobbies: [ 'running', 'programming' ] },
		{ name: 'Ben', age: 28, height: 170, hobbies: [ 'drinking', 'gym' ] },
		{ name: 'Aaron', age: 17, height: 175, hobbies: [ 'drinking', 'pc' ] }
	]
};

var louisProfile = {
	name: 'Louis',
	age: 30,
	height: 179,
	hobbies: [ 'phone', 'yoga' ],
	family: [
		{ name: 'Dato', age: 65, height: 172, hobbies: [ 'cooking', 'buying' ] },
		{ name: 'Datin', age: 67, height: 160, hobbies: [ 'cooking', 'feeding' ] },
		{ name: 'Preston', age: 32, height: 183, hobbies: [ 'baking', 'shopping' ] },
		{ name: 'Ashton', age: 25, height: 170, hobbies: [ 'studying', 'gaming' ] },
		{ name: 'Ultron', age: 17, height: 175, hobbies: [ 'drinking', 'looking' ] }
	]
};

console.log(melissaProfile.family[1]); //Jacqueline
console.log(melissaProfile.family[1].hobbies[1]); //reading

function calculateAverage(profile, y) {
	var profileFamily = profile.family;
	var total = 0;
	for (var x = 0; x < profileFamily.length; x++) {
		total = total + profileFamily[x][y];
	}
	{
		var average = total / profileFamily.length;
		console.log(average);
	}
}

calculateAverage(melissaProfile, 'age');
calculateAverage(melissaProfile, 'height');
calculateAverage(louisProfile, 'age');
calculateAverage(louisProfile, 'height');

var sum = 0;
var num = 0;

while (num < 10) {
	sum += num;
	num++;
}
console.log(sum);

var randomStuff = [ '#', '##', '###', '####' ];
var x = 0;
while (x < randomStuff.length) {
	var total = randomStuff[x];
	x++;
}

for (x = 0; x < randomStuff.length; x++) {
	var total = randomStuff[x];

	console.log(total);
}

var y = randomStuff.length - 2;
for (y; y >= 0; y--) {
	var rtotal = randomStuff[y];

	console.log(rtotal);
}

var car = [ 'BMW', 'Perodua', 'Toyota' ];

i = 0;
while (i < car.length) {
	console.log(car[i]);
	i++;
}

function printerArray(mango) {
	for (i = 0; i < mango.length; i++) console.log(mango[i]);
}
printerArray([ 'cat', 'spider', 'kangaroo' ]);

function adder(num1, num2) {
	return num1 + num2;
}

var result = adder(2, 4) + 96;
console.log(result);

function doesExist(nums, num) {
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] === num) {
			return true;
		}
	}
	return false;
}

var fruits = [ 'apple', 'pear', 'banana', 'mango' ];
console.log(fruits.length);
console.log(fruits.reverse());
console.log(fruits.reverse());
console.log(fruits.indexOf('banana'));
fruits.push('durian');
fruits.push('durian');
fruits.pop();
fruits.unshift('shit');
fruits.shift('shit');

console.log(fruits.join('--'));

var mel = {
  name: "Melissa",
  age: "27",
  grades: [90, 95, 100]
};

mel["hobby"] = "swimming";

delete mel.age;
console.log(mel);

// EXERCISE REVERSE STRING :

function reverseString(str) {
  var strArr = str.split("");
  var reverseStrArray = strArr.reverse();
  var reverseArrayStr = reverseStrArray.join("");
  return reverseArrayStr;

  (reverseString("hello")
//   ---------OR------------

  console.log(
    str
      .split("")
      .reverse()
      .join("")
  );

  (reverseString("hello")
// ---------OR-------------

  var final = "";
  for (var i = str.length - 1; i >= 0; i--) {
    final += str[i];
  }
  return final;
}

// console.log(reverseString("hello"));

// ----------------------------------------------------
// EXERCISE : FACROTIALIZE 
// IF num = 5 then use front number like 1, 2, 3 ,4

function factorialize(num) {
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
factorialize(6);
