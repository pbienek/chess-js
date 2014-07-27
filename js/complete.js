//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?void(this._wrapped=n):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.6.0";var A=j.each=j.forEach=function(n,t,e){if(null==n)return n;if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return;return n};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var O="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},j.find=j.detect=function(n,t,r){var e;return k(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var k=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:k(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,j.property(t))},j.where=function(n,t){return j.filter(n,j.matches(t))},j.findWhere=function(n,t){return j.find(n,j.matches(t))},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);var e=-1/0,u=-1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;o>u&&(e=n,u=o)}),e},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);var e=1/0,u=1/0;return A(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;u>o&&(e=n,u=o)}),e},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=j.values(n)),n[j.random(n.length-1)]):j.shuffle(n).slice(0,Math.max(0,t))};var E=function(n){return null==n?j.identity:j.isFunction(n)?n:j.property(n)};j.sortBy=function(n,t,r){return t=E(t),j.pluck(j.map(n,function(n,e,u){return{value:n,index:e,criteria:t.call(r,n,e,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=E(r),A(t,function(i,a){var o=r.call(e,i,a,t);n(u,o,i)}),u}};j.groupBy=F(function(n,t,r){j.has(n,t)?n[t].push(r):n[t]=[r]}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=E(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.partition=function(n,t){var r=[],e=[];return A(n,function(n){(t(n)?r:e).push(n)}),[r,e]},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.contains(t,n)})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===j&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:j.now(),a=null,i=n.apply(e,u),e=u=null};return function(){var l=j.now();o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u),e=u=null):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o,c=function(){var l=j.now()-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=j.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return j.partial(t,n)},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=function(n){if(!j.isObject(n))return[];if(w)return w(n);var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.constant=function(n){return function(){return n}},j.property=function(n){return function(t){return t[n]}},j.matches=function(n){return function(t){if(t===n)return!0;for(var r in n)if(n[r]!==t[r])return!1;return!0}},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},j.now=Date.now||function(){return(new Date).getTime()};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};T.unescape=j.invert(T.escape);var I={escape:new RegExp("["+j.keys(T.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(T.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(I[n],function(t){return T[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),"function"==typeof define&&define.amd&&define("underscore",[],function(){return j})}).call(this);
//# sourceMappingURL=underscore-min.map


G = function(){
    "use strict";
};

G.computerMove = {};

G.init = function(){

    this.pieces = {
        white : [1, 2, 3, 4, 5, 6],
        black : [11,12,13,14,15,16]
    };

    //invalid squares
    this.invalids =
        [0,1,2,3,4,5,6,7,8,9,
            10,11,12,13,14,15,16,17,18,19,
            20,29,30,39,40,49,50,59,60,69,
            70,79,80,89,90,99,
            100,101,102,103,104,105,106,107,108,109,
            110,111,112,113,114,115,116,117,118,119
        ];

    G.S.attacked_squares = G.Utils.attackedSquares(G.S);
};


G.S = {

    player : 'white',

    board : [
      //0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        0, 0, 0, 0, 0, 0, 0, 0, 0 ,0,  //0
        0, 0, 0, 0, 0, 0, 0, 0, 0 ,0,  //1
        0, 3, 5, 4, 1, 2, 4, 5, 3 ,0,  //2
        0, 6, 6, 6, 6, 6, 6, 6, 6 ,0,  //3
        0, 0, 0, 0, 0, 0, 0, 0, 0 ,0,  //4
        0, 0, 0, 0, 0, 0, 0, 0, 0 ,0,  //5
        0, 0, 0, 0, 0, 0, 0, 0, 0 ,0,  //6
        0, 0, 0, 0, 0, 0, 0, 0, 0 ,0,  //7
        0, 16,16,16,16,16,16,16,16,0,  //8
        0, 13,15,14,11,12,14,15,13,0,  //9
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  //10
        0, 0, 0, 0, 0, 0, 0, 0, 0 ,0   //11
    ],

    scores      : {
        white : 0,
        black : 0
    },

    castling    : false,
    cant_castle : [],
    rooks_moved : [],

    check      : false,
    check_mate : false,
    stale_mate : false,
    promotion  : false,

    legal_moves      : [],
    attacked_squares : [],

    previous_move : {
        ps    : 0,
        cs    : 0,
        piece : 0
    }
};



