//DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');
var mypassword;//global var to be access with the functionsand use with the local var
const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase='abcdefghijklmnopqrstuvwxyz';
const symbols='~!@#$%^&*()_+-=';
const number='1234567890';


generateEl.addEventListener('click', ()=> {
	mypassword='';
	let passlength=lengthEl.value;
	uppercaseEl.checked ? mypassword+=upperCase:''; // condition ? exprIfTrue : exprIfFalse =if else condition
	console.log(mypassword);
	lowercaseEl.checked?mypassword+=lowerCase:'';
	symbolsEl.checked?mypassword+=symbols:'';
	numbersEl.checked? mypassword+=number:'';
		console.log(typeof mypassword)
	resultEl.value=generatePass(passlength,mypassword)
	});
	function generatePass(passlength,mypassword){
		let Result='';
		for(var i=0;i<passlength;i++){
			Result += mypassword.charAt(Math.floor(Math.random() * 
			mypassword.length));		}
			return Result
		}
		clipboard.addEventListener('click',()=>{
			navigator.clipboard.writeText(resultEl.value);
			alert('your password has been copied:'+resultEl.value)

		})

