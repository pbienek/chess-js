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

            best_score = score;
            sorted_positions.push({
                move  : positions[i],
                score : score
            });
        }

        //sort array by best to worst scores
        sorted_positions.sort(function(a, b){
            return b.score - a.score;
        });


        return sorted_positions;
    }



    //Compare best position to score of opponents best response, if best is lower try next move
    function getBest(positions) {

        var sorted_positions = [];

        //Run through possible moves and get opponents response scores
        var i = positions.length;
        while (i--) {
            var opp_move = opponentsResponse(positions[i]).move.state.board;
            var opps_score = G.EvaluateBoard(opp_move, player, opponent) - current_score;

            sorted_positions.push({
                move: positions[i].move,
                score: opps_score
            });

        }

        //sort array by best to worst scores
        sorted_positions.sort(function(a, b){
            return b.score - a.score;
        });



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






    function opponentsResponse(my_position){

        var best_move       = my_position.move.state;
        var player          = best_move.players.player;
        var opponent        = best_move.players.opponent;
        var opponents_moves = evaluate_moves(G.Search(best_move), player, opponent);

        //console.log(opponents_moves[0].score);

        return (opponents_moves[0]);

    }
};



































