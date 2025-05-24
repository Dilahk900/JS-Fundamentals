is_number = process.argv.slice(2);

if(!is_number[0]){
    console.log('No argument');
} else if(is_number[0]){

    if(Number.isInteger(parseInt(is_number[0]))){
        console.log('My number: ' + parseInt(is_number[0]));
    }else console.log('Not a number');
}