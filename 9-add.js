let num = process.argv.slice(2);
let sum = 0;

if(Number(num[0]) && Number(num[1]) && isFinite(num[0]) && isFinite(num[1])){
    sum = Number(num[0]) + Number(num[1]);
    console.log(sum);
} else console.log('NaN');