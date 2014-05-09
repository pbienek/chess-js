G.EvaluateBoard = function(state, player){

    var position = state.board.slice(0);
    var opponent = G.Utils.opponent(player);




    return getScore();


    ////////////////////////////////////////////////////////////////////

    function getScore(){
        var player_score   = 0;
        var opponent_score = 0;

        var i = position.length;
        while(i--){

            if(G.pieces[player].indexOf(position[i]) > -1){
                player_score += pieceScore(position[i]);
            }

            if(G.pieces[opponent].indexOf(position[i]) > -1){
                opponent_score += pieceScore(position[i]);
            }
        }

        return (player_score - opponent_score);
    }




    //Assign value to piece
    function pieceScore(piece) {

        //Pawn
        if(piece == 6 || piece == 16) {
            return 100;
        }

        //Knight
        if(piece == 5 || piece == 15) {
            return 300;
        }

        //Bishop
        if(piece == 4 || piece == 14) {
            return 310;
        }

        //Rook
        if(piece == 3 || piece == 13) {
            return 500;
        }

        //Queen
        if(piece == 2 || piece == 12) {
            return 900;
        }

        //King
        if(piece == 1 || piece == 11) {
            return 10000;
        }
    }




    function pawnPositionalScore(square) {

        var board = [
            //0,   1, 2, 3, 4, 5, 6, 7, 8, 9
            0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  //0
            0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  //1

            0,  0, 0, 0, 0, 0, 0, 0, 0, 0,  //2
            0, 90,90,90,90,90,90,90,90, 0,  //3
            0, 50,50,50,50,50,50,50,50, 0,  //4
            0, 40,40,40,40,40,40,40,40, 0,  //5
            0, 30,30,30,30,30,30,30,30, 0,  //6
            0, 20,20,20,20,20,20,20,20, 0,  //7
            0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  //8
            0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  //9

            0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  //10
            0, 0, 0, 0, 0, 0, 0, 0, 0,  0   //11
        ];



    }




};
