var app = angular.module("game",[]);

app.controller('gameController',function() {
    this.turn = 1;
    this.board = [0,0,0,0,0,0,0,0,0];

    this.move = function(cell){
	if(this.board[cell] != 0)
		return false;
	this.board[cell] = this.turn;
	this.turn = 3-this.turn;
	}
});

