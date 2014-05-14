G.Search = function(state){
    "use strict";
    var ii = 0;
    var board              = state.board;
    var player             = state.player;
    var opponent           = G.Utils.opponent(player);

    var attacked_sqs       = state.attacked_squares;
    return getBestMove();

    //var possible_positions = boardPositions();



    function getBestMove() {
        var alpha      = -Infinity;
        var beta       = Infinity;
        var depth      = 2;
        var moves      = boardPositions(board, player);
        var best_pos   = {};
        var best_score = -100000;
        var mm         = [];

        var i = moves.length;
        while (i--) {


            var move_score = alphaBeta(moves[i], depth, alpha, beta, false);

            if (move_score >= best_score) {
                best_score = move_score;
                best_pos   = moves[i];
            }

            mm.push({ moves : moves[i], score : move_score});


            if(best_score > alpha) {
                alpha = best_score;
            }
        }

        console.log('Positions evaluated ', ii);
        console.log(mm)
        return checkSort(mm);

    }








    function alphaBeta(move, depth, alpha, beta, max_player) {


        //var opponent = G.Utils.opponent(player);

        if (depth == 0) {
            ii++;
            var pos_score = G.EvaluateBoard(move.board, player);
            //console.log(player)
            return  pos_score
        }

        if (max_player) {
            var child_states = boardPositions(move.board, player);
            //console.log(child_states)
            var i = child_states.length;

            while (i--) {

                alpha = Math.max(alpha, alphaBeta(child_states[i], (depth - 1), alpha, beta, false));
                if (beta < alpha) {
                    break;
                }
            }


            return alpha;

        } else {

            var child_states = boardPositions(move.board, opponent);
            //console.log(child_states)
            var i = child_states.length;

            while (i--) {
                beta = Math.min(beta, alphaBeta(child_states[i], (depth - 1), alpha, beta, true));
                if (beta < alpha) {
                    break;
                }
            }


            return beta;
        }
    }



    //Find positions of all players pieces
    function findPieces(board, player){

        var pieces = [];
        var i = board.length;

        while(i--){
            if(G.pieces[player].indexOf(board[i]) > -1){
                var move_info = {
                    pos   : i,
                    piece :board[i],
                    moves : G.Movement(i, board, player)
                };

                pieces.push(move_info);
            }
        }

        return pieces;
    }



    //Get possible board positions
    function boardPositions(board, player){
        var player_pieces   = findPieces(board, player);
        var board_positions = [];

        //Loop through all players pieces
        var i = player_pieces.length;
        while(i--){

            //If the piece can move loop through all board positions for that piece
            var moves = player_pieces[i]['moves'];
            if(moves.length > 0){

                var m = moves.length;

                while(m--){
                    var tmp_board       = board.slice(0);
                    var previous_square = player_pieces[i]['pos'];
                    var current_square  = player_pieces[i]['moves'][m];
                    //var tmp_state       = G.checkMove(previous_square, current_square, state);

                    tmp_board[previous_square] = 0;
                    tmp_board[current_square]  = player_pieces[i].piece;

                    //If legal move, add to list of possible positions
//                    if(tmp_state){
//                        board_positions.push(tmp_state);
//                    }
                    board_positions.push({
                        board : tmp_board,
                        ps    : previous_square,
                        cs    : current_square
                    });
                }
            }
        }


        //console.trace(board_positions)

        return board_positions;
    }


    function checkSort(move_list){
        //console.log(move_list)
        var sorted_list = move_list.sort(function(a, b){
            return  a.score - b.score;
        });

        var i = sorted_list.length;
        while(i--){
            console.log(sorted_list[i]);
            var tmp_state = G.checkMove(sorted_list[i].moves.ps, sorted_list[i].moves.cs, state);

            if(tmp_state){
                return tmp_state;
            }
        }
    }




    function evaluate_moves(boards, player) {
        var sorted_states = [];

        var i = boards.length;
        while(i--){
            var score    = G.EvaluateBoard(boards[i], player);
            ii++;
            boards[i].score = score;
            sorted_states.push(boards[i]);
        }

        //sort array by best to worst scores
        sorted_states.sort(function(a, b){
            return a.score - b.score;
        });


        return sorted_states;
    }


};