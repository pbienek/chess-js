G.EvaluateBoard = function(state, player){

    var position = state.board;

    //var player   = state.player;
    var opponent = G.Utils.opponent(player);



    return getScore();


    ////////////////////////////////////////////////////////////////////

    function getScore(){
        var player_score   = 0;
        var opponent_score = 0;

        var i = position.length;
        while(i--){

            if(G.pieces[player].indexOf(position[i]) > -1){
                player_score += pieceScore(position[i], i);
            }

            if(G.pieces[opponent].indexOf(position[i]) > -1){
                opponent_score += pieceScore(position[i], i);
            }
        }

        return (player_score - opponent_score);
    }




    //Assign value to piece
    function pieceScore(piece, position) {

        //Pawn
        if(piece == 6 || piece == 16) {

            return 100 + pawnPositionalScore(position, piece)
        }

        //Knight
        if(piece == 5 || piece == 15) {

            return 300 + knightPositionalScore(position, piece);
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
            return 10000 + kingPositionalScore(position, piece);
        }
    }




    function pawnPositionalScore(square, piece) {

        var board = [
            //0, 1,  2,  3,  4,  5,  6,  7,  8,    9
            0,   0,  0,  0,  0,  0,  0,  0,  0,    0,  //0
            0,   0,  0,  0,  0,  0,  0,  0,  0,    0,  //1


            0,    0,  0,  0,  0,  0,  0,  0,  0,   0,  //2
            0,   30, 30, 30,  0,  0, 30, 30, 30,   0,  //3
            0,    0,  0,  0, 20, 20,  0,  0,  0,   0,  //4
            0,    0,  0, 10, 30, 30, 10,  0,  0,   0,  //5
            0,   20, 20, 30, 40, 40, 30, 20, 20,   0,  //6
            0,   30, 30, 40, 50, 50, 40, 30, 30,   0,  //7
            0,   50, 50, 60, 70, 70, 60, 50, 50,   0,  //8
            0,   0,  0,  0,  0,  0,  0,  0,  0,    0,  //9


            0,   0,  0,  0,  0,  0,  0,  0,  0,    0,  //10
            0,   0,  0,  0,  0,  0,  0,  0,  0,    0   //11
        ];

        if(piece == 6){ //white

            return board[square]

        } else { //Black

            return board.reverse()[square];
        }
    }


    function knightPositionalScore(square, piece) {

        var board = [
           //0,  1,  2,  3,  4,  5,  6,  7,  8,    9
            0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //0
            0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //1


            0, -50,-20,-10,-10,-10,-10,-20,-50,   0,  //2
            0, -30,  0,  0,  0,  0,  0,  0,-30,   0,  //3
            0, -20,  0, 10, 10, 10, 10,  0,-20,   0,  //4
            0, -20,  0, 20, 20, 20, 20,  0,-20,   0,  //5
            0, -20,  0, 20, 35, 35, 20,  0,-20,   0,  //6
            0, -20,  0, 30, 40, 40, 30,  0,-20,   0,  //7
            0, -30,  0, 10, 20, 20, 10,  0,-30,   0,  //8
            0, -50,-20,-10,-10,-10,-10,-20,-50,   0,  //9


            0,   0,  0,  0,  0,  0,  0,  0,  0,    0,  //10
            0,   0,  0,  0,  0,  0,  0,  0,  0,    0   //11
        ];

        if(piece == 6){ //white

            return board[square]

        } else { //Black

            return board.reverse()[square];
        }
    }


    function kingPositionalScore(square, piece) {

        var board = [
            //0, 1,  2,  3,  4,  5,  6,  7,  8,    9
            0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //0
            0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //1


            0,  30, 30, 10,-10,  0, 10, 30, 30,   0,  //2
            0, -10,-10,-20,-20,-20,-20,-10,-10,   0,  //3
            0,   0,  0,-30,-30,-30,-30,  0,  0,   0,  //4
            0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //5
            0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //6
            0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //7
            0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //8
            0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //9


            0,   0,  0,  0,  0,  0,  0,  0,  0,    0,  //10
            0,   0,  0,  0,  0,  0,  0,  0,  0,    0   //11
        ];

        if(piece == 1){ //white

            return board[square]

        } else { //Black

            return board.reverse()[square];
        }
    }





};








//var board = [
//    //0, 1,  2,  3,  4,  5,  6,  7,  8,    9
//    0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //0
//    0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //1
//
//
//    0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //2
//    0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //3
//    0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //4
//    0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //5
//    0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //6
//    0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //7
//    0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //8
//    0,   0,  0,  0,  0,  0,  0,  0,  0,   0,  //9
//
//
//    0,   0,  0,  0,  0,  0,  0,  0,  0,    0,  //10
//    0,   0,  0,  0,  0,  0,  0,  0,  0,    0   //11
//];
