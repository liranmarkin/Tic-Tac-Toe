var app = angular.module("game",[]);

app.controller('gameController',function() {
    this.turn = 1;
    this.board = [0,0,0,0,0,0,0,0,0];
    this.clicks = [0,0,0,0,0,0,0,0,0];
    //get display of cells
	this.getPic = function(cell){
		switch(this.board[cell]){
			case 0:
				return 'pics/blank.png';
				break;
			case 1:
				return 'pics/X.png';
				break;
			case 2:
				return 'pics/O.png';
				break;
			default:
				return 'pics/fail.png';
		}
	};
	
	//check winner
	this.checkWinner = function(){
		for(i = 0;i<3;i++){
			var victory = true;
			for(j=1;j<3;j++){
				if(this.board[3*i+j] != this.board[3*i+(j-1)] || this.board[3*i+j] == 0){
					victory = false;
				}
			}
			if(victory)
				return true;
		}
		for(j = 0;j<3;j++){
			var victory = true;
			for(i=1;i<3;i++){
				if(this.board[3*i+j] != this.board[3*(i-1)+j] || this.board[3*i+j] == 0){
					victory = false;
				}
			}
			if(victory)
				return true;
		}
		if(this.board[0] != 0 && this.board[0] == this.board[4] && this.board[0] == this.board[8])
			return true;
		if(this.board[2] != 0 && this.board[2] == this.board[4] && this.board[2] == this.board[6])
			return true;
		return false;
	};
	
	//action
    this.move = function(cell){
    	this.clicks[cell]++;
    	if(this.clicks[0] == 1 && this.clicks[1] == 2 && this.clicks[2] == 3 && this.clicks[3] == 4 && this.clicks[4] == 5 && this.clicks[5] == 6 && this.clicks[6] == 7 && this.clicks[7] == 8 && this.clicks[8] == 9 )
    		alert("oogachaka");
		if(this.board[cell] != 0)
			return false;
		this.board[cell] = this.turn;
		if(this.checkWinner()){
			alert("Player "+this.turn+" Won");
			this.refresh();
		}
		this.turn = 3-this.turn;
	};
	//refresh button
	this.refresh = function(){
		this.board = [0,0,0,0,0,0,0,0,0];
    	this.clicks = [0,0,0,0,0,0,0,0,0];
	};
	
	
});

