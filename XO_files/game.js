var app = angular.module("game",[]);

app.controller('gameController',function() {
    this.turn = 1;
    this.board = [0,0,0,0,0,0,0,0,0];

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

    this.move = function(cell){
	if(this.board[cell] != 0)
		return false;
	this.board[cell] = this.turn;
	this.turn = 3-this.turn;
	};

	this.refresh = function(){
		for(i = 0;i < 9;i++)
			this.board[i] = 0;
	};
});

