//This script determines rules of movement

G.Movement = function(pos, state, alt_player){
//console.trace(alt_player)
    var player           = alt_player || state.player;
    var board            = state;
    var piece            = board[pos];
    var attacked_squares = [];

    var validMoves       = [];
    var opponent         = G.Utils.opponent(player);

    switch (piece) {
        case 6://PW
            PawnW();
            break;
        case 16://PB
            PawnB();
            break;


        case 5:
            Knight();
            break;
        case (15):
            Knight();
            break;


        case (4):
            Bishop();
            break;
        case (14):
            Bishop();
            break;


        case(3):
            Rook();
            break;
        case(13):
            Rook();
            break;

        case(2):
            Queen();
            break;
        case(12):
            Queen();
            break;


        case(1):
            King();
            break;
        case(11):
            King();
            break;



        default:
            console.log("ERROR: " + piece);
    }


    //Pawn Moves //////////////////////////////////////////////////////////////////
    function PawnW(){
        //Check one space ahead
        if(board[(pos + 10)] == 0){
            validMoves.push(pos + 10);
        }

        //If not moved, check 2 spaces ahead and make sure there is no blocker
        if(pos < 39 && board[(pos + 20)] == 0 && board[(pos + 10)] == 0){
            validMoves.push(pos + 20);
        }

        //check if enemy is in position (left)
        if(board[(pos + 11)] > 10){
            validMoves.push(pos + 11);
        }
        //(right)
        if(board[(pos + 9)] > 10){
            validMoves.push(pos + 9);
        }
    }



    function PawnB(){
        //Check one space ahead
        if(board[(pos - 10)] == 0){
            validMoves.push(pos-10);
        }

        //If not moved, check 2 spaces ahead and make sure there are no blockers
        if(pos > 80 && board[(pos - 20)] == 0 && board[(pos - 10)] == 0){
            validMoves.push(pos - 20);
        }

        //check if enemy is in position (left)
        if(board[(pos - 9)] < 10 && board[(pos - 9)] > 0){
            validMoves.push(pos - 9);
        }
        //(right)
        if(board[(pos - 11)] < 10 && board[(pos - 11)] > 0){
            validMoves.push(pos - 11);
        }
    }


    //Knight Moves //////////////////////////////////////////////////////////////////
    function Knight(){
        validMoves.push(pos - 21);
        validMoves.push(pos - 19);
        validMoves.push(pos - 12);
        validMoves.push(pos - 8);
        validMoves.push(pos + 21);
        validMoves.push(pos + 19);
        validMoves.push(pos + 12);
        validMoves.push(pos + 8);
    }


    //Bishop Moves //////////////////////////////////////////////////////////////////
    function Bishop(){

        //Forward,left
        for(var i = 1; i < 9; i++){
            var p = (pos + (11 * i));

            if(board[p] == 0 && G.invalids.indexOf(p) < 0){
                validMoves.push(p);
            } else {
                var x = p;

                if(player == 'white' && board[p] < 10 && board[p] > 0){
                    if((p - 11) != pos){
                        break;
                    }
                }

                if(player == 'black' && board[piece] > 10){
                    if((p - 11) != pos){
                        break;
                    }
                }

                validMoves.push(x);
                break;
            }
        }


        //Forward,right
        for(var i = 1; i < 9; i++){
            var p = (pos + (9 * i));
            if(board[p] == 0 && G.invalids.indexOf(p) < 0){
                validMoves.push(p);
            } else {
                var x = p;

                if(player == 'white' && board[p] < 10 && board[p] > 0){
                    if((p - 9) != pos){
                        x = (p - 9);
                    }
                }
                if(player == 'black' && board[piece] > 10){
                    if((p - 9) != pos){
                        x = (p - 9);
                    }
                }
                validMoves.push(x);
                break;
            }
        }


        //Back,right
        for(var i = 1; i < 9; i++){
            var p = (pos - (11 * i));
            if(board[p] == 0 && G.invalids.indexOf(p) < 0){
                validMoves.push(p);
            } else {
                var x = p;

                if(player == 'white' && board[p] < 10 && board[p] > 0){
                    if((p + 11) != pos){
                        break;
                    }
                }
                if(player == 'black' && board[piece] > 10){
                    if((p + 11) != pos){
                        break;
                    }
                }

                validMoves.push(x);
                break;
            }
        }


        //Back,left
        for(var i = 1; i < 9; i++){
            var p = (pos - (9 * i));
            if(board[p] == 0 && G.invalids.indexOf(p) < 0){
                validMoves.push(p);
            } else {
                var x = p;
                if(player == 'white' && board[p] < 10 && board[p] > 0){
                    if((p - 9) != pos){
                        break;
                    }
                }
                if(player == 'black' && board[piece] > 10){
                    if((p - 9) != pos){
                        break;
                    }
                }

                validMoves.push(x);
                break;
            }
        }

    }



    //Rook //////////////////////////////////////////////////////////////////
    function Rook(){

        //left
        for(var i = 1; i < 9; i++){
            var p = (pos + i);

            if(board[p] == 0 && G.invalids.indexOf(p) < 0){
                validMoves.push(p);
            } else {
                var x = p;

                if(player == 'white' && board[p] < 10 && board[p] > 0){
                    if((p - 11) != pos){
                        break;
                    }
                }

                if(player == 'black' && board[piece] > 10){
                    if((p - 11) != pos){
                        break;
                    }
                }

                validMoves.push(x);
                break;
            }
        }


        //right
        for(var i = 1; i < 9; i++){
            var p = (pos - i);
            if(board[p] == 0 && G.invalids.indexOf(p) < 0){
                validMoves.push(p);
            } else {
                var x = p;

                if(player == 'white' && board[p] < 10 && board[p] > 0){
                    if((p - 9) != pos){
                        x = (p - 9);
                    }
                }
                if(player == 'black' && board[piece] > 10){
                    if((p - 9) != pos){
                        x = (p - 9);
                    }
                }
                validMoves.push(x);
                break;
            }
        }


        //Up
        for(var i = 1; i < 9; i++){
            var p = (pos - (10 * i));
            if(board[p] == 0 && G.invalids.indexOf(p) < 0){
                validMoves.push(p);
            } else {
                var x = p;

                if(player == 'white' && board[p] < 10 && board[p] > 0){
                    if((p + 11) != pos){
                        break;
                    }
                }
                if(player == 'black' && board[piece] > 10){
                    if((p + 11) != pos){
                        break;
                    }
                }

                validMoves.push(x);
                break;
            }
        }


        //Down
        for(var i = 1; i < 9; i++){
            var p = (pos + (10 * i));
            if(board[p] == 0 && G.invalids.indexOf(p) < 0){
                validMoves.push(p);
            } else {
                var x = p;
                if(player == 'white' && board[p] < 10 && board[p] > 0){
                    if((p - 9) != pos){
                        break;
                    }
                }
                if(player == 'black' && board[piece] > 10){
                    if((p - 9) != pos){
                        break;
                    }
                }

                validMoves.push(x);
                break;
            }
        }

    }



    //Queen //////////////////////////////////////////////////////////////////
    function Queen(){
        Rook();
        Bishop();
    }





    //KING
    function King() {
        //Up
        if (board[(pos + 10)] == 0 || G.pieces[opponent].indexOf(board[(pos + 10)]) > -1) {
            validMoves.push(pos + 10);
        }

        //Up,right
        if (board[(pos + 9)] == 0 || G.pieces[opponent].indexOf(board[(pos + 9)]) > -1) {
            validMoves.push(pos + 9);
        }

        //Right
        if (board[(pos - 1)] == 0 || G.pieces[opponent].indexOf(board[(pos - 1)]) > -1) {
            validMoves.push(pos - 1);
        }

        //Right,down
        if (board[(pos - 11)] == 0 || G.pieces[opponent].indexOf(board[(pos -11)]) > -1) {
            validMoves.push(pos - 11);
        }

        //Down
        if (board[(pos - 10)] == 0 || G.pieces[opponent].indexOf(board[(pos - 10)]) > -1) {
            validMoves.push(pos - 10);
        }

        //Down,left
        if (board[(pos - 9)] == 0 || G.pieces[opponent].indexOf(board[(pos -9)]) > -1) {
            validMoves.push(pos - 9);
        }

        //Left
        if (board[(pos + 1)] == 0 || G.pieces[opponent].indexOf(board[(pos + 1)]) > -1) {
            validMoves.push(pos + 1);
        }

        //Left,up
        if (board[(pos + 11)] == 0 || G.pieces[opponent].indexOf(board[(pos + 11)]) > -1) {
            validMoves.push(pos + 11);
        }


        //Castle king side
        if (G.S.cant_castle.indexOf(piece) == -1) {

            //White King
            if (piece == 1){
                //king side
                if(board[22] == 0 && board[23] == 0 /*&& state.rooks_moved.indexOf(21) == -1*/){
                    //check to see if squares are attacked
                    if(attacked_squares.indexOf(22) == -1 && attacked_squares.indexOf(23) == -1 && attacked_squares.indexOf(24) == -1){
                        validMoves.push(22);
                    }
                }
                //Queen side
                if(board[25] == 0 && board[26] == 0 && board[27] == 0 /*&& state.rooks_moved.indexOf(28) == -1*/){
                    //check to see if squares are attacked
                    if(attacked_squares.indexOf(24) == -1 && attacked_squares.indexOf(25) == -1 && attacked_squares.indexOf(26) == -1){
                        validMoves.push(26);
                    }
                }

            }


            //Black King
            if (piece == 11){
                //king side
                if(board[93] == 0 && board[92] == 0 /*&& state.rooks_moved.indexOf(91) == -1*/){
                    //check to see if squares are attacked
                    if(attacked_squares.indexOf(92) == -1 && attacked_squares.indexOf(93) == -1 && attacked_squares.indexOf(94) == -1){
                        validMoves.push(92);
                    }
                }
                //Queen side
                if(board[95] == 0 && board[96] == 0 /*&& board[97] == 0 && state.rooks_moved.indexOf(98) == -1*/){
                    //check to see if squares are attacked
                    if(attacked_squares.indexOf(94) == -1 && attacked_squares.indexOf(95) == -1 && attacked_squares.indexOf(96) == -1){
                        validMoves.push(96);
                    }
                }

            }
        }

    }





    //Remove any invalid moves. /////////////////////////////////////////////////////////////
    function removeInvalids(){
        var v = validMoves.length;
        while(v--){
            var piece = validMoves[v];
            if(G.invalids.indexOf(piece) > -1){
                validMoves.splice(v,1);
            }

            if(player == 'white' && board[piece] < 10 && board[piece] > 0){
                validMoves.splice(v,1);
            }

            if(player == 'black' && board[piece] > 10){
                validMoves.splice(v,1);
            }
        }
    }


    removeInvalids();

    return validMoves;

};