G.GameOver = function(winner){
    console.log("Game Over! "+winner+" wins!")
};



























G.Utils = {

    boardHash : function(board){
        var hash = '';
        var i    = board.length;

        while(i--){
            hash += board[i];
        }

        return hash;
    },



    attackedSquares : function (state) {
        var player   = state.player;
        var board    = state.board;
        var opponent = G.Utils.opponent(player);
        var squares  = [];

        var sq = board.length;
        //for each square
        while (sq--) {

            //if square isn't empty
            if (board[sq] > 0) {

                var piece = board[sq];
                //run through all of opponents pieces
                var p = G.pieces[opponent].length;
                while (p--) {
                    //if the piece matches opponents, and their legal moves to the
                    if (piece == G.pieces[opponent][p]) {
                        var moves = G.Movement(sq, state, opponent);
                        squares = squares.concat(moves);
                        break;
                    }
                }
            }
        }

        return _.uniq(squares);
    },



    opponent : function(player){
        if(player === 'white') {
            return 'black';
        } else {
            return 'white';
        }
    },



    cloneState : function(state){

        var new_object = {
            player      : state.player,
            board       : state.board.slice(0),
            scores      : state.scores,
            castling    : state.castling,
            cant_castle : state.cant_castle.slice(0),
            rooks_moved : state.rooks_moved.slice(0),
            check       : state.check,
            check_mate  : state.check_mate,
            stale_mate  : state.stale_mate,
            promotion   : state.promotion,
            legal_moves      : state.legal_moves.slice(0),
            attacked_squares : state.attacked_squares.slice(0),
            previous_move : {
                ps: state.previous_move.ps,
                cs: state.previous_move.cs,
                piece: state.previous_move.piece
            }

        };

        return new_object;
    }


};



function clone(obj) {
    var outputArr = new Array();
    for (var i in obj) {
        outputArr[i] = typeof (obj[i]) == 'object' ? this.clone(obj[i]) : obj[i];
    }
    return outputArr;
}
//This script determines rules of movement

