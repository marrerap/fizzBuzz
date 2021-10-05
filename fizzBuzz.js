const prompt = require('prompt-sync')({sigint: true});

const answer = parseInt(prompt('Please enter a number you would like to be FizzBuzzed: '));

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
    }else if (i % 5 === 0) {
        console.log('buzz')
    }else if (i % 3 === 0 ) {
        console.log('fizz')
    }else {
        console.log(i)
    }
    
}



