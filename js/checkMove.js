G.CheckMove = function(player, opponent, previous_square, current_square, current_piece){
    //Reset castling status
    G.castling  = false;
    G.promotion = false;



    //update board
    G.board[previous_square] = 0;
    G.board[current_square]  = current_piece;

    if(kingCheck()){
        G.board[previous_square] = current_piece;
        G.board[current_square]  = 0;

        return false;
    }


    if(current_piece == 1 || current_piece == 11){
        //check if castled and move piece;
        if(castleCheck(previous_square, current_square)){
            G.board[G.castling[0]] = 0;
            G.board[G.castling[1]]  = G.castling[2];
        }
    }



    postMove(previous_square, current_square, current_piece);


    nextTurn();


    return true;

/////////////////////////////////////////////////////////////////////////////////////////////////////

    function attackedSquares(){

        var squares = [];

        var s = G.board.length;
        //for each square
        while(s--){

            //if square isn't empty
            if(G.board[s] > 0){

                var piece = G.board[s];
                //run through all of opponents pieces
                var p = G.pieces[opponent].length;
                while(p--){
                    //if the piece matches opponents, and their legal moves to the
                    if(piece == G.pieces[opponent][p]){
                        var moves = G.Movement(opponent,player,s, piece);
                        squares = squares.concat(moves);
                        break;
                    }
                }

            }

        }

        return _.uniq(squares);
    }






    function kingCheck() {
        //Run through all of opponents legal moves and if they attack king return false
        var attacked_squares = attackedSquares();
        var king_position = G.board.indexOf(G.pieces[player][0]);


        if(attacked_squares.indexOf(king_position) > -1) {

            console.log('King Attacked');

            return true;

        } else {

            return false;

        }

    }



    function castleCheck(prevPos, newPos){
        //Determine if the king has moved two spaces in either direction,
        //if so return new Rook position.

        //WK
        if(prevPos == 24){
            if(newPos == 22)//KS
                G.castling = [21,23, 3];//old pos, new pos, piece
                return true;

            if(newPos == 26)//QS
                G.castling = [28,25, 3];
                return true;
        }

        //BK
        if(prevPos == 94){
            if(newPos == 92)//KS
                G.castling = [91,93, 13];
                return true;

            if(newPos == 95)//QS
                G.castling = [98,96, 13];
                return true;
        }

        return false;
    }


    function postMove(prepos, pos, piece){
        //todo check if king has moved
        if(piece == G.pieces[player][0] && G.cant_castle.indexOf(piece) == -1) {
            G.cant_castle.push(piece)
        }


        //todo check if rook has moved
        if(piece == G.pieces[player][2] && G.rooks_moved.indexOf(prepos) == -1){
            G.rooks_moved.push(prepos);
        }



        //todo Check for pawn promotion
        if(piece == 6 && pos > 90){
            console.log('Promotion')
        }
        if(piece == 16 && pos < 30){
            console.log('Promotion')
        }



        //todo Check for en pasant


        return true;
    }







    function nextTurn(){
        if(G.player === 'white') {
            G.player   = 'black';
            G.opponent = 'white';
        } else {
            G.player   = 'white';
            G.opponent = 'black';
        }
    }




};
