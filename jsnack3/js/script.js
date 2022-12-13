/*--------------------------------------TRACCIA-------------------------------------------

L'utente inserisce un numero di 4 cifre in un input. Calcola la somma di tutte le cifre che compongono il numero e stampala in pagina.
Esempio: l'utente inserisce 1234, noi stampiamo 10.

----------------------------------------------------------------------------------------*/

//1. Select input

const inputNumber = document.getElementById('number');

//2. Select Target

const targetSum = document.getElementById('sum');

//3. Select Button

const buttonCalculate = document.getElementById('calculate');

//4. Add listener to button

buttonCalculate.addEventListener('click', function(){

    //4.1 Acquire input value
    const number = inputNumber.value;
    console.log(number);
    console.log (number.toString().length);

    //4.2 Validation
    if (isNaN(number) || number.toString().length != 4){
        return
    }

    //4.3 Store the digits of number into an array
    const numberDigits = [...number];
    console.table(numberDigits);

    //4.4 Initialize sum variable
    let sum = 0
    console.log(sum);

    //4.5 Sum the digits
    for(i = 0; i < numberDigits.length; i++){
        sum += parseInt(numberDigits[i]);
        console.log(sum);
    }

    //4.6 Print in page
    
    

});