G.AI = function(){

    var ii = 0;
    var current_state    = G.S;
    var player           = G.S.player;
    var opponent         = G.Utils.opponent(player);
    var current_score    = G.EvaluateBoard(current_state, player);
    var moves            = G.Search(G.S);
    var sorted_positions = evaluate_moves(moves, player);
    var best_pos         = getBestMove(sorted_positions);



    console.log(ii);
    G.Finalise(best_pos);
    G.Interface.movePiece(best_pos.previous_move.ps, best_pos.previous_move.cs);



    //Evaluate array of possible positions and return ordered array best to worsed
    function evaluate_moves(states, player) {
        var sorted_states = [];

        var i = states.length;
        while(i--){
            var score    = G.EvaluateBoard(states[i], player);
            ii++;
            sorted_states.push({
                move  : states[i],
                score : score
            });
        }

        //sort array by best to worst scores
        sorted_states.sort(function(a, b){
            return b.score - a.score;
        });


        return sorted_states;
    }



    //Compare best position to score of opponents best response, if best is lower try next move
    function getBestMove(states) {

        var sorted_states = [];

        //Run through possible moves and get opponents response scores
        var i = states.length;

        while (i--) {
            var opp_move   = opponentsResponse(states[i]).move;
            var opps_score = G.EvaluateBoard(opp_move, player) - current_score;

            sorted_states.push({
                move: states[i].move,
                score: opps_score
            });

        }

        //sort array by best to worst scores
        sorted_states.sort(function(a, b){
            return b.score - a.score;
        });



        var b = sorted_states.length;



        if (sorted_states[0].score == sorted_states[(b - 1)].score) {

            var rnd = Math.floor((Math.random() * b));
            console.log('average', sorted_positions)

            return sorted_states[rnd].move;

        } else {
            console.log('BEST', sorted_states)
            return sorted_states[0].move;
        }
    }






    function opponentsResponse(state){

        var best_move       = state.move;
        var player          = best_move.player;
        var opponents_moves = evaluate_moves(G.Search(best_move), player);


        return (opponents_moves[0]);

    }
};



































