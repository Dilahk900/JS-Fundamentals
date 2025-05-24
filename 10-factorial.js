num = process.argv.slice(2);


function fact(){

let sum = 1;

if(Number(num[0])){
    for(let i = 1; i <= num[0]; i++){
    sum = sum * i;
    }
console.log(sum);
} else console.log('No argument');

    
}








console.log(fact());