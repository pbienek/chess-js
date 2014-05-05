G.Interface = {

    boardSetup: function () {
        //Draw the board

        var i = G.board.length;
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

                $('#board').append('<div class="square ' + colours[x] + '" data-square="' + i + '"><div class="highlight"></div></div>');

                if(G.board[i] > 0){
                    var pos = $('[data-square='+ i +']').position();
                    $('#board').append('<div  style="top:'+pos.top+'px; left:'+pos.left+'px;" data-psquare="'+i+'" data-piece="' + G.board[i] + '" class="piece p' + G.board[i] + '"></div>');
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


//
//            //castling info
//            console.log(G.castling)
//            console.log(G.cant_castle)
//            console.log(G.rooks_moved)
//
//
//            console.log(G.promotion )
//
//
//            console.log(G.check     )
//            console.log(G.check_mate)
//            console.log(G.stale_mate)
//
//
//            console.log(G.score  = 0)








            current_square = $(this).data('psquare');


            //Check if friendly piece
            if(G.pieces[G.player].indexOf($(this).data('piece')) > -1){

                current_piece  = $(this).data('piece');
                previous_square = current_square;


                //Remove previous Highlights
                $('.highlight').removeClass('active');
                $('.highlight').removeClass('legal');


                //check the right pieces are being selected
                if(G.pieces[G.player].indexOf(current_piece) > -1){

                    //Highlight current selection
                    $('[data-square='+current_square+']').children('.highlight').addClass('active');

                    //Highlight legal moves
                    legal_squares = G.Movement(G.player, G.opponent, current_square, current_piece, G.board);
                    var ls = legal_squares.length;
                    while(ls--){
                        $('[data-square='+legal_squares[ls]+']').children('.highlight').addClass('legal');
                    }
                }

                //Check for second click and legal move
                if(legal_squares.indexOf(current_square) > -1){
                    console.log('testing tgisd')
                }
            }


            if(legal_squares.indexOf(current_square) > -1){
                var check = G.checkMove(G.player, G.opponent, previous_square, current_square, G.board);
                if(check){

                    G.Finalise(check);
                    G.Interface.movePiece(previous_square, current_square);

                    setTimeout(function(){
                        var gameData = clone(check);
                        G.AI(gameData);
                    },500);

                }
            }


        }); //End of piece selection


        $('.square').on('click', function(){

            current_square = $(this).data('square');

            //Check for second click and legal move
            if(legal_squares.indexOf(current_square) > -1){


                var check = G.checkMove(G.player, G.opponent, previous_square, current_square, G.board);
                if(check){

                    G.Finalise(check);
                    G.Interface.movePiece(previous_square, current_square);

                    setTimeout(function(){
                        var gameData = clone(check);
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


        if(G.castling){
            reposition(G.castling[0], G.castling[1]);
        }


        function reposition(previous_square, current_square){

            var newPos = $('[data-square='+current_square+']').position();

            $('[data-psquare='+previous_square+']').css(newPos);
            $('[data-psquare='+previous_square+']').data('psquare',current_square);
            $('[data-psquare='+previous_square+']').attr('data-psquare',current_square);

            //clear and reset
            legal_squares = [];
            $('.highlight').removeClass('active');
            $('.highlight').removeClass('legal');
        }
    }
};



