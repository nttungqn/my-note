# Javascript Note

## 1. Data types

- Primitives: undefined, null, symbol, boolean, string, Number
- Object: Arrays, Function, Date, Objects, Wrappers for Numbers, Strings and
  Boolean

## 2. DOM

> - DOM (Document Object Model) có định nghĩa là giao diện lập trình ứng dụng cho các loại văn bản HTML và XML. DOM quy định cấu trúc của văn bản HTML và XML giúp lập trình viên có thễ dễ dàng quản lý văn bản HTML và XML
> - Được gọi là "cây DOM" vì có cấu trúc giống cây có các nhánh mẹ và nhánh con và một nhánh là một đối tượng DOM

```console
// developer tools -> Tab elements
> document
```

- Sự khác biệt giữa HTML và cây DOM

| HTML                                   | DOM                                            |
| -------------------------------------- | ---------------------------------------------- |
| Được viết bởi developer                | Tạo bởi JS của trình duyệt                     |
| Trên trình duyệt HTML không thay đổi   | Có thể bị thay đổi thông qua JS                |
| Các phần tử HTML được phản ánh bởi DOM | Không phải tất cả phản tử DOM đều gắn với HTML |

## 3. Hoisting

> Hoisting là đưa phần khai báo lên phía trên top

```javascript
var x = 5;
(function () {
	var x;
	console.log(x);
	x = 10;
	console.log(x);
})();
```

Output sẽ là :

```console
undefined
10
```

## 4. Closures

> An innner function has always access to the variables and parameters of its outer function, even after the outer function has returned.

```javascript
function retirement(retirementAge) {
	var a = ' years left until retirement.';
	return function (yearOfBirth) {
		var age = 2020 - yearOfBirth;
		console.log(retirementAge - age + a);
	};
}

var retirementVN = retirement(66);
retirementVN(1975);
```

## 5. Lecture: Bind, call and apply

> - Function cũng là một object và ba phương thức **bind**, **call** and **apply** đều là prototype của function
> - **call** và **apply** đều có chức năng là gọi hàm và cho phép truyền vào object và agruments nhưng khác nhau là **call** thì truyền trực tiếp cách nhau bởi _comma_ còn **apply** thì thông qua mảng
> - **bind** thì trả về new function và truyền object và agruments giống

```javascript
var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher',
	presentation: function (style, timeOfDay) {
		if (style === 'formal') {
			console.log(
				'Good ' +
					timeOfDay +
					", ladies and gentlements. I'm " +
					this.name +
					", I'm a " +
					this.job +
					", I'm a " +
					(2020 - this.yearOfBirth) +
					' years old.'
			);
		} else if (style === 'friendly') {
			console.log(
				"Hey! What's up? I'm " +
					this.name +
					", I'm a " +
					this.job +
					", I'm a " +
					(2020 - this.yearOfBirth) +
					' years old. Have a nice ' +
					timeOfDay +
					'.'
			);
		}
	},
};

john.presentation('formal', 'morning');
var emily = {
	name: 'Emily',
	yearOfBirth: '2000',
	job: 'student',
};

john.presentation.call(emily, 'friendly', 'evening');
john.presentation.apply(emily, ['formal', 'morning']);

var bob = {
	name: 'Bob',
	yearOfBirth: '2001',
	job: 'worker',
};

var bobPresentation = john.presentation.bind(bob, 'formal', 'morning');
bobPresentation();

var bobPresentation = john.presentation.bind(bob, 'friendly');
bobPresentation('evening');
```

## 6. Immediately-invoked function expression (IIFE)

> IIFE là một dạng function expression định nghĩa một anonymous function được thực thi ngay sau khi nó được tạo ra.

```javascript
(function (name) {
	console.log(`Hello ${name}`);
})('12bit.vn');
```

- Cách khai báo này sẽ chứa hai phần chính:
  - Phần thứ nhất là (function(){}) , bạn sẽ khai báo function trong đây.
  - Phần thứ hai là () , có nhiệm vụ thực thi function ngay sau khi nó được khai báo.

## 7. Event Delegation


## 8. const, let and var

- **const** is function-scoped
- **let** and **var** are block-scoped

## 9. **this**

- Là một thuộc tính
- Một biến với giá trị là đối tượng sử dụng của hàm
- **this** luôn luôn tham chiếu (và có giá trị của) đối tượng - một đối tượng duy nhất - và nó thường được sử dụng bên trong hàm hay phương thức, mặc dù nó có thể dùng được một cách toàn cục bên ngoài hàm.
- Lưu ý rằng, nếu chúng ta sử dụng "strict" mode, **this** sẽ là undefined trong các hàm toàn cục và trong các hàm vô danh không ràng buộc đối tượng nào cả.

```javascript
// ES5 support
function Person(name){
	this.name = name;
}

Person.prototype.myFriends5 = function(friends){
	var arr = friends.map(function (el) {
		return this.name + ' is friend with ' + el;
	});
	console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends){
	var arr = friends.map((el) => this.name + ' is friend with ' + el;);
	console.log(arr);
}
new Person('John').myFriends6(friends);
```