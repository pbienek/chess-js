G.Interface = {

    boardSetup: function () {
        //Draw the board

        var i = G.S.board.length;
        var square_count = 0;
        var colours = ['black', 'white'];
        var x = 0;

        while (i--) {
            if (G.invalids.indexOf(i) < 0) {

                if (square_count % 8 == 0) {
                    colours.reverse();
                }

                if (square_count % 2 == 0) {
                    x = 0;
                } else {
                    x = 1;
                }

                square_count++;

//                $('#board').append('<div class="square ' + colours[x] + '" data-square="' + i +'"><div class="highlight"></div></div>');
                $('#board').append('<div class="square ' + colours[x] + '" data-square="' + i + '"><b>'+i+'</b><div class="highlight"></div></div>');              //For debugging

                if(G.S.board[i] > 0){
                    var pos = $('[data-square='+ i +']').position();
                    $('#board').append('<div  style="top:'+pos.top+'px; left:'+pos.left+'px;" data-psquare="'+i+'" data-piece="' + G.S.board[i] + '" class="piece p' + G.S.board[i] + '"></div>');
                }
            }
        }
    },




    playerMove : function(){
        //Select and move pieces
        var current_square  = null,
            current_piece   = null,
            previous_square = null,
            legal_squares   = [];

        $('.piece').on('click', function(){

            current_square = $(this).data('psquare');


            //Check if friendly piece
            if(G.pieces[G.S.player].indexOf($(this).data('piece')) > -1){


                current_piece  = $(this).data('piece');
                previous_square = current_square;


                //Remove previous Highlights
                $('.highlight').removeClass('active');
                $('.highlight').removeClass('legal');


                //check the right pieces are being selected
                if(G.pieces[G.S.player].indexOf(current_piece) > -1){

                    //Highlight current selection
                    $('[data-square='+current_square+']').children('.highlight').addClass('active');

                    //Highlight legal moves
                    //var as = G.Utils.attackedSquares(G.S.player, G.S.board);
                    legal_squares = G.Movement(current_square, G.S);

                    var ls = legal_squares.length;
                    while(ls--){
                        $('[data-square='+legal_squares[ls]+']').children('.highlight').addClass('legal');
                    }
                }

            }

            //Check for second click and legal move
            if(legal_squares.indexOf(current_square) > -1){

                var new_state = G.checkMove(previous_square, current_square, G.S);
                if(new_state){

                    G.Finalise(new_state);
                    G.Interface.movePiece(previous_square, current_square);

                    setTimeout(function(){
                        var gameData = clone(new_state);
                        G.AI(gameData);
                    },500);

                }
            }


        }); //End of piece selection


        $('.square').on('click', function(){

            current_square = $(this).data('square');

            //Check for second click and legal move
            if(legal_squares.indexOf(current_square) > -1){


                var new_state = G.checkMove(previous_square, current_square, G.S);
                if(new_state){

                    G.Finalise(new_state);
                    G.Interface.movePiece(previous_square, current_square);

                    setTimeout(function(){
                        var gameData = clone(new_state);
                        G.AI(gameData);
                    },500);

                }
            }
        });
    },



    movePiece : function(previous_square, current_square){

        //remove piece for current square and next
        $('[data-psquare='+current_square+']').fadeOut(300, function(){
            this.remove();
        });

        reposition(previous_square, current_square);


        if(G.S.castling){
            reposition(G.S.castling[0], G.S.castling[1]);
        }


        function reposition(previous_square, current_square){

            var newPos = $('[data-square='+current_square+']').position();

            $('[data-psquare='+previous_square+']').css(newPos);
            $('[data-psquare='+previous_square+']').data('psquare',current_square);
            $('[data-psquare='+previous_square+']').attr('data-psquare',current_square);

            //clear and reset
//            legal_squares = [];
            $('.highlight').removeClass('active');
            $('.highlight').removeClass('legal');
        }
    }
};



