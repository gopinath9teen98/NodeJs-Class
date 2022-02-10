const args = process.argv
console.log(args);
if(args[2]==='add'){
    console.log('sum');
}
else if(args[2]==='delete'){
    console.log('Delete');
}
else if(args[2]==='prod'){
    console.log('products');
}


for(let i = 0; i < process.argv.length; ++i) {
    console.log(`index ${i} argument -> ${process.argv[i]}`);
}



// To trim first 2 elements
const arg = process.argv.slice(2);

arg[1] = Number(arg[1]);
arg[2] = Number(arg[2]);

switch (arg[0]) {
	case '+':
		console.log(`Result of ${arg[1]}
		+ ${arg[2]} = ${arg[1] + arg[2]}`);
		break;

	case '*':
		console.log(`Result of ${arg[1]}
		* ${arg[2]} = ${arg[1] * arg[2]}`);
		break;

	case '-':
		console.log(`Result of ${arg[1]}
		- ${arg[2]} = ${arg[1] - arg[2]}`);
		break;

	case '/':
		if (arg[2] == 0) {
			console.log(
				'cannot be divided by zero!!');
		} else {
			console.log(`Result of ${arg[1]}
			/ ${arg[2]} = ${arg[1] / arg[2]}`);
		}
		break;

	case '%':
		if (arg[2] == 0) {
			console.log(
				'cannot be divided by zero!!');
		} else {
			console.log(`Result of ${arg[1]}
			% ${arg[2]} = ${arg[1] % arg[2]}`);
		}
		break;

	default: console.log(
		`operation cannot be performed!!`);
}
