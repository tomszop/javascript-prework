
{const playGame=function(playerInput){ 
    clearMessages();
    const getMoveName=function(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        }
        if(argMoveId == 2){
            return 'papier';
        }
        if(argMoveId == 3){
        return 'nożyce';
        }
    }
    const displayResult=function(argComputerMove, argPlayerMove){
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
    }
    
    //Ruch Komputera

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    
    const argComputerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + argComputerMove);

    //Ruch człowieka

    const argPlayerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + argPlayerMove);
    displayResult(argComputerMove, argPlayerMove);
}
document.getElementById('play-rock').addEventListener('click', function (){      
    playGame(1);    
  }); 
  document.getElementById('play-paper').addEventListener('click', function (){   
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){ 
    playGame(3);
  });
}
