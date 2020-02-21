


/*
	equation is a array 
	coeff of x is the first parameter
	coeff of y is the second parameter
	constant is the third parameter
*/
function solve(equation1 , equation2)
{
	let a1 = equation1[0] || 1;
	let b1 = equation1[1] || 1;
	let c1 = equation1[2] || 0;

	let a2 = equation2[0] || 1;
	let b2 = equation2[1] || 1;
	let c2 = equation2[2] || 0;

	coeffOfX = a1 - a2;
	coeffOfY = b1 - b2;
	constantOfEquation = c1 - c2;

	return [coeffOfX , coeffOfY , constantOfEquation];
}

function invertSign(equation)
{
	let a = equation[0] || 1;
	let b = equation[1] || 1;
	let c = equation[2] || 0;

	 a = -1 * a;
	 b = -1 * b;
	 c = -1 * c;

	 return [a , b , c];
}


function multiply(multiplier , equation)
{
	let a = equation[0] || 1;
	let b = equation[1] || 1;
	let c = equation[2] || 0;

	a = multiplier * a;
	b = multiplier * b;
	c = multiplier * c;

	return [a , b , c];
}