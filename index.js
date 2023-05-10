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
	const employee = await getEmployee(employees, id);
	console.log("test :", employee)
	const emplInfo = await getSalary(salaries, employee)
	console.log(emplInfo);
}

getInfo(2);



// nivel 1
//exercise 2

async function myAsyncFunc() {
	try {
		const result = await myPromiseFunc();
		console.log(result)
	} catch (error) {
		console.error(error)
	}
}

function myPromiseFunc() {
	return new Promise((res) => {
		setTimeout(() => {
			res("the promise is resolved after 2 sec")
		}, 2000)
	})
}

myAsyncFunc()

//N2 E1

function returnDouble(number) {
	return new Promise(res => {
		setTimeout(() => { res(number * 2) }, 2000);
	});
}

returnDouble(5).then(result => {
	console.log(result);
});

async function returnSum(a, b, c) {
	const dub1 = await returnDouble(a);
	const dub2 = await returnDouble(b)
	const dub3 = await returnDouble(c)
	return dub1 + dub2 + dub3
}

returnSum(1, 2, 10).then(res => console.log(res));


