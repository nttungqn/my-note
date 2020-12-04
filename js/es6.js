class Element {
	constructor(name, buildYear) {
		this.name = name;
		this.buildYear = buildYear;
	}
}

class Park extends Element {
	constructor(name, buildYear, numTrees, area) {
		super(name, buildYear);
		this.numTrees = numTrees;
		this.area = area;
	}

	treeDensity() {
		const density = this.numTrees / this.area;
		console.log(`${this.name} has a tree density of ${density} trees per square km.`);
	}
}

class Street extends Element {
	constructor(name, buildYear, length, size = 3) {
		super(name, buildYear);
		this.length = length;
		this.size = size;
	}

	classifyStreet() {
		const classification = new Map();
		classification.set(1, 'tiny');
		classification.set(2, 'small');
		classification.set(3, 'normal');
		classification.set(4, 'big');
		classification.set(5, 'huge');

		console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
	}
}

function calc(arr) {
	const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
	return [sum, sum / arr.length];
}

const allParks = [
	new Park('Green Park', 1990, 1000, 30),
	new Park('National Park', 1980, 500, 50),
	new Park('Oak Park', 1995, 1100, 20),
];

const allStreets = [
	new Street('Ocean Avenue', 1999, 50, 1),
	new Street('Evergreen Street', 2008, 1000, 2),
	new Street('4th Street', 2015, 500),
	new Street('Sunset Boulevard', 1982, 200, 4),
];

function reportParks(p) {
	console.log('-----PARKS REPORT-----');

	p.forEach((el) => el.treeDensity());

	const ages = p.map((el) => new Date().getFullYear() - el.buildYear);
	const [totalAges, avgAge] = calc(ages);
	console.log(`Our ${p.length} parks have an average age of ${avgAge} years`);

	const i = p.map((el) => el.numTrees).findIndex((el) => el >= 1000);
	console.log(`${p[i].name} has more 1000 than trees`);
}

function reportStreets(s) {
	console.log('-----STREETS REPORT-----');
	const [totalLength, avgLength] = calc(s.map((el) => el.length));

	console.log(
		`Our ${s.length} streets have a total length of ${totalLength} km, with an average age of ${avgLength} km.`
	);

	s.forEach((el) => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
