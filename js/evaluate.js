G.EvaluateBoard = function(board, player, opponent){

    var position = board;


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
    function pieceScore(piece){

        if(piece == 6 || piece == 16){
            return 1;
        }

        if(piece == 5 || piece == 15){
            return 3;
        }

        if(piece == 4 || piece == 14){
            return 3;
        }

        if(piece == 3 || piece == 13){
            return 5;
        }

        if(piece == 2 || piece == 12){
            return 9;
        }

        if(piece == 1 || piece == 11){
            return 1000;
        }
    }




};
