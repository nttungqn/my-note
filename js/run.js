// function reverseString(str) {
// 	var result = [];
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		result.push(str[i]);
// 	}
// 	return result.join('');
// }
// console.log(reverseString('abcdef'));

// for duyet mang map
// function isEmptyString(str) {
// 	return typeof str === 'string' && str.trim().length === 0;
// }

// function isBoolean(bool) {
// 	return typeof bool === 'boolean';
// }

// function isNumber(num) {
// 	return (!isEmptyString(num) && !isBoolean(num) && !isNaN(num)) || typeof num === 'number';
// }

// function filterNumbers(arr) {
// 	var result = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		// kiem tra tung so
// 		if (isNumber(arr[i])) result.push(arr[i]);
// 	}
// 	return result;
// }

// console.log(filterNumbers([1, '2', ' ', NaN, Number.POSITIVE_INFINITY, 66, 'ab1', false]));

/////////////////////////////////////////////////////

// var a = 'Hello';
// first();

// function first() {
// 	var b = 'Hi';
// 	second();

// 	function second() {
// 		var c = 'Hey';
// 		third();
// 	}
// }

// function third() {
// 	var d = 'John';
// 	console.log(a + b + c + d);
// }

// -------------------------------------------------------------
// var Person = function (name, dateOfBirth, job) {
// 	this.name = name;
// 	this.dateOfBirth = dateOfBirth;
// 	this.job = job;
// };

// Person.prototype.caculateAge = function () {
// 	console.log(2020 - this.dateOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'teacher');
// console.log(john);
// john.caculateAge();
// console.log(john.lastName);

// -----------------------------------------------------------------
// function retirement(retirementAge) {
// 	var a = ' years left until retirement.';
// 	return function (yearOfBirth) {
// 		var age = 2020 - yearOfBirth;
// 		console.log(retirementAge - age + a);
// 	};
// }

// var retirementVN = retirement(66);
// retirementVN(1975);

// ----------------------------------------------------------------

// var john = {
// 	name: 'John',
// 	yearOfBirth: 1990,
// 	job: 'teacher',
// 	presentation: function (style, timeOfDay) {
// 		if (style === 'formal') {
// 			console.log(
// 				'Good ' +
// 					timeOfDay +
// 					", ladies and gentlements. I'm " +
// 					this.name +
// 					", I'm a " +
// 					this.job +
// 					", I'm a " +
// 					(2020 - this.yearOfBirth) +
// 					' years old.'
// 			);
// 		} else if (style === 'friendly') {
// 			console.log(
// 				"Hey! What's up? I'm " +
// 					this.name +
// 					", I'm a " +
// 					this.job +
// 					", I'm a " +
// 					(2020 - this.yearOfBirth) +
// 					' years old. Have a nice ' +
// 					timeOfDay +
// 					'.'
// 			);
// 		}
// 	},
// };

// john.presentation('formal', 'morning');
// var emily = {
// 	name: 'Emily',
// 	yearOfBirth: '2000',
// 	job: 'student',
// };

// john.presentation.call(emily, 'friendly', 'evening');
// john.presentation.apply(emily, ['formal', 'morning']);

// var bob = {
// 	name: 'Bob',
// 	yearOfBirth: '2001',
// 	job: 'worker',
// };
// var bobPresentation = john.presentation.bind(bob, 'formal', 'morning');
// bobPresentation();

// var bobPresentation = john.presentation.bind(bob, 'friendly');
// bobPresentation('evening');

// ----------------------------------------------------
// let i = 10;

// function foo(a) {
// 	let x = 10;
// 	this.b = x;
// 	console.log(this.a);
// }

// foo(this.b);
// ----------------------------------------------------
// var box6 = {
// 	number: 1,
// 	foo: () => {
// 		console.log(this.number);
// 	},
// };

// box6.foo();
// console.log(box6.number);

// ---------------------------------------------------
function Person(name) {
	this.name = name;
}

Person.prototype.myFriends5 = function (friends) {
	var arr = friends.map(
		function (el) {
			return this.name + ' is friend with ' + el;
		}.bind(this)
	);
	console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function (friends) {
	var arr = friends.map((el) => this.name + ' is friend with ' + el);
	console.log(arr);
};
new Person('John').myFriends6(friends);
