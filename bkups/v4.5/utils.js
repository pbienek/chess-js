G.Utils = {

    boardHash : function(board){
        var hash = '';
        var i    = board.length;

        while(i--){
            hash += board[i];
        }

        return hash;
    },



    attackedSquares : function (state) {
        var player   = state.player;
        var board    = state.board;
        var opponent = G.Utils.opponent(player);
        var squares  = [];

        var sq = board.length;
        //for each square
        while (sq--) {

            //if square isn't empty
            if (board[sq] > 0) {

                var piece = board[sq];
                //run through all of opponents pieces
                var p = G.pieces[opponent].length;
                while (p--) {
                    //if the piece matches opponents, and their legal moves to the
                    if (piece == G.pieces[opponent][p]) {
                        var moves = G.Movement(sq, state.board, opponent);
                        squares = squares.concat(moves);
                        break;
                    }
                }
            }
        }

        return _.uniq(squares);
    },



    opponent : function(player){
        if(player === 'white') {
            return 'black';
        } else {
            return 'white';
        }
    },



    cloneState : function(state){

        var new_object = {
            player      : state.player,
            board       : state.board.slice(0),
            scores      : state.scores,
            castling    : state.castling,
            cant_castle : state.cant_castle.slice(0),
            rooks_moved : state.rooks_moved.slice(0),
            check       : state.check,
            check_mate  : state.check_mate,
            stale_mate  : state.stale_mate,
            promotion   : state.promotion,
            legal_moves      : state.legal_moves.slice(0),
            attacked_squares : state.attacked_squares.slice(0),
            previous_move : {
                ps: state.previous_move.ps,
                cs: state.previous_move.cs,
                piece: state.previous_move.piece
            }

        };

        return new_object;
    }


};



function clone(obj) {
    var outputArr = new Array();
    for (var i in obj) {
        outputArr[i] = typeof (obj[i]) == 'object' ? this.clone(obj[i]) : obj[i];
    }
    return outputArr;
}