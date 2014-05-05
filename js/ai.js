G.AI = function(game_data){

    var positions   = G.Search(game_data);
    var pos_num     = positions.length;
    var rnd         = Math.floor((Math.random() * pos_num));


    setTimeout(function(){
        move();
    }, 500);

    function move() {
        var position = positions[rnd];

        G.Finalise(position.state);

        G.Interface.movePiece(position.prev_sq, position.cur_sq);
    }












};