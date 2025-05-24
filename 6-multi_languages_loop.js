let languages = process.argv.slice(2);

languages[0] = 'C is fun';
languages[1] = 'Python is cool';
languages[2] = 'JavaScript is amazing';

for(let i = 0; i <= 2; i++){
    console.log(languages[i]);
}