import * as React from 'react';

const winning_scenarios = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];
function PawnButton({ id, isDisabled, setIsDisabled, position, setPosition, turn, setTurn, player, setPlayer, computer, setComputer ,setResult}) {

    // console.log(position);
    // console.log(player, computer)
    return (
        <div>
            <button
                style={{ width: 50, height: 50, fontSize: 30, fontWeight: 'bold' }}
                disabled={isDisabled[id]}
                onClick={() => {
                    DisableButton(id, isDisabled, setIsDisabled);
                    fetchPosition(id, position, setPosition, turn, setTurn, player, setPlayer, computer, setComputer);
                    checkGameStatus(player,computer,setResult);
                }}>
                {position[id]}
            </button>
        </div>

    );
}

function DisableButton(index, isDisabled, setIsDisabled) {
    var newdisabled = [...isDisabled];
    newdisabled[index] = true;
    setIsDisabled(newdisabled);
}

function fetchPosition(id, position, setPosition, turn, setTurn, player, setPlayer, computer, setComputer) {
    var newpos = [...position];
    if (turn === 'player') {
        newpos[id] = 'X';
        setPosition(newpos);
        let newmoves = [...player];
        newmoves.push(id);
        setPlayer(newmoves);
        setTurn('computer');
    }
    else {
        newpos[id] = 'O';
        setPosition(newpos);
        let newmoves = [...computer];
        newmoves.push(id);
        setComputer(newmoves);
        setTurn('player');
    }
}

function checkGameStatus(player,computer,setResult) {
  
    
    for (var i = 0; i < 8; i++) {
        var counterPlayer = 0;
        var counterComputer = 0;
       
        for (var j = 0; j < winning_scenarios[i].length; j++) {
            for (var k = 0; k < player.length; k++) {
                if (winning_scenarios[i][j] === player[k]) {
                    counterPlayer++;
                    console.log(player[k])
                }
            }

            for (var k = 0; k < computer.length; k++) {
                if (winning_scenarios[i][j] === computer[k]) {
                    counterComputer++;
                    console.log(computer[k])
                }
            }


        }
        if(counterPlayer === 3){
            alert(" X wins");
            setResult("X Wins");
            break;
        }
        else if(counterComputer === 3){
            alert(" O wins");
            setResult("O Wins");
            break;
        }
        

    }


}

export default PawnButton;
