let numbers = [2, 8, 7, 3, 2, 9, 7];
console.log('Current elements: ');
console.log(numbers);

document.getElementById('duplicate').addEventListener('click', ()=>{
    console.time('Button click ');
    let uniqueValues = [];
    let duplicate = [];
    // First approach
    // for(let i =0; i< numbers.length; i++) {
    //    for(let x = 0; x < i; x++) {
    //         if(numbers[i] == numbers[x]) {
    //             duplicate.push(numbers[i]);
    //         }
    //    }
    // }
    // Second approach
    for(let num of numbers) {
       if(!uniqueValues.includes(num)) {
            uniqueValues.push(num);
       }else {
        duplicate.push(num);
       }
    }
    console.log(duplicate);
    
    // console.profile();
    // console.time(duplicate);
    console.timeEnd('Button click ');
});

/*
https://stackoverflow.com/questions/111368/how-do-you-performance-test-javascript-code
*/

// Convert roman number to integer
function conversion(char) {
    let result = 0;
    switch(char) {
        case 'I':
            result = 1;
        break
        case 'V':
            result = 5;
        break
        case 'X':
            result = 10;
        break
        case 'L':
            result = 50;
        break
        case 'C':
            result = 100;
        break
        case 'D':
            result = 500;
        break
        case 'M':
            result = 1000;
        break
    }
    return result;
}
let romanToInt = function(s) {
    let myArr = [];
    let toUpp = s.toUpperCase();
    for(let i=0; i<toUpp.length; i++){
        myArr.push(conversion(toUpp[i]))
    }
    return myArr.reduce( (c, n)=> c+n) ;
}
// It fail on this: "MCMXCIV"
console.log(romanToInt("MCMXCIV"));