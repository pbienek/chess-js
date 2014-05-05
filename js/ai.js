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
    function getBest(positions){

        var equal_moves  = [];
        var worse_moves  = [];
        var best         = {
            move  : null,
            score : 0
        };

        for(var i = 0; i < positions.length; i++){

            var player_score = (positions[i].score - current_score);
            var opps_score   = (opponentsResponse(positions, i) - current_score);
            var gain         = (player_score - opps_score);

            if(gain > 0 && gain > best.score){
                best.move  = positions[i].move;
                best.score = gain;
            }

            if(gain == 0){
                equal_moves.push(positions[i].move);
            }

            else {
                worse_moves.push(positions[i].move);
            }
        }

        if(best.score > 0){
            return best.move;
        }

        if(equal_moves.length > 0){
            var x   = equal_moves.length;
            var rnd = Math.floor((Math.random() * x));

            return equal_moves[rnd];
        }

        else {
            var y    = worse_moves.length;
            var rndm = Math.floor((Math.random() * y));

            return worse_moves[rndm];
        }
    }




    function opponentsResponse(my_positions, i){

        var best_move       = my_positions[i].move.state;
        var player          = best_move.players.player;
        var opponent        = best_move.players.opponent;
        var opponents_moves = evaluate_moves(G.Search(best_move), player, opponent);



        return (opponents_moves[0].score);

    }
};



































