
var board = new Array();
var added = new Array();
var score = 0;
var top = 240;
var cells=document.getElementsByClassName('cell');
$(document).ready(function(e){
    newgame();
});

function newgame(){
    init();
    generate(2);
    generate(2);
}

function init(){
    score=0;
    $('document #gameover').css('display','none');
    for(let x=0;x<4;x++)
    for(let y=0;y<4;y++){
       board[x][y]=0;
    }
    updateView();

}
function updateView(){
    var t=0;
    cells.map(function (){
        i=t/4;j=t%4;
        if(this.innerHTML===0){this.style.color=rgb(195, 216, 236);}
        else{
            this.innerText=board[i][j];
            this.style.color=getNumberColor(board[i][j]);
            this.style.backgroundColor=getNumberBackgroundColor(board[i][j]);
            this.style.fontSize=getFontSize(bord[i][j]);
        }
        t++;

    })

}
var scoreBox=$('#score');
function refresh(){
    updateView();
    scoreBox.innerHTML='score:'+score;
    if(!avail()) gameover();
}

function generate(){
  if(noBlank()) return false;
  var randx = parseInt(Math.floor(Math.random()*4));   
  var randy = parseInt(Math.floor(Math.random()*4));    
          while(true){        
      if (board[randx][randy] == 0)  break;    
      randx = parseInt(Math.floor(Math.random()*4));        
      randy = parseInt(Math.floor(Math.random()*4));    }
      var randNumber = Math.random()<0.8 ? 2 : 4;        
      board[randx][randy] = randNumber;    
      showNumberWithAnimation(randx,randy,randNumber);    
      return true;
}


function noBlank(){
    for(let x=0;x<4;x++)
    for(let y=0;y<4;y++){
       if(board[x][y]===0)return false;
    }
   return true;
}
function avail(){
    if(!noBlank())return true;
    for(let x=0;x<3;x++)
    for(let y=0;y<3;y++){
        if(board[x][y]===(board[x+1][y])||(board[x][y])===(board[x][y+1]) )return true;
    }
    return false;
}
function gameover(){}