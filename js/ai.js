G.AI = function(game_data){

    var game = game_data;
    var player           = G.player;
    var opponent         = G.opponent;
    var current_score    = G.EvaluateBoard(G.board, G.player, G.opponent);
    var moves            = G.Search(game);
    var sorted_positions = evaluate_moves(moves, player, opponent);


    var best_pos         = getBest(sorted_positions);


    G.Finalise(best_pos.state);
    G.Interface.movePiece(best_pos.prev_sq, best_pos.cur_sq);

    //Evaluate array of possible positions and return ordered array best to worsed
    function evaluate_moves(positions, player, opponent) {
        var best_score       = 0;
        var sorted_positions = [];


        var i = positions.length;
        while(i--){
            var board    = positions[i].state.board;
            var score    = G.EvaluateBoard(board, player, opponent);

            if(score > best_score){

                best_score = score;
                sorted_positions.unshift({
                    move  : positions[i],
                    score : score
                });

            } else {

                sorted_positions.push({
                    move  : positions[i],
                    score : score
                });
            }
        }

        return sorted_positions;
    }



    //Compare best position to score of opponents best response, if best is lower try next move
    function getBest(positions) {

        var best_score = -100;
        var sorted_positions = [];


        var i = positions.length;
        while (i--) {
            var opp_move = opponentsResponse(positions[i]).move.state.board;
            var opps_score = G.EvaluateBoard(opp_move, player, opponent) - current_score;


            if (opps_score > best_score) {

                best_score = opps_score;
                sorted_positions.unshift({
                    move: positions[i].move,
                    score: opps_score
                });

            } else {

                sorted_positions.push({
                    move: positions[i].move,
                    score: opps_score
                });
            }

        }

        var b = sorted_positions.length;

        if (sorted_positions[0].score == sorted_positions[(b - 1)].score) {

            var rnd = Math.floor((Math.random() * b));
            console.log('average', sorted_positions)

            return sorted_positions[rnd].move;

        } else {
            console.log('BEST', sorted_positions)
            return sorted_positions[0].move;

        }
    }


//            if(opps_score > current_score && opps_score > best.score){
//                console.log('test')
//                best.move  = positions[i].move;
//                best.score = player_score;
//                best.osc   = opps_score
//            }
//
//            if(opps_score == current_score){
//
//                var x = {
//                    move  : positions[i].move,
//                    score : player_score,
//                    osc   : opps_score
//                }
//                equal_moves.push(x);
//            }
//
//            else {
//
//                var x = {
//                    move  : positions[i].move,
//                    score : player_score,
//                    osc   : opps_score
//                }
//                worse_moves.push(x);
//            }
//        }



//        if(best.score > current_score){
//            console.log('BEST', best)
//            return best.move;
//        }
//
//        if(equal_moves.length > 0){
//            var x   = equal_moves.length;
//            var rnd = Math.floor((Math.random() * x));
//            console.log('equal', equal_moves[rnd])
//            return equal_moves[rnd].move;
//        }
//
//        else {
//            var y    = worse_moves.length;
//            var rndm = Math.floor((Math.random() * y));
//            console.log('worsed', equal_moves[rnd])
//            return worse_moves[rndm].move;
//        }





    function opponentsResponse(my_position){

        var best_move       = my_position.move.state;
        var player          = best_move.players.player;
        var opponent        = best_move.players.opponent;
        var opponents_moves = evaluate_moves(G.Search(best_move), player, opponent);

        //console.log(opponents_moves[0].score);

        return (opponents_moves[0]);

    }
};



































