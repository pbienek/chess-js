G.checkMove = function(player, opponent, previous_square, current_square, board){



    var current_piece = board[previous_square];

    var new_game_state = {
        board       : board.slice(0),
        castling    : false,
        c_castle    : [],
        rooks_moved : [],
        promotion   : false,
        players     : nextTurn(player)
    };




    //update new_game_state.board
    new_game_state.board[previous_square] = 0;
    new_game_state.board[current_square]  = current_piece;

    if(kingCheck()){
        new_game_state.board[previous_square] = current_piece;
        new_game_state.board[current_square]  = 0;

        return false;
    }


    if(current_piece == 1 || current_piece == 11){
        //check if castled and move piece;
        if(castleCheck(previous_square, current_square)){
            new_game_state.board[new_game_state.castling[0]] = 0;
            new_game_state.board[new_game_state.castling[1]]  = new_game_state.castling[2];

            //console.log('Castling')
        }
    }



    postMove(previous_square, current_square, current_piece);


    return new_game_state;

/////////////////////////////////////////////////////////////////////////////////////////////////////

    function attackedSquares(){

        var squares = [];

        var s = new_game_state.board.length;
        //for each square
        while(s--){

            //if square isn't empty
            if(new_game_state.board[s] > 0){

                var piece = new_game_state.board[s];
                //run through all of opponents pieces
                var p = G.pieces[opponent].length;
                while(p--){
                    //if the piece matches opponents, and their legal moves to the
                    if(piece == G.pieces[opponent][p]){
                        var moves = G.Movement(opponent,player,s, piece, new_game_state.board);
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
        var king_position = new_game_state.board.indexOf(G.pieces[player][0]);


        if(attacked_squares.indexOf(king_position) > -1) {

            //console.log('King Attacked');

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
            if(newPos == 22) {//KS
                new_game_state.castling = [21, 23, 3];//old pos, new pos, piece
                return true;
            }

            if(newPos == 26){//QS
                new_game_state.castling = [28,25, 3];
                return true;
            }
        }

        //BK
        if(prevPos == 94){
            if(newPos == 92) {//KS
                new_game_state.castling = [91, 93, 13];
                return true;
            }

            if(newPos == 96) {//QS
                new_game_state.castling = [98, 95, 13];
                return true;
            }
        }

        return false;
    }


    function postMove(prepos, pos, piece){
        //check if king has moved
        if(piece == G.pieces[player][0] && G.cant_castle.indexOf(piece) == -1) {
            new_game_state.c_castle.push(piece)
        }


        //check if rook has moved
        if(piece == G.pieces[player][2] && G.rooks_moved.indexOf(prepos) == -1){

            //console.log('Rooks Moved', piece);
            new_game_state.rooks_moved.push(prepos);
        }



        //todo Check for pawn promotion
        if(piece == 6 && pos > 90){
            //console.log('Promotion')
        }
        if(piece == 16 && pos < 30){
            //console.log('Promotion')
        }



        //todo Check for en pasant


        return true;
    }







    function nextTurn(player){
        if(player === 'white') {
            return {
                player   : 'black',
                opponent : 'white'
            }

        } else {
            return {
                player   : 'white',
                opponent : 'black'
            }
        }
    }




};

