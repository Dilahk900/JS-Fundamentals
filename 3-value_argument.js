let number_of_argument = process.argv.slice(2);
if(number_of_argument.length - 2 >= 0){
    for(let i = 0; i <= process.argv.length - 2; i++){
        console.log(number_of_argument[i]);
    }
} else console.log('No argument');