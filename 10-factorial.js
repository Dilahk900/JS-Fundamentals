num = process.argv.slice(2);
let sum = 0;

for(let i = 0; i < num[0]; i++){
    sum = sum + i;
}

console.log(sum);