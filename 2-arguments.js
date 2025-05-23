let number_of_argument = process.argv.length - 2;

if(number_of_argument == 0){
    console.log('No argument');
} else
if(number_of_argument == 1){
    console.log('Argument found');
} else console.log('Arguments found');