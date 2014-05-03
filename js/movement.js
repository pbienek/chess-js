//This script determines rules of movement

G.Movement = function(player, opponent, pos, piece){
    var validMoves = [];


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
        if(G.board[(pos + 10)] == 0){
            validMoves.push(pos + 10);
        }

        //If not moved, check 2 spaces ahead
        if(pos < 39 && G.board[(pos + 20)] == 0){
            validMoves.push(pos + 20);
        }

        //check if enemy is in position (left)
        if(G.board[(pos + 11)] > 10){
            validMoves.push(pos + 11);
        }
        //(right)
        if(G.board[(pos + 9)] > 10){
            validMoves.push(pos + 9);
        }
    }



    function PawnB(){
        //Check one space ahead
        if(G.board[(pos - 10)] == 0){
            validMoves.push(pos-10);
        }

        //If not moved, check 2 spaces ahead
        if(pos > 80 && G.board[(pos - 20)] == 0){
            validMoves.push(pos - 20);
        }

        //check if enemy is in position (left)
        if(G.board[(pos - 9)] < 10 && G.board[(pos - 9)] > 0){
            validMoves.push(pos - 9);
        }
        //(right)
        if(G.board[(pos - 11)] < 10 && G.board[(pos - 11)] > 0){
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

            if(G.board[p] == 0 && G.invalids.indexOf(p) < 0){
                validMoves.push(p);
            } else {
                var x = p;

                if(player == 'white' && G.board[p] < 10 && G.board[p] > 0){
                    if((p - 11) != pos){
                        break;
                    }
                }

                if(player == 'black' && G.board[piece] > 10){
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
            if(G.board[p] == 0 && G.invalids.indexOf(p) < 0){
                validMoves.push(p);
            } else {
                var x = p;

                if(player == 'white' && G.board[p] < 10 && G.board[p] > 0){
                    if((p - 9) != pos){
                        x = (p - 9);
                    }
                }
                if(player == 'black' && G.board[piece] > 10){
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
            if(G.board[p] == 0 && G.invalids.indexOf(p) < 0){
                validMoves.push(p);
            } else {
                var x = p;

                if(player == 'white' && G.board[p] < 10 && G.board[p] > 0){
                    if((p + 11) != pos){
                        break;
                    }
                }
                if(player == 'black' && G.board[piece] > 10){
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
            if(G.board[p] == 0 && G.invalids.indexOf(p) < 0){
                validMoves.push(p);
            } else {
                var x = p;
                if(player == 'white' && G.board[p] < 10 && G.board[p] > 0){
                    if((p - 9) != pos){
                        break;
                    }
                }
                if(player == 'black' && G.board[piece] > 10){
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

            if(G.board[p] == 0 && G.invalids.indexOf(p) < 0){
                validMoves.push(p);
            } else {
                var x = p;

                if(player == 'white' && G.board[p] < 10 && G.board[p] > 0){
                    if((p - 11) != pos){
                        break;
                    }
                }

                if(player == 'black' && G.board[piece] > 10){
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
            if(G.board[p] == 0 && G.invalids.indexOf(p) < 0){
                validMoves.push(p);
            } else {
                var x = p;

                if(player == 'white' && G.board[p] < 10 && G.board[p] > 0){
                    if((p - 9) != pos){
                        x = (p - 9);
                    }
                }
                if(player == 'black' && G.board[piece] > 10){
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
            if(G.board[p] == 0 && G.invalids.indexOf(p) < 0){
                validMoves.push(p);
            } else {
                var x = p;

                if(player == 'white' && G.board[p] < 10 && G.board[p] > 0){
                    if((p + 11) != pos){
                        break;
                    }
                }
                if(player == 'black' && G.board[piece] > 10){
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
            if(G.board[p] == 0 && G.invalids.indexOf(p) < 0){
                validMoves.push(p);
            } else {
                var x = p;
                if(player == 'white' && G.board[p] < 10 && G.board[p] > 0){
                    if((p - 9) != pos){
                        break;
                    }
                }
                if(player == 'black' && G.board[piece] > 10){
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
        if (G.board[(pos + 10)] == 0 || G.pieces[opponent].indexOf(G.board[(pos + 10)]) > -1) {
            validMoves.push(pos + 10);
        }

        //Up,right
        if (G.board[(pos + 9)] == 0 || G.pieces[opponent].indexOf(G.board[(pos + 9)]) > -1) {
            validMoves.push(pos + 9);
        }

        //Right
        if (G.board[(pos - 1)] == 0 || G.pieces[opponent].indexOf(G.board[(pos - 1)]) > -1) {
            validMoves.push(pos - 1);
        }

        //Right,down
        if (G.board[(pos - 11)] == 0 || G.pieces[opponent].indexOf(G.board[(pos -11)]) > -1) {
            validMoves.push(pos - 11);
        }

        //Down
        if (G.board[(pos - 10)] == 0 || G.pieces[opponent].indexOf(G.board[(pos - 10)]) > -1) {
            validMoves.push(pos - 10);
        }

        //Down,left
        if (G.board[(pos - 9)] == 0 || G.pieces[opponent].indexOf(G.board[(pos -9)]) > -1) {
            validMoves.push(pos - 9);
        }

        //Left
        if (G.board[(pos + 1)] == 0 || G.pieces[opponent].indexOf(G.board[(pos + 1)]) > -1) {
            validMoves.push(pos + 1);
        }

        //Left,up
        if (G.board[(pos + 11)] == 0 || G.pieces[opponent].indexOf(G.board[(pos + 11)]) > -1) {
            validMoves.push(pos + 11);
        }


        //Castle king side
        if (G.cant_castle.indexOf(piece) == -1) {

            //White King
            if (piece == 1){
                //king side
                if(G.board[22] == 0 && G.board[23] == 0 && G.rooks_moved.indexOf(21) == -1){
                    validMoves.push(22);
                }
                //Queen side
                if(G.board[25] == 0 && G.board[26] == 0 && G.board[27] == 0 && G.rooks_moved.indexOf(28) == -1){
                    validMoves.push(26);
                }

            }


            //Black King
            if (piece == 11){
                //king side
                if(G.board[93] == 0 && G.board[92] == 0 && G.rooks_moved.indexOf(91) == -1){
                    validMoves.push(92);
                }
                //Queen side
                if(G.board[95] == 0 && G.board[96] == 0 && G.board[97] == 0 && G.rooks_moved.indexOf(98) == -1){
                    validMoves.push(96);
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

            if(player == 'white' && G.board[piece] < 10 && G.board[piece] > 0){
                validMoves.splice(v,1);
            }

            if(player == 'black' && G.board[piece] > 10){
                validMoves.splice(v,1);
            }
        }
    }


    removeInvalids();

    return validMoves;

};




