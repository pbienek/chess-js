G.Search = function(state){
    "use strict";

    var board              = state.board;
    var player             = state.player;
    var opponent           = G.Utils.opponent(player);
    var player_pieces      = findPieces(player);
    var possible_positions = boardPositions();
    var attacked_sqs       = state.attacked_squares;

    return possible_positions;




    //Find positions of all players pieces
    function findPieces(player){

        var pieces = [];
        var i = board.length;

        while(i--){
            if(G.pieces[player].indexOf(board[i]) > -1){
                var move_info = {
                    pos   : i,
                    piece :board[i],
                    moves : G.Movement(i, state)
                };

                pieces.push(move_info);
            }
        }

        return pieces;
    }




    //Get possible board positions
    function boardPositions(){

        var board_positions = [];

        //Loop through all players pieces
        var i = player_pieces.length;
        while(i--){

            //If the piece can move loop through all board positions for that piece
            var moves = player_pieces[i]['moves'];
            if(moves.length > 0){

                var m = moves.length;

                while(m--){
                    //var tmpBoard        = board;
                    var previous_square = player_pieces[i]['pos'];
                    var current_square  = player_pieces[i]['moves'][m];
                    var tmp_state       = G.checkMove(previous_square, current_square, state);

                    //If legal move, add to list of possible positions
                    if(tmp_state){
                        board_positions.push(tmp_state);
                    }
                }
            }
        }


        return board_positions;
    }



};






































