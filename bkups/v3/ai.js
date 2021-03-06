G.AI = function(){

    var ii = 0;
    var current_state    = G.S;
    var player           = G.S.player;
    var opponent         = G.Utils.opponent(player);
    var current_score    = G.EvaluateBoard(current_state, player);
//    var moves            = G.Search(G.S);
//    var sorted_positions = evaluate_moves(moves, player);
//    var best_pos         = getBestMove(sorted_positions);
    var best_pos = node2();



    console.log('Positions evaluated ',ii);


    //Once we're all done, we pass the choose game state off to this interface
    G.Interface.movePiece(best_pos, best_pos.previous_move.ps, best_pos.previous_move.cs);



    function node2(){

        var responses  = plySearch(current_state);
        var best_score = -100000;
        var best_move  = {};

        var rl = responses.length;

        while(rl--){

            //Check for checkmate
            if(responses[rl].score == 100000 && responses[rl].response == null){

                best_score = responses[rl].score;
                best_move  = responses[rl].move;

                break;

            } else {

                var n2_responses = plySearch(responses[rl].response.move);
                if(n2_responses[0].score > best_score){
                    best_score = n2_responses[0].score;
                    best_move  = responses[rl].move;
                }

            }
        }

        return best_move;
    }






    function plySearch(state) {

        var next_moves = evaluate_moves(G.Search(state), player).reverse();
        var sorted_moves = [];
        var best_score = next_moves[next_moves.length - 1].score;

        //Compare best move to opponents response
        var nm = next_moves.length;
        while (nm--) {
            var opp_moves = G.Search(next_moves[nm].move);


            //Check for checkmate
            if (opp_moves.length > 0) {

                var opps_response = evaluate_moves(opp_moves, opponent)[0];
                var new_score = G.EvaluateBoard(opps_response.move, player);

                sorted_moves.push({
                    state    : state,
                    move     : next_moves[nm].move,
                    response : opps_response,
                    score    : new_score
                });


            } else { //No moves returned, must be check mate

                next_moves[nm].move.check_mate = true;
                sorted_moves.push({
                    state    : state,
                    move     : next_moves[nm].move,
                    response : null,
                    score    : 100000
                });

                break;
            }
        }

        return sorted_moves.sort(function (a, b) {
            return b.score - a.score;
        });
    }



//Back up
//    function plySearch(state){
//
//        var next_moves   = evaluate_moves(G.Search(state), player).reverse();
//        var sorted_moves = [];
//        var best_score    = next_moves[next_moves.length - 1].score;
//
//        //Compare best move to opponents response
//        var nm = next_moves.length;
//        while(nm--){
//            var opp_moves     = G.Search(next_moves[nm].move);
//            var opps_response = evaluate_moves(opp_moves, opponent)[0];
//            var new_score     = G.EvaluateBoard(opps_response.move, player) - current_score;
//
//            sorted_moves.push({
//                state    : state,
//                move     : next_moves[nm].move,
//                response : opps_response,
//                score    : new_score
//            });
//
//            if(new_score == best_score){
//                break;
//            }
//        }
//
//        //console.log(sorted_moves)
//
//        return sorted_moves.sort(function(a, b){
//            return b.score - a.score;
//        });
//
//    }








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
//    function getBestMove(states) {
//
//        var sorted_states = [];
//
//        //Run through possible moves and get opponents response scores
//        var i = states.length;
//
//        while (i--) {
//
//            var opp_move  = opponentsResponse(states[i]).move;
//
//            //Check for checkmate
//            if(!opp_move) {
//
//                states[i].move.check_mate = true;
//
//                sorted_states.push({
//                    move: states[i].move,
//                    score: 1000000
//                });
//
//                break;
//            }
//
//            var opps_score = G.EvaluateBoard(opp_move, player) - current_score;
//
//            sorted_states.push({
//                move: states[i].move,
//                score: opps_score
//            });
//
//        }
//
//        //sort array by best to worst scores
//        sorted_states.sort(function(a, b){
//            return b.score - a.score;
//        });
//
//
//
//        var b = sorted_states.length;
//
//
//
//        if (sorted_states[0].score == sorted_states[(b - 1)].score) {
//
//            var rnd = Math.floor((Math.random() * b));
//            console.log('average', sorted_positions)
//
//            return sorted_states[rnd].move;
//
//        } else {
//            console.log('BEST', sorted_states)
//            return sorted_states[0].move;
//        }
//    }






    function opponentsResponse(state){

        var best_move       = state.move;
        var player          = best_move.player;
        console.log(player)
        var opponents_moves = evaluate_moves(G.Search(best_move), player);

        if(opponents_moves.length == 0){
            return false;
        }


        return (opponents_moves[0]);

    }
};



































