G.AI = function() {

    var start_time = new Date().getTime();


    var ii = 0;

    var player = G.S.player;
    var current_state = G.S;
    var current_score = G.EvaluateBoard(current_state, player);
    var opponent = G.Utils.opponent(player);
    var best_pos = getBestMove();





    //Once we're all done, we pass the choosen game state off to this interface
    G.Interface.movePiece(best_pos, best_pos.previous_move.ps, best_pos.previous_move.cs);

    var end_time = new Date().getTime();
    console.log('Positions evaluated : ', ii,'  Time Taken :  ', end_time - start_time, 'Best score: ', best_pos.score);







    function getBestMove(){
        var alpha      = -100000;
        var beta       = 100000;
        var depth      = 2;
        var moves      = evaluate_moves(G.Search(current_state, true), player);
        var best_pos   = {};
        var best_score = -100000;
        var mm = [];

        var i = moves.length;
        while(i--){
            var move_score = alphaBeta(moves[i].move, depth, alpha, beta, false);

            if(move_score > best_score) {
                best_score     = move_score;
                best_pos       = moves[i];
                moves[i].score = move_score;
                mm.push(moves[i]);
            }

        }


        //console.log(alpha, beta, best_score)
        console.log(mm)
        return best_pos.move;

    }



    function shallowSearch(current_state){

        var states           = G.Search(current_state, true);
        var evaluated_states = [];
        var i      = states.length;

        while(i--){
            var move_score = alphaBeta(states[i], 1, -Infinity, Infinity, false);

            states[i].score = move_score;
            evaluated_states.push({
                move  : states[i],
                score : move_score
            });
        }


        return evaluated_states.sort(function(a, b){
            return a.score - b.score;
        });
    }


    function alphaBeta(state, depth, alpha, beta, max_player) {

        if (depth == 0) {
            ii++;
            var score = G.EvaluateBoard(state, player) - current_score;
            //console.log(score)
            return  score;
        }

        if (max_player) {
            var child_states = G.Search(state);

            var i = child_states.length;

            while (i--) {

                alpha = Math.max(alpha, alphaBeta(child_states[i], (depth - 1), alpha, beta, false));

                if (beta < alpha) {
                    break;
                }
            }


            return alpha;

        } else {

            var child_states = G.Search(state);
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
            return a.score - b.score;
        });


        return sorted_states;
    }



//OLD SEARCH CODE
//    function node2(){
//
//        var responses  = plySearch(current_state);
//        var best_score = -100000;
//        var best_move  = {};
//
//        var rl = responses.length;
//
//        while(rl--){
//
//            //Check for checkmate
//            if(responses[rl].score == 100000 && responses[rl].response == null){
//
//                best_score = responses[rl].score;
//                best_move  = responses[rl].move;
//
//                break;
//
//            } else {
//
//                var n2_responses = plySearch(responses[rl].response.move);
//                if(n2_responses[0].score > best_score){
//                    best_score = n2_responses[0].score;
//                    best_move  = responses[rl].move;
//                }
//
//            }
//        }
//
//        return best_move;
//    }
//
//
//
//
//    function plySearch(state) {
//
//        var next_moves = evaluate_moves(G.Search(state), player);
//        var sorted_moves = [];
//
//
//        //Compare best move to opponents response
//        var nm = next_moves.length;
//        while (nm--) {
//            var opp_moves = G.Search(next_moves[nm].move);
//
//
//            //Check for checkmate
//            if (opp_moves.length > 0) {
//
//                var opps_response = evaluate_moves(opp_moves, opponent)[0];
//                var new_score = G.EvaluateBoard(opps_response.move, player);
//
//                sorted_moves.push({
//                    state    : state,
//                    move     : next_moves[nm].move,
//                    response : opps_response,
//                    score    : new_score
//                });
//
//
//            } else { //No moves returned, must be check mate
//
//                next_moves[nm].move.check_mate = true;
//                sorted_moves.push({
//                    state    : state,
//                    move     : next_moves[nm].move,
//                    response : null,
//                    score    : 100000
//                });
//
//                break;
//            }
//        }
//
//        return sorted_moves.sort(function (a, b) {
//            return b.score - a.score;
//        });
//    }
//
//
//
//
//    //Evaluate array of possible positions and return ordered array best to worsed
//    function evaluate_moves(states, player) {
//
//        var sorted_states = [];
//
//        var i = states.length;
//        while(i--){
//            var score    = G.EvaluateBoard(states[i], player);
//            ii++;
//            sorted_states.push({
//                move  : states[i],
//                score : score
//            });
//        }
//
//        //sort array by best to worst scores
//        sorted_states.sort(function(a, b){
//            return b.score - a.score;
//        });
//
//
//        return sorted_states;
//    }

};

































