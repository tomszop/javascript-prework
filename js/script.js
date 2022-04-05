function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}



//Ruch Komputera

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

if(randomNumber == 2){
    computerMove = 'papier';
  }

if(randomNumber == 3){
computerMove = 'nozyce';
}

printMessage('Mój ruch to: ' + computerMove);

//Ruch człowieka

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

if(playerInput == '2'){
    playerMove = 'papier';
  }

if(playerInput == '3'){
playerMove = 'nozyce';
}

printMessage('Twój ruch to: ' + playerMove);

//Wynik


if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Wygrałeś!');
  }

  if( computerMove == 'kamień' && playerMove == 'nozyce'){
    printMessage('Przegrałeś!');
  }

  if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  }

  if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  }

  if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrałeś!');
  }

  if( computerMove == 'papier' && playerMove == 'nozyce'){
    printMessage('Wygrałeś');
  }
  
  if( computerMove == 'nozyce' && playerMove == 'papier'){
    printMessage('Przegrałeś!');
  }

  if( computerMove == 'nozyce' && playerMove == 'kamień'){
    printMessage('Wygrałeś!');
  }

  if( computerMove == 'nozyce' && playerMove == 'nozyce'){
    printMessage('Remis!');
  }

  if( computerMove == 'nozyce' && playerMove == 'nieznany ruch'){
    printMessage('nieznany ruch!');
  }

  if( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
    printMessage('nieznany ruch!');
  }

  if( computerMove == 'papier' && playerMove == 'nieznany ruch'){
    printMessage('nieznany ruch!');
  }