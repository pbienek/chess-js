G.Finalise = function(data){
    G.board       = data.board;

    G.player      = data.players['player'];
    G.opponent    = data.players['opponent'];

    G.castling    = data.castling;
    G.cant_castle = data.c_castle;
    G.rooks_moved = data.rooks_moved;
    G.promotion   = data.promotion;

    //Game states
    G.check      = false;
    G.check_mate = false;
    G.stale_mate = false;
};
