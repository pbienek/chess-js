

function validMoves(pos, piece){
    var validMoves = [];

    switch (piece) {
        case 7://PW
            PawnW();
            break;
        case 17://PB
            PawnB();
            break;


        case 6:
            Knight();
            break;
        case (16):
            Knight();
            break;


        case (5):
            Bishop();
            break;
        case (15):
            Bishop();
            break;


        case(4):
            Rook();
            break;
        case(14):
            Rook();
            break;

        case(3):
            Queen();
            break;
        case(13):
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

        //If not moved, check 2 spaces ahead
        if(pos < 39 && board[(pos + 20)] == 0){
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

        //If not moved, check 2 spaces ahead
        if(pos > 80 && board[(pos - 20)] == 0){
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

            if(board[p] == 0 && invalids.indexOf(p) < 0){
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
            if(board[p] == 0 && invalids.indexOf(p) < 0){
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
            if(board[p] == 0 && invalids.indexOf(p) < 0){
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
            if(board[p] == 0 && invalids.indexOf(p) < 0){
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

            if(board[p] == 0 && invalids.indexOf(p) < 0){
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
            if(board[p] == 0 && invalids.indexOf(p) < 0){
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
            if(board[p] == 0 && invalids.indexOf(p) < 0){
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
            if(board[p] == 0 && invalids.indexOf(p) < 0){
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
    function King(){
        //Up
        if(board[(pos + 10)] == 0){
            validMoves.push(pos + 10);
        }

        //Up,right
        if(board[(pos + 9)] == 0){
            validMoves.push(pos + 9);
        }

        //Right
        if(board[(pos - 1)] == 0){
            validMoves.push(pos - 1);
        }

        //Right,down
        if(board[(pos - 11)] == 0){
            validMoves.push(pos - 11);
        }

        //Down
        if(board[(pos - 10)] == 0){
            validMoves.push(pos - 10);
        }

        //Down,left
        if(board[(pos - 9)] == 0){
            validMoves.push(pos - 9);
        }

        //Left
        if(board[(pos + 1)] == 0){
            validMoves.push(pos + 1);
        }

        //Left,up
        if(board[(pos + 11)] == 0){
            validMoves.push(pos + 11);
        }

    }





    //Remove any invalid moves. /////////////////////////////////////////////////////////////
    removeInvalids();
    function removeInvalids(){
        var v = validMoves.length;
        while(v--){
            var piece = validMoves[v];
            if(invalids.indexOf(piece) > -1){
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


    return validMoves;

}



