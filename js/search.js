G.Search = function(game_state){
    "use strict";

    var board              = game_state.board;
    var player             = game_state.players['player'];
    var opponent           = game_state.players['opponent'];
    var player_pieces      = findPieces(player);
    var possible_positions = boardPositions();



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
                    moves : G.Movement(player, opponent, i, board[i], board)
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
                    var tmp_state       = G.checkMove(player, opponent, previous_square, current_square, board);

                    //If legal move, add to list of possible positions
                    if(tmp_state){
                        board_positions.push({
                            prev_sq  : previous_square,
                            cur_sq   : current_square,
                            state    : tmp_state
                        });
                    }
                }
            }
        }


        return board_positions;
    }



};






































