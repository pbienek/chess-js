G.checkMove = function(previous_square, current_square, state){


    var player           = state.player;
    var opponent         = G.Utils.opponent(player);
    var board            = state.board;
    var current_piece    = state.board[previous_square];


    var NEW_GAME_STATE = G.Utils.cloneState(state);

    NEW_GAME_STATE.castling = false;
    NEW_GAME_STATE.previous_move = {
        ps    : previous_square,
        cs    : current_square,
        piece : state.board[previous_square]
    };



//    {
//        board       : board.slice(0),
//        castling    : false,
//        c_castle    : clone(G.cant_castle),
//        rooks_moved : clone(G.rooks_moved),
//        promotion   : false,
//        players     : nextTurn(player)
//    };


//    var NEW_GAME_STATE = {
//        player      : opponent,
//        board       : board,
//        scores      : state.scores,
//        castling    : false,
//        cant_castle : state.cant_castle,
//        rooks_moved : state.rooks_moved,
//        check      : false,
//        check_mate : false,
//        stale_mate : false,
//        promotion  : false,
//        legal_moves      : [],
//        attacked_squares : [],
//        previous_move : {
//            ps: previous_square,
//            cs: current_square,
//            piece: state.board[previous_square]
//        }
//    };



    //update NEW_GAME_STATE.board
    NEW_GAME_STATE.board[previous_square] = 0;
    NEW_GAME_STATE.board[current_square]  = current_piece;
    NEW_GAME_STATE.attacked_squares = G.Utils.attackedSquares(NEW_GAME_STATE);


    if(kingCheck()){

        NEW_GAME_STATE.board[previous_square] = current_piece;
        NEW_GAME_STATE.board[current_square]  = 0;

        return false;
    }


    if(current_piece == 1 || current_piece == 11){

        //check if castled and move piece;
        if(castleCheck(previous_square, current_square)){
            NEW_GAME_STATE.board[NEW_GAME_STATE.castling[0]] = 0;
            NEW_GAME_STATE.board[NEW_GAME_STATE.castling[1]] = NEW_GAME_STATE.castling[2];
        }
    }


    postMove(previous_square, current_square, current_piece);
    NEW_GAME_STATE.player = opponent;

    return NEW_GAME_STATE;

/////////////////////////////////////////////////////////////////////////////////////////////////////

//    function attackedSquares(){
//
//        var squares = [];
//
//        var s = NEW_GAME_STATE.board.length;
//        //for each square
//        while(s--){
//
//            //if square isn't empty
//            if(NEW_GAME_STATE.board[s] > 0){
//
//                var piece = NEW_GAME_STATE.board[s];
//                //run through all of opponents pieces
//                var p = G.pieces[opponent].length;
//                while(p--){
//                    //if the piece matches opponents, and their legal moves to the
//                    if(piece == G.pieces[opponent][p]){
//                        var moves = G.Movement(opponent,player,s, piece, NEW_GAME_STATE.board);
//                        squares = squares.concat(moves);
//                        break;
//                    }
//                }
//
//            }
//
//        }
//
//        return _.uniq(squares);
//    }






    function kingCheck() {
        //Run through all of opponents legal moves and if they attack king return false
        var king_position    = NEW_GAME_STATE.board.indexOf(G.pieces[player][0]);


        //console.log(attacked_squares)

        return (NEW_GAME_STATE.attacked_squares.indexOf(king_position) > -1);
    }



    function castleCheck(prevPos, newPos){
        //Determine if the king has moved two spaces in either direction,
        //if so return new Rook position.

        //WK
        if(prevPos == 24){
            if(newPos == 22) {//KS
                NEW_GAME_STATE.castling = [21, 23, 3];//old pos, new pos, piece
                return true;
            }

            if(newPos == 26){//QS
                NEW_GAME_STATE.castling = [28,25, 3];
                return true;
            }
        }

        //BK
        if(prevPos == 94){
            if(newPos == 92) {//KS
                NEW_GAME_STATE.castling = [91, 93, 13];
                return true;
            }

            if(newPos == 96 && state.attacked_squares.indexOf(96) == -1) {//QS
                NEW_GAME_STATE.castling = [98, 95, 13];
                return true;
            }
        }

        return false;
    }


    function postMove(prepos, pos, piece){



        //check if king has moved
        if(piece == G.pieces[player][0] && state.cant_castle.indexOf(piece) == -1) {
            NEW_GAME_STATE.cant_castle.push(piece)
        }


        //check if rook has moved
        if(piece == G.pieces[player][2] && state.rooks_moved.indexOf(prepos) == -1){

            //console.log('Rooks Moved', piece);
            NEW_GAME_STATE.rooks_moved.push(prepos);
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

