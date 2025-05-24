let num = process.argv.slice(2);


function fact(){

    let sum = 1;
    let result = "";

    if(Number(num[0])){
        for(let i = 1; i <= num[0]; i++){
        sum = sum * i;
        }
        
    } else sum = 1;

    return(sum);
}








console.log(fact());