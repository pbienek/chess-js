G.Finalise = function(state){
    "use strict";

    if(state.check_mate){
        G.GameOver(G.Utils.opponent(state.player));
    }


//    G.S = state;
    G.S.player      = state.player;
    G.S.board       = state.board;
    G.S.scores      = state.scores;

    G.S.castling    = state.castling;
    G.S.cant_castle = state.cant_castle;
    G.S.rooks_moved = state.rooks_moved;

    G.S.promotion   = false;
    G.S.check       = false;
    G.S.check_mate  = false;
    G.S.stale_mate  = false;

    G.S.legal_moves      = [];
    G.S.attacked_squares = G.Utils.attackedSquares(state);

};
