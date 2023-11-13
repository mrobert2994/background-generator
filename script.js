// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");
// var button = document.querySelector(".button")

// function setGradient(){
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// function getRandomColor(){
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// // color1.addEventListener("input", setGradient);
// color1.value = getRandomColor()
// color2.value = getRandomColor()
// // color2.addEventListener("input", setGradient);

// button.addEventListener("click", getRandomColor)


//*****************************************************************
//scope

// const player = "boby";
// let experience = 100;
// let wizzardlvl = false;

// if(experience > 90){
// 	let wizzardlvl = true;
// }


//destructuring

// const obj = {
// 	player : "bobby",
// 	experience : 100,
// 	wizzardlvl : false
// }

// const player = obj.player;
// const experience = obj.experience;
// let wizzardlvl = obj.wizzardlvl;

// const { player, experience } = obj;
// let {wizzardlvl} = obj;



//Template strig & default arguments


// const name = "sally";
// const age = 34;
// const pet = "horse";

// function greet(name='', age=30, pet='cat')
// {
// 	return `hello ${name} you seem to be ${age-10} and you have a nice &{pet`;
// }



//arrow functions

// function add(a,b) {
// 	return a+b;
// }

// const add = (a, b) => a + b;



//advanced functions

// const first = () => {
// 	const greet = "Hi";
// 	const second = () => {
// 		alert(greet);
// 	}
// 	return second;
// }

// const newFunc = first();
// newFunc();

//curryng
// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// curriedMultiply(3);
// const multiplyBy5 = curriedMultiply(5);


// //compose
// const compose = (f, g) => (a) = f(g(a));
// const sum = (num) => num + 1;

// compose(sum, sum)(5);

// avoiding side efects and functional purity
// var a = 1;
// function b(){
// 	 a = 2;
// }



///////////////////////Advanced arrays //map, filter, reduce
// const double = [];
// const array = [1,2, 10, 16];
// array.forEach((num) =>{
// 	double.push(num * 2);
// })

// console.log(newarray);

//map
// const array2 = [1,2,3,4,6,7];
// const mapArray = array2.map(num => num * 2);

// console.log("map", mapArray);

// //Filter
// const filterArray = array2.filter(num =>{
// 	return num > 5 
// })

// console.log("filter", filterArray);


// //Reduce
// const reduceArray = array2.reduce((accumulator, num) =>{
// 	return accumulator + num

// }, 10)

// console.log("reduce", reduceArray);



///////////////////////////////ADvanced objects //reference type, context, instantiation

//context vs scope
//scope
function b() {
	let a = 4;
}

const obj4 = {
	a: function() {
		console.log(this);
	}
}

//instantiation
class Player {
	constructor(name, type){
		console.log('Player', this);
		this.name =  name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type} `);
	}
}


class Wizzard extends Player {
	constructor(name, type) {
		console.log('Wizzard',this);
		super(name, type);
	}
	play() {
		console.log(`Weeeee I'm a ${this.type}`);
	}
}

const wizzard = new Wizzard('Shelly', 'Healer');
const wizzard2 = new Wizzard('Rock', 'Elf');



//pass by Referecnce/ by value

let obj1 = {
	name:'Yoa',
	password: '123'
};
let obj2 = obj1;
obj2.password = 'easypeasy';
console.log(obj1);
console.log(obj2);



var c = [1,2,3,4,5];
var d = [].concat(c);
d.push(12312124124);

console.log(c);
console.log(d);