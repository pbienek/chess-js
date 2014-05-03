G.Interface = function(){


    //Draw the board
    var i = G.board.length;
    var square_count = 0;
    var colours = ['black','white'];
    var x = 0;

    while(i--){
        if(G.invalids.indexOf(i) < 0){

            if(square_count%8 == 0){
                colours.reverse();
            }

            if(square_count%2 == 0){
                x = 0;
            } else {
                x = 1;
            }

            square_count++;

            if(G.board[i] > 0){
                $('#game').append('<div class="square '+colours[x]+'" data-square="'+i+'"><div class="highlight"></div><div data-piece="'+ G.board[i]+'" class="piece p'+G.board[i]+'"></div></div>');
            } else {
                $('#game').append('<div class="square '+colours[x]+'" data-square="'+i+'"><div class="highlight"></div></div>');
            }
        }

    }








//Select and move pieces
    var current_square  = null,
        current_piece   = null,
        previous_square = null,
        legal_squares   = [];

    $('.square').on('click', function(){

        current_square = $(this).data('square');

        //Check for piece on square and is friendly
        if($(this).children('.piece').length && G.pieces[G.player].indexOf($(this).children('.piece').data('piece')) > -1){
            current_piece  = $(this).children('.piece').data('piece');
            previous_square = current_square;

            //Remove Hightlights
            $('.highlight').removeClass('active');
            $('.highlight').removeClass('legal');

            //check the right pieces are being selected
            if(G.pieces[G.player].indexOf(current_piece) > -1){

                //Highlight current selection
                $(this).children('.highlight').addClass('active');

                //Highlight legal moves
                legal_squares = G.Movement(G.player, G.opponent, current_square, current_piece);
                var ls = legal_squares.length;
                while(ls--){
                    $('[data-square='+legal_squares[ls]+']').children('.highlight').addClass('legal')
                }
            }

        }

        //Check for second click and legal move
        if(legal_squares.indexOf(current_square) > -1){



            if(G.CheckMove(G.player, G.opponent, previous_square, current_square, current_piece)){

                //remove piece for current square and next
                $('[data-square='+previous_square+']').children('.piece').remove();
                $('[data-square='+current_square+']').children('.piece').remove();

                //add to new square
                $('[data-square='+current_square+']').append('<div data-piece="'+current_piece+'" class="piece p'+current_piece+'"></div>');


                //clear and reset
                legal_squares = [];
                $('.highlight').removeClass('active');
                $('.highlight').removeClass('legal');


                if(G.castling){


                    $('[data-square='+G.castling[0]+']').children('.piece').remove();
                    $('[data-square='+G.castling[1]+']').append('<div data-piece="'+G.castling[2]+'" class="piece p'+G.castling[2]+'"></div>');

                    console.log('CASTLED');

                }

            }

        }

        //console.log(board)

    });
};