G.Movement = function(pos, state, alt_player){

    var player           = alt_player || state.player;
    var board            = state.board;
    var piece            = state.board[pos];
    var attacked_squares = state.attacked_squares;

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
                if(board[22] == 0 && board[23] == 0 && state.rooks_moved.indexOf(21) == -1){
                    //check to see if squares are attacked
                    if(attacked_squares.indexOf(22) == -1 && attacked_squares.indexOf(23) == -1 && attacked_squares.indexOf(24) == -1){
                        validMoves.push(22);
                    }
                }
                //Queen side
                if(board[25] == 0 && board[26] == 0 && board[27] == 0 && state.rooks_moved.indexOf(28) == -1){
                    //check to see if squares are attacked
                    if(attacked_squares.indexOf(24) == -1 && attacked_squares.indexOf(25) == -1 && attacked_squares.indexOf(26) == -1){
                        validMoves.push(26);
                    }
                }

            }


            //Black King
            if (piece == 11){
                //king side
                if(board[93] == 0 && board[92] == 0 && state.rooks_moved.indexOf(91) == -1){
                    //check to see if squares are attacked
                    if(attacked_squares.indexOf(92) == -1 && attacked_squares.indexOf(93) == -1 && attacked_squares.indexOf(94) == -1){
                        validMoves.push(92);
                    }
                }
                //Queen side
                if(board[95] == 0 && board[96] == 0 && board[97] == 0 && state.rooks_moved.indexOf(98) == -1){
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





G.checkMove = function(previous_square, current_square, state, king_check){

    var player           = state.player;
    var opponent         = G.Utils.opponent(player);
    var board            = state.board;
    var current_piece    = state.board[previous_square];


    var NEW_GAME_STATE = G.Utils.cloneState(state);

    NEW_GAME_STATE.castling = false;
    NEW_GAME_STATE.previous_move = {
        ps    : previous_square,
        cs    : current_square,
        piece : state.board[previous_square]
    };



//    {
//        board       : board.slice(0),
//        castling    : false,
//        c_castle    : clone(G.cant_castle),
//        rooks_moved : clone(G.rooks_moved),
//        promotion   : false,
//        players     : nextTurn(player)
//    };


//    var NEW_GAME_STATE = {
//        player      : opponent,
//        board       : board,
//        scores      : state.scores,
//        castling    : false,
//        cant_castle : state.cant_castle,
//        rooks_moved : state.rooks_moved,
//        check      : false,
//        check_mate : false,
//        stale_mate : false,
//        promotion  : false,
//        legal_moves      : [],
//        attacked_squares : [],
//        previous_move : {
//            ps: previous_square,
//            cs: current_square,
//            piece: state.board[previous_square]
//        }
//    };



    //update NEW_GAME_STATE.board
    NEW_GAME_STATE.board[previous_square] = 0;
    NEW_GAME_STATE.board[current_square]  = current_piece;


    if(king_check === true){

        NEW_GAME_STATE.attacked_squares = G.Utils.attackedSquares(NEW_GAME_STATE);
        if(kingCheck()){

            NEW_GAME_STATE.board[previous_square] = current_piece;
            NEW_GAME_STATE.board[current_square]  = 0;

            return false;
        }

    }




    if(current_piece == 1 || current_piece == 11){

        //check if castled and move piece;
        if(castleCheck(previous_square, current_square)){
            NEW_GAME_STATE.board[NEW_GAME_STATE.castling[0]] = 0;
            NEW_GAME_STATE.board[NEW_GAME_STATE.castling[1]] = NEW_GAME_STATE.castling[2];
        }
    }


    postMove(previous_square, current_square, current_piece);
    NEW_GAME_STATE.player = opponent;

    return NEW_GAME_STATE;

/////////////////////////////////////////////////////////////////////////////////////////////////////


    function kingCheck() {
        //Run through all of opponents legal moves and if they attack king return false
        var king_position    = NEW_GAME_STATE.board.indexOf(G.pieces[player][0]);


        //console.log(attacked_squares)

        return (NEW_GAME_STATE.attacked_squares.indexOf(king_position) > -1);
    }



    function castleCheck(prevPos, newPos){
        //Determine if the king has moved two spaces in either direction,
        //if so return new Rook position.

        //WK
        if(prevPos == 24){
            if(newPos == 22) {//KS
                NEW_GAME_STATE.castling = [21, 23, 3];//old pos, new pos, piece
                return true;
            }

            if(newPos == 26){//QS
                NEW_GAME_STATE.castling = [28,25, 3];
                return true;
            }
        }

        //BK
        if(prevPos == 94){
            if(newPos == 92) {//KS
                NEW_GAME_STATE.castling = [91, 93, 13];
                return true;
            }

            if(newPos == 96 && state.attacked_squares.indexOf(96) == -1) {//QS
                NEW_GAME_STATE.castling = [98, 95, 13];
                return true;
            }
        }

        return false;
    }


    function postMove(prepos, pos, piece){



        //check if king has moved
        if(piece == G.pieces[player][0] && state.cant_castle.indexOf(piece) == -1) {
            NEW_GAME_STATE.cant_castle.push(piece)
        }


        //check if rook has moved
        if(piece == G.pieces[player][2] && state.rooks_moved.indexOf(prepos) == -1){

            //console.log('Rooks Moved', piece);
            NEW_GAME_STATE.rooks_moved.push(prepos);
        }



        //todo Check for pawn promotion
        if(piece == 6 && pos > 90){
            NEW_GAME_STATE.promotion  = { pos: pos, colour : 2};
            NEW_GAME_STATE.board[pos] = 2;
        }
        if(piece == 16 && pos < 30){
            NEW_GAME_STATE.promotion  = { pos: pos, colour : 12};
            NEW_GAME_STATE.board[pos] = 12;
        }



        //todo Check for en pasant


        return true;
    }


    function nextTurn(player){
        if(player === 'white') {
            return {
                player   : 'black',
                opponent : 'white'
            }

        } else {
            return {
                player   : 'white',
                opponent : 'black'
            }
        }
    }




};


G.Finalise = function(state){
    "use strict";

    if(state.check_mate){
        G.GameOver(G.Utils.opponent(state.player));
    }


//    G.S = state;
    G.S.player      = state.player;
    G.S.board       = state.board;
    G.S.scores      = state.scores;

    G.S.castling    = state.castling;
    G.S.cant_castle = state.cant_castle;
    G.S.rooks_moved = state.rooks_moved;

    G.S.promotion   = false;
    G.S.check       = false;
    G.S.check_mate  = false;
    G.S.stale_mate  = false;

    G.S.legal_moves      = [];
    G.S.attacked_squares = G.Utils.attackedSquares(state);

};

G.Search = function(state, king_check){
    "use strict";

    //var king_check         = kc || false;
    var board              = state.board;
    var player             = state.player;
    var opponent           = G.Utils.opponent(player);
    var player_pieces      = findPieces(player);
    var possible_positions = boardPositions();
    var attacked_sqs       = state.attacked_squares;





    return possible_positions;




    //Evaluate array of possible positions and return ordered array best to worsed
    function evaluate_moves(states, player) {

        var sorted_states = [];

        var i = states.length;
        while(i--){
            var score    = G.EvaluateBoard(states[i], player);

            sorted_states.push({
                move  : states[i],
                score : score
            });
        }

        //sort array by best to worst scores
        sorted_states.sort(function(a, b){
            return b.score - a.score;
        });


        return sorted_states;
    }





    //Find positions of all players pieces
    function findPieces(player){

        var pieces = [];
        var i = board.length;

        while(i--){
            if(G.pieces[player].indexOf(board[i]) > -1){
                var move_info = {
                    pos   : i,
                    piece :board[i],
                    moves : G.Movement(i, state)
                };

                pieces.push(move_info);
            }
        }

        return pieces;
    }



    //Get possible board positions
    function boardPositions(){

        var board_positions = [];

        //Loop through all players pieces
        var i = player_pieces.length;
        while(i--){

            //If the piece can move loop through all board positions for that piece
            var moves = player_pieces[i]['moves'];
            if(moves.length > 0){

                var m = moves.length;

                while(m--){
                    //var tmpBoard        = board;
                    var previous_square = player_pieces[i]['pos'];
                    var current_square  = player_pieces[i]['moves'][m];
                    var tmp_state       = G.checkMove(previous_square, current_square, state, king_check);

                    //If legal move, add to list of possible positions
                    if(tmp_state){
                        board_positions.push(tmp_state);
                    }
                }
            }
        }



        return board_positions;
    }



};







































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

G.AI = function() {

    var start_time = new Date().getTime();


    var ii = 0;

    var player = G.S.player;
    var current_state = G.S;
    var current_score = G.EvaluateBoard(current_state, player);
    var opponent = G.Utils.opponent(player);
    var best_pos = getBestMove();





    //Once we're all done, we pass the choosen game state off to this interface
    G.Interface.movePiece(best_pos, best_pos.previous_move.ps, best_pos.previous_move.cs);

    var end_time = new Date().getTime();
    console.log('Positions evaluated : ', ii,'  Time Taken :  ', end_time - start_time, 'Best score: ', best_pos.score);







    function getBestMove(){
        var alpha      = -100000;
        var beta       = 100000;
        var depth      = 2;
        var moves      = evaluate_moves(G.Search(current_state, true), player);
        var best_pos   = {};
        var best_score = -100000;
        var mm = [];

        var i = moves.length;
        while(i--){
            var move_score = alphaBeta(moves[i].move, depth, alpha, beta, false);

            if(move_score > best_score) {
                best_score     = move_score;
                best_pos       = moves[i];
                moves[i].score = move_score;
                mm.push(moves[i]);
            }

        }


        //console.log(alpha, beta, best_score)
        console.log(mm)
        return best_pos.move;

    }



    function shallowSearch(current_state){

        var states           = G.Search(current_state, true);
        var evaluated_states = [];
        var i      = states.length;

        while(i--){
            var move_score = alphaBeta(states[i], 1, -Infinity, Infinity, false);

            states[i].score = move_score;
            evaluated_states.push({
                move  : states[i],
                score : move_score
            });
        }


        return evaluated_states.sort(function(a, b){
            return a.score - b.score;
        });
    }



//    function negamax(state, depth){
//        if (depth == 0) {
//            ii++;
//            var score = G.EvaluateBoard(state, player) - current_score;
//            //console.log(score)
//            return  score;
//        } else {
//
//            var child_states = G.Search(state);
//            var i = child_states.length;
//
//            while (i--) {
//
//                negamax(child_states[i], (depth - 1));
//            }
//        }
//    }


    function alphaBeta(state, depth, alpha, beta, max_player) {

        if (depth == 0) {
            ii++;
            var score = G.EvaluateBoard(state, player) - current_score;
            //console.log(score)
            return  score;
        }

        if (max_player) {
            var child_states = G.Search(state);

            var i = child_states.length;

            while (i--) {

                alpha = Math.max(alpha, alphaBeta(child_states[i], (depth - 1), alpha, beta, false));

                if (beta < alpha) {
                    break;
                }
            }


            return alpha;

        } else {

            var child_states = G.Search(state);
            var i = child_states.length;

            while (i--) {
                beta = Math.min(beta, alphaBeta(child_states[i], (depth - 1), alpha, beta, true));
                if (beta < alpha) {
                    break;
                }
            }


            return beta;
        }
    }



    function evaluate_moves(states, player) {
        var sorted_states = [];

        var i = states.length;
        while(i--){
            var score    = G.EvaluateBoard(states[i], player);
            ii++;
            sorted_states.push({
                move  : states[i],
                score : score
            });
        }

        //sort array by best to worst scores
        sorted_states.sort(function(a, b){
            return a.score - b.score;
        });


        return sorted_states;
    }



//OLD SEARCH CODE
//    function node2(){
//
//        var responses  = plySearch(current_state);
//        var best_score = -100000;
//        var best_move  = {};
//
//        var rl = responses.length;
//
//        while(rl--){
//
//            //Check for checkmate
//            if(responses[rl].score == 100000 && responses[rl].response == null){
//
//                best_score = responses[rl].score;
//                best_move  = responses[rl].move;
//
//                break;
//
//            } else {
//
//                var n2_responses = plySearch(responses[rl].response.move);
//                if(n2_responses[0].score > best_score){
//                    best_score = n2_responses[0].score;
//                    best_move  = responses[rl].move;
//                }
//
//            }
//        }
//
//        return best_move;
//    }
//
//
//
//
//    function plySearch(state) {
//
//        var next_moves = evaluate_moves(G.Search(state), player);
//        var sorted_moves = [];
//
//
//        //Compare best move to opponents response
//        var nm = next_moves.length;
//        while (nm--) {
//            var opp_moves = G.Search(next_moves[nm].move);
//
//
//            //Check for checkmate
//            if (opp_moves.length > 0) {
//
//                var opps_response = evaluate_moves(opp_moves, opponent)[0];
//                var new_score = G.EvaluateBoard(opps_response.move, player);
//
//                sorted_moves.push({
//                    state    : state,
//                    move     : next_moves[nm].move,
//                    response : opps_response,
//                    score    : new_score
//                });
//
//
//            } else { //No moves returned, must be check mate
//
//                next_moves[nm].move.check_mate = true;
//                sorted_moves.push({
//                    state    : state,
//                    move     : next_moves[nm].move,
//                    response : null,
//                    score    : 100000
//                });
//
//                break;
//            }
//        }
//
//        return sorted_moves.sort(function (a, b) {
//            return b.score - a.score;
//        });
//    }
//
//
//
//
//    //Evaluate array of possible positions and return ordered array best to worsed
//    function evaluate_moves(states, player) {
//
//        var sorted_states = [];
//
//        var i = states.length;
//        while(i--){
//            var score    = G.EvaluateBoard(states[i], player);
//            ii++;
//            sorted_states.push({
//                move  : states[i],
//                score : score
//            });
//        }
//
//        //sort array by best to worst scores
//        sorted_states.sort(function(a, b){
//            return b.score - a.score;
//        });
//
//
//        return sorted_states;
//    }

};


































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

                $('#board').append('<div class="square ' + colours[x] + '" data-square="' + i +'"><div class="highlight"></div></div>');
//                $('#board').append('<div class="square ' + colours[x] + '" data-square="' + i + '"><b>'+i+'</b><div class="highlight"></div></div>');              //For debugging

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

                var new_state = G.checkMove(previous_square, current_square, G.S, true);
                if(new_state){

                    G.Interface.movePiece(new_state, previous_square, current_square);

                    setTimeout(function(){
                        var gameData = new_state;
                        G.AI(gameData);
                    },500);

                }
            }


        }); //End of piece selection


        $('.square').on('click', function(){

            current_square = $(this).data('square');

            //Check for second click and legal move
            if(legal_squares.indexOf(current_square) > -1){


                var new_state = G.checkMove(previous_square, current_square, G.S, true);
                if(new_state){

                    G.Interface.movePiece(new_state, previous_square, current_square);

                    setTimeout(function(){
                        var gameData = new_state;
                        G.AI(gameData);
                    },500);

                }
            }
        });
    },




    movePiece : function(state, previous_square, current_square){

        //Set thinking icon
        $('.clock, .player').toggleClass('active');

        //remove piece for current square and next
        $('[data-psquare='+current_square+']').fadeOut(300, function(){
            this.remove();
        });

        reposition(previous_square, current_square);


        if(state.castling){
            reposition(state.castling[0], state.castling[1]);
        }


        if(state.promotion){
            promote(state.promotion.pos, state.promotion.colour)
        }


        function promote(sqr, piece){

            $('[data-psquare='+sqr+']').fadeOut(150, function(){
                $('[data-psquare='+sqr+']').removeClass().addClass( "piece p"+piece );

                $('[data-psquare='+sqr+']').data('piece', piece);
                $('[data-psquare='+sqr+']').attr('data-piece', piece);

                $('[data-psquare='+sqr+']').fadeIn(150);

            })



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

        G.Finalise(state);
    },




    gameOver : function(){
        setTimeout(function(){
            $('#board').append('<div class="square ' + colours[x] + '" data-square="' + i +'"><div class="highlight"></div></div>');
        }, 1000);
    }
};




G.CanvasInterface = function(){
//    var c_width  = 400; //$(window).width();
//    var c_height = 400;//$(window).height();
//
//
//    var canvasElement = $("<canvas width='"+c_width+"' height='"+c_height+"'></canvas>");
//    var canvas = canvasElement.get(0).getContext("2d");
//    canvasElement.appendTo('#game');



};
