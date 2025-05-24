num = process.argv.slice(2);


function fact(){

let sum = 0;
for(let i = 0; i < num[0]; i++){
    sum = sum + i;
}
    return(sum);
}








console.log(fact());