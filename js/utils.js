/**
 * Created by Peter on 07/05/2014.
 */
G.Utils = {


    attackedSquares: function (board, player, opponent) {

        var squares = [];

        var s = board.length;
        //for each square
        while (s--) {

            //if square isn't empty
            if (board[s] > 0) {

                var piece = board[s];
                //run through all of opponents pieces
                var p = G.pieces[opponent].length;
                while (p--) {
                    //if the piece matches opponents, and their legal moves to the
                    if (piece == G.pieces[opponent][p]) {
                        var moves = G.Movement(opponent, player, s, piece, board);
                        squares = squares.concat(moves);
                        break;
                    }
                }

            }

        }

        return _.uniq(squares);
    }
};