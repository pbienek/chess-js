G = function(){
    "use strict";
};


G.init = function(){

    this.player   = 'white';
    this.opponent = "black";

    this.pieces = {
        white : [1, 2, 3, 4, 5, 6],
        black : [11,12,13,14,15,16]
    };

    this.board = [
      //0,1, 2, 3, 4, 5, 6, 7, 8, 9
        0,0, 0, 0, 0, 0, 0, 0, 0 ,0,  //0
        0,0, 0, 0, 0, 0, 0, 0, 0 ,0,  //1
        0,3, 5, 4, 1, 2, 4, 5, 3 ,0,  //2
        0,6, 6, 6, 6, 6, 6, 6, 6 ,0,  //3
        0,0, 0, 0, 0, 0, 0, 0, 0 ,0,  //4
        0,0, 0, 0, 0, 0, 0, 0, 0 ,0,  //5
        0,0, 0, 0, 0, 0, 0, 0, 0 ,0,  //6
        0,0, 0, 0, 0, 0, 0, 0, 0 ,0,  //7
        0,16,16,16,16,16,16,16,16,0,  //8
        0,13,15,14,11,12,14,15,13,0,  //9
        0,0, 0, 0, 0, 0, 0, 0, 0, 0,  //10
        0,0, 0, 0, 0, 0, 0, 0, 0 ,0   //11
    ];

    this.oldBoard = [];

    //invalid squares
    this.invalids =
        [0,1,2,3,4,5,6,7,8,9,
            10,11,12,13,14,15,16,17,18,19,
            20,29,30,39,40,49,50,59,60,69,
            70,79,80,89,90,99,
            100,101,102,103,104,105,106,107,108,109,
            110,111,112,113,114,115,116,117,118,119
        ];


    //castling info
    this.castling    = false;
    this.cant_castle = [];
    this.rooks_moved = [];


    //Promotion
    this.promotion = false;

    //Game states
    this.check      = false;
    this.check_mate = false;
    this.stale_mate = false;


    //The players score
    this.score  = 0;


};

window.addEventListener('load', function() {
    G.init();

    G.Interface.boardSetup(G.board);
    G.Interface.playerMove();
});


function clone(obj) {
    var outpurArr = new Array();
    for (var i in obj) {
        outpurArr[i] = typeof (obj[i]) == 'object' ? this.clone(obj[i]) : obj[i];
    }
    return outpurArr;
}























