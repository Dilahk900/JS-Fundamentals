let num = process.argv.slice(2);
let sum = 0;

if(num[0] && num[1]){
    sum = parseInt(num[0]) + parseInt(num[0]);
    console.log(sum);
} else console.log('NaN');