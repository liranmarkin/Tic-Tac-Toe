var app = angular.module("game",[]);

app.controller('gameController',function() {
    this.turn = 1;
    this.board = [0,0,0,0,0,0,0,0,0];
	//display
	this.display = function(cell){
		switch(this.board[cell]){
			case 0:
				return 'C';
				break;
			case 1:
				return 'X';
				break;
			case 2:
				return 'O';
				break;
			default:
				return 'F';
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
		for(i = 0;i < 9;i++)
			this.board[i] = 0;
	};
	
	
});

