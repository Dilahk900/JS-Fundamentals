let number_of_argument = process.argv.slice(2);
let i = 0;

if(!number_of_argument[0]){
    console.log('No arguments');
}else
while(number_of_argument[i]){
    console.log(number_of_argument[i]);
    i ++;
} 

