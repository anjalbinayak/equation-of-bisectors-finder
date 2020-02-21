




let a1 = document.querySelector("#a1");
let b1 = document.querySelector("#b1");
let c1 = document.querySelector("#c1");
let a2 = document.querySelector("#a2");
let b2 = document.querySelector("#b2");
let c2 = document.querySelector("#c2");

let result = document.querySelector("#result");

let calculate = document.querySelector("#calculate");

calculate.addEventListener("click", function(){

	let a1Val = parseInt(a1.value) || 1;
	let b1Val = parseInt(b1.value) || 1;
	let c1Val = parseInt(c1.value) || 0;

	let a2Val = parseInt(a2.value) || 1;
	let b2Val = parseInt(b2.value) || 1;
	let c2Val = parseInt(c2.value) || 0;

	let equation1 = [a1Val , b1Val , c1Val];
	let equation2 = [a2Val , b2Val , c2Val];

	let slope1 = 0;
	let slope2 = 0;
	let bisector1 = 0;
    let bisector2 = 0;


	bisector1 = solve(multiply(Math.sqrt(a2Val*a2Val + b2Val*b2Val), equation1), multiply(Math.sqrt(a1Val*a1Val+b1Val*b1Val), equation2));
	bisector2 = solve(multiply(Math.sqrt(a2Val*a2Val + b2Val*b2Val), equation1), multiply(Math.sqrt(a1Val*a1Val+b1Val*b1Val), invertSign(equation2)));

	slope1 = Math.tan((-bisector1[0]/bisector1[1]) * Math.PI/180);
	slope2 = Math.tan((-bisector2[0]/bisector2[1])* Math.PI/180);

	console.log(slope1 , slope2);

	result.innerHTML = buildEquation(bisector1) + "<br>" + buildEquation(bisector2);;
	


});



function buildEquation(equation)
{
	let a = equation[0] ||  1;
	let b = equation[1] ||  1;
	let c = equation[2] ||  0;

	b =  (b<0) ? b : "+"+b;
	c =  (c<0) ? c : "+"+c;

	return `${a}x ${b}y ${c} = 0`;
}