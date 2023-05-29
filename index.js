// Entrega 1.4: Async / Await

const getEmployee = require("../sprint13/getEmployee");
const getSalary = require("../sprint13/getSalary")


let employees = [{
	id: 1,
	name: 'Linux Torvalds'
}, {
	id: 2,
	name: 'Bill Gates'
}, {
	id: 3,
	name: 'Jeff Bezos'
}];

let salaries = [{
	id: 1,
	salary: 4000
}, {
	id: 2,
	salary: 1000
}, {
	id: 3,
	salary: 2000
}];

//nivell 1
//exercise 1

const getInfo = async (id) => {
	if (typeof id !== "number" || id === 0 || !id) { throw new Error("id must be a number") }
	const employee = await getEmployee(employees, id);
	const emplInfo = await getSalary(salaries, employee)
	return emplInfo
}

getInfo(1).then(res => console.log(res))

// nivel 1
//exercise 2
const { myAsyncFunc } = require("./asyncFunc")

myAsyncFunc().then(res => console.log(res))

//N2 E1

function returnDouble(number) {
	return new Promise(res => {
		setTimeout(() => { res(number * 2) }, 2000);
	});
}

returnDouble(2).then(result => {
	console.log(result);
});

async function returnSum(a, b, c) {
	if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") throw new Error("parameters must be of a primite value number")
	const dub1 = await returnDouble(a);
	const dub2 = await returnDouble(b)
	const dub3 = await returnDouble(c)
	return dub1 + dub2 + dub3
}

returnSum(1, 2, 10).then(res => console.log(res));

// N3 E1

returnSum([1, 2, 10]).then(res => console.log(res));


