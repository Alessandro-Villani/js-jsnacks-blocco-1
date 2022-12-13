/*------------------------------------TRACCIA---------------------------------------------

Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt). Il programma stampa la somma di tutti i numeri inseriti.

----------------------------------------------------------------------------------------*/

//1. Select Targets
const targetAddends = document.getElementById('addends');
const targetSum = document.getElementById('sum');

//2. Set Array for number storage
const numbers = [];

//3. Ask User 10 numbers and store them into Array

for(i = 0; numbers.length < 10; i++){
    //3.1 ask user a number and store it into variable for validation
    const number = parseInt(prompt('Inserisci un numero').trim());
    console.log(number);
    //3.2 Validation
    if(isNaN(number)){
        alert('Dato non valido');
    }
    //3.3 If number is valid, store into Array
    else {
        numbers.push(number);
        console.table(numbers);
    }
}

//4. Initialize sum variable

let sum = 0;
let addends = '';

//5. Sum every element stored into Array in sum variable

for(i=0; i < numbers.length; i++){
    sum += numbers[i];
    console.log(sum);
    addends += i < numbers.length - 1 ? `${numbers[i]} + ` : `${numbers[i]} =`;
    console.log(addends);
    console.log(addends.type);

}

//6. Print sum on page

targetAddends.innerText = addends;
console.log(addends);
targetSum.innerText = 'La somma dei numeri inseriti è: ' + sum;