/*--------------------------------------TRACCIA-------------------------------------------

In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, l’utente inserisce il suo nome tramite un input. Comunicagli se può partecipare o no alla festa.

----------------------------------------------------------------------------------------*/

//1. Add invited Array

const invited = ['Nick Carraway', 'Daisy Buchanan', 'Tom Buchanan', 'Myrtle Wilson'];

//2. Select input

const inputName = document.getElementById('name');

//3. Select target

const targetMessage = document.getElementById('message');

//4. Select button

const buttonCheck = document.getElementById('check');

//5. Add listener to button
buttonCheck.addEventListener('click', function(){

    //5.1 Set flag
    let isInvited = false;

    //5.2 Store name into variable
    const userName = inputName.value;
    console.log(userName);

    //5.3 For every item in the array and until flag is false...
    for(i = 0; i < invited.length && !isInvited; i++){
        //5.3.1 Check if input is present
        if(userName === invited[i]){
            isInvited = true;
            console.log(isInvited);
        }
        console.log(isInvited);
    }

    
});

