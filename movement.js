var keymap = {
    38: 0, // Up
    39: 1, // Right
    40: 2, // Down
    37: 3, // Left
    87: 0, // W
    68: 1, // D
    83: 2, // S
    65: 3  // A
  };
document.onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e){
        let k=keymap[e.keyCode];
        switch(k){
            case 0: moveUp();
                    generate();
                    refresh();
                    break;
            case 1: moveRight();
                    generate();
                    refresh();
                    break;
            case 2: moveDown();
                    generate();
                    refresh();
                    break;
            case 3: moveLeft();
                    generate();
                    refresh();
                    break;
        }
    }
  }

 function moveUp(){
    let i,j,k,l;
    for(k=0;k<4;k++)
         for(l=0;l<4;l++){
                 i=k;j=l;
             while((board[i][j]>0)&&(i>0)&&(board[i-1][j]==0)){ //移动空位
                 board[i-1][j]=board[i][j];
                 board[i][j]=0;
                 i--;}}
    for(k=0;k<4;k++)
         for(l=0;l<4;l++){
                 i=k;j=l;//合并相同项
              if((board[i][j])&&(board[i][j])==(board[i-1][j])){
                     board[i-1][j]*=2;
                     score+=board[i-1][j];
                     board[i][j]=0;
              }}
     for(k=0;k<4;k++)
         for(l=0;l<4;l++){
                 i=k;j=l;
             while((board[i][j]>0)&&(i>0)&&(board[i-1][j]==0)){ //移动空位
                 board[i-1][j]=board[i][j];
                 board[i][j]=0;
                 i--;}}
 }