function initialize() {
    //will act as DB for the tic-tac-toe board... can check winner.
    let board = new Array(9);
    //keeps track of X and O
    let xo = 0;

    $('.square').on('click', () => {
        //should keep track of interchanging X and O
        if (xo % 2 === 0) {
            board[$(event.target).val()] = "X";
            $(event.target).text("X");
            $(event.target).css("background-color", randomColors());
            //checks winner onClick
            winningCombo();
            xo += 1;
        } else if (xo % 2 !== 0) {
            board[$(event.target).val()] = "O";
            $(event.target).text("O");
            $(event.target).css("background-color", randomColors());
            //checks winner onClick
            winningCombo();
            xo += 1;
        }
        // console.log(board)
    })

    function winningCombo() {
        if (board[0] === 'X' && board[0] === board[1] && board[1] === board[2]) { $('#winner').text('X won!'); alert('X won!'); }
        else if (board[0] === 'O' && board[0] === board[1] && board[1] === board[2]) { $('#winner').text('O won!'); alert('O won!'); }

        else if (board[3] === 'X' && board[3] === board[4] && board[4] === board[5]) { $('#winner').text('X won!'); alert('X won!'); }
        else if (board[3] === 'O' && board[3] === board[4] && board[4] === board[5]) { $('#winner').text('O won!'); alert('O won!'); }

        else if (board[6] === 'X' && board[6] === board[7] && board[7] === board[8]) { $('#winner').text('X won!'); alert('X won!'); }
        else if (board[6] === 'O' && board[6] === board[7] && board[7] === board[8]) { $('#winner').text('O won!'); alert('O won!'); }

        else if (board[0] === 'X' && board[0] === board[3] && board[3] === board[6]) { $('#winner').text('X won!'); alert('X won!'); }
        else if (board[0] === 'O' && board[0] === board[3] && board[3] === board[6]) { $('#winner').text('O won!'); alert('O won!'); }

        else if (board[1] === 'X' && board[1] === board[4] && board[4] === board[7]) { $('#winner').text('X won!'); alert('X won!'); }
        else if (board[1] === 'O' && board[1] === board[4] && board[4] === board[7]) { $('#winner').text('O won!'); alert('O won!'); }

        else if (board[2] === 'X' && board[2] === board[5] && board[5] === board[8]) { $('#winner').text('X won!'); alert('X won!'); }
        else if (board[2] === 'O' && board[2] === board[5] && board[5] === board[8]) { $('#winner').text('O won!'); alert('O won!'); }

        else if (board[0] === 'X' && board[0] === board[4] && board[4] === board[8]) { $('#winner').text('X won!'); alert('X won!'); }
        else if (board[0] === 'O' && board[0] === board[4] && board[4] === board[8]) { $('#winner').text('O won!'); alert('O won!'); }

        else if (board[2] === 'X' && board[2] === board[4] && board[4] === board[6]) { $('#winner').text('X won!'); alert('X won!'); }
        else if (board[2] === 'O' && board[2] === board[4] && board[4] === board[6]) { $('#winner').text('O won!'); alert('O won!'); }

        else { console.log('keep playing...') }
    }

    //random color array for random color generation
    function randomColors() {
        let colorDex = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let result = "#";
        for (let i = 0; i < 6; i += 1) {
            result += colorDex[Math.floor((Math.random() * colorDex.length))];
        }
        return result;
    }

}

$(document).ready(initialize)