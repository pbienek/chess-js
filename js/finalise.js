G.Finalise = function(state){
    "use strict";

    G.S.player      = state.player;
    G.S.board       = state.board;
    G.S.scores      = state.scores;

    G.S.castling    = state.castling;
    G.S.cant_castle = state.cant_castle;
    G.S.rooks_moved = state.rooks_moved;

    G.S.promotion   = state.promotion;
    G.S.check       = false;
    G.S.check_mate  = false;
    G.S.stale_mate  = false;

    G.S.legal_moves      = [];
    G.S.attacked_squares = [];
};
