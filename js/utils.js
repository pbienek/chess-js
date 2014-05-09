G.Utils = {


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
                        var moves = G.Movement(sq, state, opponent);
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
    }
};



function clone(obj) {
    var outputArr = new Array();
    for (var i in obj) {
        outputArr[i] = typeof (obj[i]) == 'object' ? this.clone(obj[i]) : obj[i];
    }
    return outputArr;
}