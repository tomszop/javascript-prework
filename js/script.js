
//funkcje

function getMoveName(argMoveId){
    
    if(argMoveId == 1){
      return 'kamień';
    }
    if(argMoveId == 2){
        return 'papier';
    }
    if(argMoveId == 3){
    return 'nożyce';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }


  function displayResult(argComputerMove, argPlayerMove){

    console.log('move:', argComputerMove, argPlayerMove);
    
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Wygrałeś!');
        }

    if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Przegrałeś!');
    }
  
    if( argComputerMove == argPlayerMove ){
      printMessage('Remis!');
    }
  
    if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Przegrałeś!');
    }
  
    if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Wygrałeś');
    }
    
    if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Przegrałeś!');
    }
  
    if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Wygrałeś!');
    }
  
    if( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
      printMessage('nieznany ruch!');
    }
  
    if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
      printMessage('nieznany ruch!');
    }
  
    if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
      printMessage('nieznany ruch!');
    }
      
  }

  
//Ruch Komputera

 let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);


let argComputerMove = getMoveName(randomNumber);

/*
let argComputerMove = 'nieznany ruch';

if(randomNumber == 1){
  argComputerMove = 'kamień';
}

if(randomNumber == 2){
    argComputerMove = 'papier';
  }

if(randomNumber == 3){
argComputerMove = 'nożyce';
}
*/

printMessage('Mój ruch to: ' + argComputerMove);

//Ruch człowieka

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/*
if(playerInput == '1'){
  argPlayerMove = 'kamień';
}

if(playerInput == '2'){
    argPlayerMove = 'papier';
  }

if(playerInput == '3'){
argPlayerMove = 'nożyce';
}
*/
printMessage('Twój ruch to: ' + argPlayerMove);

//Wynik

/*
if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Wygrałeś!');
  }

  if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Przegrałeś!');
  }

  if( argComputerMove == argPlayerMove ){
    printMessage('Remis!');
 
  }

  if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrałeś!');
  }

  if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Wygrałeś');
  }
  
  if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Przegrałeś!');
  }

  if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Wygrałeś!');
 
  }

  if( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
    printMessage('nieznany ruch!');
  }

  if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
    printMessage('nieznany ruch!');
  }

  if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
    printMessage('nieznany ruch!');
  }
*/

displayResult(argComputerMove, argPlayerMove);
  
