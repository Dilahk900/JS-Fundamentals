let num = process.argv.slice(2);
let i = 0;

if(Number.isInteger(parseInt(num[0]))){
    do{
        for (let y = 0; y < num[0]; y++){
            process.stdout.write('X');
        }
        console.log('');
        i++;
    }while (i < num[0]);
}else console.log('Missing size');
    


